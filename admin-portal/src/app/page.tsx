"use client";

import React, { useState, useEffect } from "react";
import {
  Mail,
  Users,
  User,
  Briefcase,
  Trash2,
  Edit3,
  Search,
  LogOut,
  Lock,
  Phone,
  GraduationCap,
  ExternalLink,
  Database,
  CheckCircle,
  AlertTriangle,
  Loader2,
  Calendar,
  X,
  Check,
  Slash
} from "lucide-react";

interface Contact {
  _id: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
  createdAt: string;
}

interface Registration {
  _id: string;
  name: string;
  phone: string;
  email: string;
  branch: string | null;
  year: number | null;
  startup: string;
  role: string;
  linkedin: string;
  status: "PENDING" | "APPROVED" | "REJECTED";
  emailStatus: "SENT" | "FAILED" | "NOT_SENT";
  createdAt: string;
}

interface Toast {
  message: string;
  type: "success" | "error";
  id: number;
}

export default function AdminPage() {
  // Auth state
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  // Data state
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [registrations, setRegistrations] = useState<Registration[]>([]); // Holds Pending
  const [alumni, setAlumni] = useState<Registration[]>([]); // Holds Approved/Rejected
  const [dataLoading, setDataLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"registrations" | "contacts">("registrations");
  
  // Alumni Sub-tab by status
  const [alumniStatusTab, setAlumniStatusTab] = useState<"PENDING" | "APPROVED" | "REJECTED">("PENDING");
  const [actionLoadingId, setActionLoadingId] = useState<string | null>(null);

  // Search & Filter
  const [alumniSearch, setAlumniSearch] = useState("");
  const [contactSearch, setContactSearch] = useState("");

  // Modal Editing state
  const [editingAlumni, setEditingAlumni] = useState<Registration | null>(null);
  const [editForm, setEditForm] = useState({
    name: "",
    email: "",
    phone: "",
    branch: "",
    year: "",
    startup: "",
    role: "",
    linkedin: ""
  });
  const [editLoading, setEditLoading] = useState(false);

  // Toasts
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (message: string, type: "success" | "error") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { message, type, id }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 5000);
  };

  // Check auth state on load
  useEffect(() => {
    fetchSession();
  }, []);

  const fetchSession = async () => {
    try {
      const res = await fetch("/api/auth/session");
      if (res.ok) {
        setIsAuthenticated(true);
        fetchData();
      } else {
        setIsAuthenticated(false);
      }
    } catch {
      setIsAuthenticated(false);
    }
  };

  const fetchData = async () => {
    setDataLoading(true);
    try {
      const [contactsRes, regsRes] = await Promise.all([
        fetch("/api/contacts"),
        fetch("/api/registrations")
      ]);

      if (contactsRes.ok && regsRes.ok) {
        const contactsData = await contactsRes.json();
        const regsData = await regsRes.json();
        setContacts(contactsData.contacts || []);
        setRegistrations(regsData.registrations || []);
        setAlumni(regsData.alumni || []);
      } else {
        showToast("Failed to fetch database contents", "error");
      }
    } catch {
      showToast("Error connecting to server", "error");
    } finally {
      setDataLoading(false);
    }
  };

  // Auth Handlers
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError("");
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailInput, password: passwordInput })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setIsAuthenticated(true);
        showToast("Logged in successfully", "success");
        fetchData();
      } else {
        setLoginError(data.error || "Invalid email or password");
      }
    } catch {
      setLoginError("Could not establish server connection");
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/auth/logout", { method: "POST" });
      if (res.ok) {
        setIsAuthenticated(false);
        setContacts([]);
        setRegistrations([]);
        setAlumni([]);
        showToast("Logged out successfully", "success");
      }
    } catch {
      showToast("Failed to logout cleanly", "error");
    }
  };

  // Approve / Reject status update handler
  const handleUpdateStatus = async (id: string, newStatus: "APPROVED" | "REJECTED") => {
    setActionLoadingId(id);
    try {
      const res = await fetch("/api/registrations", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        if (data.migrated) {
          // Remove from registrations (pending), and push to alumni list (processed)
          setRegistrations((prev) => prev.filter((r) => r._id !== id));
          setAlumni((prev) => [data.registration, ...prev]);
        } else {
          // Just update within the alumni list
          setAlumni((prev) =>
            prev.map((r) => (r._id === id ? data.registration : r))
          );
        }

        if (data.registration.emailStatus === "FAILED") {
          showToast(`Alumni marked as ${newStatus.toLowerCase()} but email notification failed to send due to a server error. You can retry manually.`, "error");
        } else {
          showToast(`Alumni registration successfully ${newStatus.toLowerCase()} and confirmation email sent!`, "success");
        }
      } else {
        showToast(data.error || "Failed to update registration status", "error");
      }
    } catch (err: any) {
      showToast("Network error while updating status", "error");
    } finally {
      setActionLoadingId(null);
    }
  };

  // Delete Actions
  const handleDeleteContact = async (id: string) => {
    if (!confirm("Are you sure you want to delete this enquiry?")) return;
    try {
      const res = await fetch(`/api/contacts?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        setContacts((prev) => prev.filter((c) => c._id !== id));
        showToast("Contact enquiry deleted successfully", "success");
      } else {
        showToast("Failed to delete contact record", "error");
      }
    } catch {
      showToast("Network error while deleting contact", "error");
    }
  };

  const handleDeleteRegistration = async (id: string) => {
    if (!confirm("Are you sure you want to delete this alumni registration?")) return;
    try {
      const res = await fetch(`/api/registrations?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        setRegistrations((prev) => prev.filter((r) => r._id !== id));
        setAlumni((prev) => prev.filter((r) => r._id !== id));
        showToast("Alumni registration deleted successfully", "success");
      } else {
        showToast("Failed to delete alumni registration", "error");
      }
    } catch {
      showToast("Network error while deleting alumni", "error");
    }
  };

  // Edit/Update Alumni Action
  const openEditModal = (alumni: Registration) => {
    setEditingAlumni(alumni);
    setEditForm({
      name: alumni.name,
      email: alumni.email,
      phone: alumni.phone,
      branch: alumni.branch || "",
      year: alumni.year ? String(alumni.year) : "",
      startup: alumni.startup,
      role: alumni.role,
      linkedin: alumni.linkedin
    });
  };

  const handleSaveAlumni = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingAlumni) return;
    setEditLoading(true);

    const payload = {
      id: editingAlumni._id,
      name: editForm.name,
      email: editForm.email,
      phone: editForm.phone,
      branch: editForm.branch || null,
      year: editForm.year ? parseInt(editForm.year) : null,
      startup: editForm.startup,
      role: editForm.role,
      linkedin: editForm.linkedin
    };

    try {
      const res = await fetch("/api/registrations", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (res.ok && data.success) {
        if (data.migrated) {
          setRegistrations((prev) => prev.filter((r) => r._id !== editingAlumni._id));
          setAlumni((prev) => [data.registration, ...prev]);
        } else {
          setRegistrations((prev) =>
            prev.map((r) => (r._id === editingAlumni._id ? data.registration : r))
          );
          setAlumni((prev) =>
            prev.map((r) => (r._id === editingAlumni._id ? data.registration : r))
          );
        }
        setEditingAlumni(null);
        showToast("Alumni details updated successfully", "success");
      } else {
        showToast(data.error || "Failed to update alumni details", "error");
      }
    } catch {
      showToast("Network error while updating alumni details", "error");
    } finally {
      setEditLoading(false);
    }
  };

  // Filtering based on current active collection (registrations/pending or alumni/processed)
  const filteredAlumni = (alumniStatusTab === "PENDING" ? registrations : alumni).filter((r) => {
    const s = alumniSearch.toLowerCase();
    
    // Status tab filter (defaults to PENDING if undefined in registrations)
    const currentStatus = r.status || "PENDING";
    if (currentStatus !== alumniStatusTab) return false;
    
    return (
      r.name.toLowerCase().includes(s) ||
      r.email.toLowerCase().includes(s) ||
      r.startup.toLowerCase().includes(s) ||
      r.role.toLowerCase().includes(s) ||
      (r.branch && r.branch.toLowerCase().includes(s))
    );
  });

  const filteredContacts = contacts.filter((c) => {
    const s = contactSearch.toLowerCase();
    return (
      c.name.toLowerCase().includes(s) ||
      c.email.toLowerCase().includes(s) ||
      c.message.toLowerCase().includes(s) ||
      (c.subject && c.subject.toLowerCase().includes(s))
    );
  });

  // Count helper by status
  const getRegCount = (status: "PENDING" | "APPROVED" | "REJECTED") => {
    if (status === "PENDING") {
      return registrations.length;
    } else {
      return alumni.filter((r) => r.status === status).length;
    }
  };

  const totalAlumniCount = registrations.length + alumni.length;

  // Loading Screen
  if (isAuthenticated === null) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center min-h-screen bg-[#090d16] text-[#f1f5f9]">
        <div className="flex flex-col items-center space-y-4">
          <Loader2 className="h-10 w-10 animate-spin text-indigo-500" />
          <p className="text-sm text-slate-400 font-medium tracking-wide">
            Initializing Session...
          </p>
        </div>
      </div>
    );
  }

  // 1. Auth Page Login Layout
  if (!isAuthenticated) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center min-h-screen p-4 bg-[#090d16] relative overflow-hidden select-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full filter blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full filter blur-[100px] pointer-events-none" />

        <div className="w-full max-w-md glass-card rounded-2xl p-8 relative z-10">
          <div className="flex flex-col items-center mb-8">
            <div className="h-12 w-12 rounded-xl bg-indigo-600/20 flex items-center justify-center border border-indigo-500/30 mb-4 shadow-lg shadow-indigo-600/10">
              <Database className="h-6 w-6 text-indigo-400 animate-pulse" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-white">
              E-Cell Admin Portal
            </h1>
            <p className="text-sm text-slate-400 mt-1">
              Sign in with administrative privileges
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Admin Email
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-500">
                  <Mail className="h-4 w-4" />
                </span>
                <input
                  type="email"
                  required
                  placeholder="admin_ecell@iitp.ac.in"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full bg-[#0d1527] border border-slate-800 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Password
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-500">
                  <Lock className="h-4 w-4" />
                </span>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className="w-full bg-[#0d1527] border border-slate-800 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
                />
              </div>
            </div>

            {loginError && (
              <div className="flex items-center space-x-2 bg-red-950/40 border border-red-500/20 rounded-xl p-3 text-red-400 text-xs">
                <AlertTriangle className="h-4 w-4 shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loginLoading}
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl py-3 text-sm font-semibold shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/35 active:scale-[0.98] transition flex items-center justify-center space-x-2 cursor-pointer"
            >
              {loginLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <span>Access Console</span>
              )}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-800/40 text-center">
            <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">
              Demo Credentials
            </span>
            <div className="flex justify-center space-x-4 mt-2 text-xs text-slate-400 font-mono bg-slate-950/40 py-2 px-3 rounded-lg border border-slate-900">
              <div>
                <span className="text-slate-600">User:</span> admin_ecell@iitp.ac.in
              </div>
              <div>
                <span className="text-slate-600">Pass:</span> admin123
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 2. Admin Dashboard Layout
  return (
    <div className="flex-1 flex flex-col min-h-screen bg-[#090d16] text-[#f1f5f9] select-text">
      {/* Header bar */}
      <header className="border-b border-slate-800 bg-[#0d1424]/75 backdrop-blur-md sticky top-0 z-40 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 rounded-lg bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center">
            <Database className="h-4 w-4 text-indigo-400" />
          </div>
          <div>
            <h1 className="text-md font-bold tracking-wide text-white">E-Cell Admin Portal</h1>
            <p className="text-[10px] text-slate-400 font-medium tracking-wide uppercase">Consolidated Console</p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center space-x-2 bg-slate-950/45 hover:bg-slate-950 border border-slate-800/80 hover:border-red-500/30 text-slate-400 hover:text-red-400 px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer active:scale-[0.98] transition"
        >
          <LogOut className="h-3.5 w-3.5" />
          <span>Logout</span>
        </button>
      </header>

      {/* Main body content */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 md:p-8 space-y-8">
        {/* Statistics Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 glass-card rounded-2xl p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-600/5 rounded-full translate-x-4 -translate-y-4" />
            <div className="flex items-center space-x-4 mb-4">
              <div className="h-10 w-10 rounded-lg bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                <Users className="h-5 w-5 text-indigo-400" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Alumni Registrations</p>
                <h2 className="text-xl font-black text-white">{totalAlumniCount} Total</h2>
              </div>
            </div>
            
            {/* Status Breakdown Row */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-850">
              <div className="bg-[#0f172a]/40 border border-amber-500/15 rounded-xl p-3 text-center">
                <span className="text-[10px] uppercase font-bold tracking-widest text-amber-500">Pending</span>
                <p className="text-lg font-black text-white mt-1">{getRegCount("PENDING")}</p>
              </div>
              <div className="bg-[#0f172a]/40 border border-green-500/15 rounded-xl p-3 text-center">
                <span className="text-[10px] uppercase font-bold tracking-widest text-green-500">Approved</span>
                <p className="text-lg font-black text-white mt-1">{getRegCount("APPROVED")}</p>
              </div>
              <div className="bg-[#0f172a]/40 border border-red-500/15 rounded-xl p-3 text-center">
                <span className="text-[10px] uppercase font-bold tracking-widest text-red-550">Rejected</span>
                <p className="text-lg font-black text-white mt-1">{getRegCount("REJECTED")}</p>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-600/5 rounded-full translate-x-4 -translate-y-4 group-hover:scale-125 transition" />
            <div className="flex items-center space-x-4 mb-4">
              <div className="h-10 w-10 rounded-lg bg-cyan-600/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5 text-cyan-400" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Contact Enquiries</p>
                <h2 className="text-2xl font-black text-white mt-1">
                  {dataLoading ? <Loader2 className="h-7 w-7 animate-spin text-slate-650 inline" /> : contacts.length}
                </h2>
              </div>
            </div>
            <p className="text-[10px] text-slate-550 font-semibold tracking-wide uppercase mt-4">Average response: 24h</p>
          </div>
        </section>

        {/* Tab Controls and Actions Panel */}
        <div className="glass-card rounded-2xl overflow-hidden border border-slate-800">
          {/* Main Tab buttons */}
          <div className="flex border-b border-slate-800 bg-slate-950/40">
            <button
              onClick={() => setActiveTab("registrations")}
              className={`flex items-center space-x-2 px-6 py-4 text-sm font-semibold tracking-wide border-b-2 transition cursor-pointer ${
                activeTab === "registrations"
                  ? "border-indigo-500 text-indigo-400 bg-[#0d1424]/40"
                  : "border-transparent text-slate-400 hover:text-slate-200"
              }`}
            >
              <Users className="h-4 w-4" />
              <span>Alumni Registrations ({totalAlumniCount})</span>
            </button>
            <button
              onClick={() => setActiveTab("contacts")}
              className={`flex items-center space-x-2 px-6 py-4 text-sm font-semibold tracking-wide border-b-2 transition cursor-pointer ${
                activeTab === "contacts"
                  ? "border-indigo-500 text-indigo-400 bg-[#0d1424]/40"
                  : "border-transparent text-slate-400 hover:text-slate-200"
              }`}
            >
              <Mail className="h-4 w-4" />
              <span>Contact Enquiries ({contacts.length})</span>
            </button>
          </div>

          {/* Search bar inside tab display */}
          <div className="p-4 border-b border-slate-800 bg-[#0c1220]/50 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-505">
                <Search className="h-4 w-4" />
              </span>
              {activeTab === "registrations" ? (
                <input
                  type="text"
                  placeholder="Search alumni by name, role, startup..."
                  value={alumniSearch}
                  onChange={(e) => setAlumniSearch(e.target.value)}
                  className="w-full bg-[#080d16] border border-slate-800/80 rounded-xl py-2 pl-10 pr-4 text-xs text-white focus:outline-none focus:border-indigo-500 transition"
                />
              ) : (
                <input
                  type="text"
                  placeholder="Search enquiries by name, email, message..."
                  value={contactSearch}
                  onChange={(e) => setContactSearch(e.target.value)}
                  className="w-full bg-[#080d16] border border-slate-800/80 rounded-xl py-2 pl-10 pr-4 text-xs text-white focus:outline-none focus:border-indigo-500 transition"
                />
              )}
            </div>

            <button
              onClick={fetchData}
              disabled={dataLoading}
              className="bg-[#080d16] hover:bg-[#0c1322] border border-slate-800 rounded-xl py-2 px-4 text-xs font-semibold cursor-pointer active:scale-95 transition flex items-center justify-center space-x-2"
            >
              {dataLoading ? (
                <Loader2 className="h-3 w-3 animate-spin text-slate-400" />
              ) : (
                <span>Sync Data</span>
              )}
            </button>
          </div>

          {/* Table / List Area */}
          <div className="p-6 bg-[#0c1220]/20 min-h-[300px]">
            {dataLoading && (
              <div className="flex flex-col items-center justify-center py-20 space-y-3">
                <Loader2 className="h-8 w-8 animate-spin text-indigo-500" />
                <p className="text-xs text-slate-500 font-medium">Fetching records...</p>
              </div>
            )}

            {!dataLoading && activeTab === "registrations" && (
              <div>
                {/* Status Sub-Tabs */}
                <div className="flex space-x-2 mb-6 p-1 bg-slate-950/40 border border-slate-800/70 rounded-xl max-w-md">
                  {(["PENDING", "APPROVED", "REJECTED"] as const).map((status) => {
                    const count = getRegCount(status);
                    const activeClass =
                      alumniStatusTab === status
                        ? status === "PENDING"
                          ? "bg-amber-500/10 text-amber-400 border border-amber-500/25"
                          : status === "APPROVED"
                          ? "bg-green-500/10 text-green-400 border border-green-500/25"
                          : "bg-red-500/10 text-red-400 border border-red-500/25"
                        : "text-slate-455 hover:text-slate-355 border border-transparent";
                    return (
                      <button
                        key={status}
                        onClick={() => setAlumniStatusTab(status)}
                        className={`flex-1 py-2 text-[10px] uppercase font-bold tracking-wider rounded-lg transition cursor-pointer text-center ${activeClass}`}
                      >
                        {status} ({count})
                      </button>
                    );
                  })}
                </div>

                {filteredAlumni.length === 0 ? (
                  <div className="text-center py-16 text-slate-500 text-xs">
                    No {alumniStatusTab.toLowerCase()} alumni records found.
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-4">
                    {filteredAlumni.map((reg) => (
                      <div
                        key={reg._id}
                        className="bg-[#0a0f1d] border border-slate-800/60 rounded-xl p-5 hover:border-slate-700/80 transition shadow-md relative group flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6"
                      >
                        {/* Alumni main details */}
                        <div className="space-y-3 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-sm font-bold text-white tracking-wide">{reg.name}</h3>
                            {reg.year && (
                              <span className="bg-indigo-950/60 border border-indigo-800/40 text-indigo-400 text-[10px] px-2 py-0.5 rounded-full font-bold">
                                Class of {reg.year}
                              </span>
                            )}
                            
                            {/* Registration Status Badges */}
                            {(reg.status || "PENDING") === "PENDING" && (
                              <span className="bg-amber-950/40 border border-amber-800/40 text-amber-400 text-[9px] px-2 py-0.5 rounded-full uppercase font-bold tracking-wide">
                                Pending Approval
                              </span>
                            )}
                            {reg.status === "APPROVED" && (
                              <span className="bg-green-950/40 border border-green-800/40 text-green-400 text-[9px] px-2 py-0.5 rounded-full uppercase font-bold tracking-wide">
                                Approved
                              </span>
                            )}
                            {reg.status === "REJECTED" && (
                              <span className="bg-red-950/40 border border-red-800/40 text-red-400 text-[9px] px-2 py-0.5 rounded-full uppercase font-bold tracking-wide">
                                Rejected
                              </span>
                            )}

                            {/* Email Delivery Status Badges */}
                            {(reg.status || "PENDING") !== "PENDING" && reg.emailStatus === "SENT" && (
                              <span className="bg-green-950/20 border border-green-900/30 text-green-500 text-[9px] px-2 py-0.5 rounded-full uppercase font-bold tracking-wide flex items-center space-x-1">
                                <Check className="h-2.5 w-2.5" />
                                <span>Email Sent</span>
                              </span>
                            )}
                            {(reg.status || "PENDING") !== "PENDING" && reg.emailStatus === "FAILED" && (
                              <span className="bg-red-950/20 border border-red-900/30 text-red-400 text-[9px] px-2 py-0.5 rounded-full uppercase font-bold tracking-wide flex items-center space-x-1">
                                <AlertTriangle className="h-2.5 w-2.5" />
                                <span>Email Sending Failed</span>
                              </span>
                            )}
                            {(reg.status || "PENDING") !== "PENDING" && (!reg.emailStatus || reg.emailStatus === "NOT_SENT") && (
                              <span className="bg-slate-950/20 border border-slate-900/30 text-slate-455 text-[9px] px-2 py-0.5 rounded-full uppercase font-bold tracking-wide flex items-center space-x-1">
                                <Slash className="h-2.5 w-2.5 text-slate-650" />
                                <span>Email Not Sent</span>
                              </span>
                            )}
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-2 gap-x-4 text-xs text-slate-400">
                            <div className="flex items-center space-x-2">
                              <Briefcase className="h-3.5 w-3.5 text-indigo-500 shrink-0" />
                              <span className="truncate">
                                {reg.role} at <strong className="text-slate-300 font-semibold">{reg.startup}</strong>
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <GraduationCap className="h-3.5 w-3.5 text-indigo-500 shrink-0" />
                              <span className="truncate">{reg.branch || "Branch unspecified"}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Phone className="h-3.5 w-3.5 text-indigo-500 shrink-0" />
                              <span>{reg.phone}</span>
                            </div>
                            <div className="flex items-center space-x-2 sm:col-span-2">
                              <Mail className="h-3.5 w-3.5 text-indigo-500 shrink-0" />
                              <span className="truncate">{reg.email}</span>
                            </div>
                          </div>
                        </div>

                        {/* Actions, Approval controls & Links */}
                        <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto justify-end border-t lg:border-t-0 pt-4 lg:pt-0 border-slate-800/60">
                          {/* Approve/Reject options for PENDING state */}
                          {(reg.status || "PENDING") === "PENDING" && (
                            <div className="flex items-center space-x-2 border-r border-slate-800 pr-3 mr-1">
                              <button
                                onClick={() => handleUpdateStatus(reg._id, "APPROVED")}
                                disabled={actionLoadingId !== null}
                                className="bg-green-950/30 hover:bg-green-900 border border-green-800/40 hover:border-green-700/60 text-green-400 hover:text-white px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer active:scale-95 transition flex items-center space-x-1.5 disabled:opacity-50"
                              >
                                {actionLoadingId === reg._id ? (
                                  <Loader2 className="h-3 w-3 animate-spin text-green-400" />
                                ) : (
                                  <Check className="h-3.5 w-3.5 text-green-400" />
                                )}
                                <span>Approve</span>
                              </button>

                              <button
                                onClick={() => handleUpdateStatus(reg._id, "REJECTED")}
                                disabled={actionLoadingId !== null}
                                className="bg-red-950/30 hover:bg-red-900 border border-red-800/40 hover:border-red-700/60 text-red-400 hover:text-white px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer active:scale-95 transition flex items-center space-x-1.5 disabled:opacity-50"
                              >
                                {actionLoadingId === reg._id ? (
                                  <Loader2 className="h-3 w-3 animate-spin text-red-400" />
                                ) : (
                                  <X className="h-3.5 w-3.5 text-red-455" />
                                )}
                                <span>Reject</span>
                              </button>
                            </div>
                          )}

                          {/* Retry sending status email if it previously failed */}
                          {(reg.status || "PENDING") !== "PENDING" && reg.emailStatus === "FAILED" && (
                            <button
                              onClick={() => handleUpdateStatus(reg._id, reg.status as "APPROVED" | "REJECTED")}
                              disabled={actionLoadingId !== null}
                              className="bg-amber-950/30 hover:bg-amber-900 border border-amber-850/40 text-amber-400 hover:text-white px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer active:scale-95 transition flex items-center space-x-1.5 disabled:opacity-50"
                              title="Retry sending status email via Brevo"
                            >
                              {actionLoadingId === reg._id ? (
                                <Loader2 className="h-3 w-3 animate-spin text-amber-400" />
                              ) : (
                                <Mail className="h-3.5 w-3.5 text-amber-400" />
                              )}
                              <span>Retry Email</span>
                            </button>
                          )}

                          <a
                            href={reg.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-950/40 hover:bg-blue-950 border border-blue-900/40 text-blue-400 hover:text-blue-300 px-3 py-1.5 rounded-lg text-xs font-semibold inline-flex items-center space-x-1.5 active:scale-95 transition"
                          >
                            <span>LinkedIn</span>
                            <ExternalLink className="h-3 w-3" />
                          </a>

                          <button
                            onClick={() => openEditModal(reg)}
                            className="bg-amber-950/40 hover:bg-amber-950 border border-amber-900/40 text-amber-400 hover:text-amber-300 p-2 rounded-lg text-xs font-semibold cursor-pointer active:scale-95 transition"
                            title="Edit Alumni Details"
                          >
                            <Edit3 className="h-3.5 w-3.5" />
                          </button>

                          <button
                            onClick={() => handleDeleteRegistration(reg._id)}
                            className="bg-red-950/40 hover:bg-red-950 border border-red-900/40 text-red-400 hover:text-red-300 p-2 rounded-lg text-xs font-semibold cursor-pointer active:scale-95 transition"
                            title="Delete Alumni"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {!dataLoading && activeTab === "contacts" && (
              <div>
                {filteredContacts.length === 0 ? (
                  <div className="text-center py-16 text-slate-500 text-xs">
                    No contact messages found.
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-4">
                    {filteredContacts.map((contact) => (
                      <div
                        key={contact._id}
                        className="bg-[#0a0f1d] border border-slate-800/60 rounded-xl p-5 hover:border-slate-700/80 transition shadow-md relative"
                      >
                        {/* Header details */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-slate-800/60 pb-3 mb-3 gap-2">
                          <div>
                            <h3 className="text-sm font-bold text-white tracking-wide">{contact.name}</h3>
                            <div className="flex items-center space-x-2 text-[11px] text-slate-400 mt-1">
                              <span className="truncate">{contact.email}</span>
                            </div>
                          </div>

                          <div className="flex items-center space-x-3 shrink-0">
                            <span className="text-[10px] text-slate-550 flex items-center space-x-1 font-semibold uppercase tracking-wide">
                              <Calendar className="h-3 w-3 text-slate-555 mr-1" />
                              <span>{new Date(contact.createdAt).toLocaleDateString()}</span>
                            </span>
                            <button
                              onClick={() => handleDeleteContact(contact._id)}
                              className="bg-red-950/45 hover:bg-red-950 border border-red-900/45 text-red-400 p-1.5 rounded-lg text-xs font-semibold cursor-pointer active:scale-95 transition"
                              title="Delete Record"
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </div>

                        {/* Subject and message */}
                        <div className="space-y-1">
                          <p className="text-xs font-bold text-indigo-400 tracking-wide">
                            Subject: {contact.subject || "No Subject"}
                          </p>
                          <p className="text-xs text-slate-300 leading-relaxed font-medium mt-1 bg-slate-950/30 p-3 rounded-lg border border-slate-900/60 whitespace-pre-wrap">
                            {contact.message}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Editing Modal Popup Overlay */}
      {editingAlumni && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-lg glass-card rounded-2xl overflow-hidden border border-slate-800">
            {/* Modal header */}
            <div className="flex items-center justify-between border-b border-slate-800 bg-[#0c1322] px-6 py-4">
              <h3 className="text-sm font-bold text-white">Edit Alumni Details</h3>
              <button
                onClick={() => setEditingAlumni(null)}
                className="text-slate-400 hover:text-white transition p-1 hover:bg-slate-850 rounded-lg cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Modal fields form */}
            <form onSubmit={handleSaveAlumni} className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-505 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={editForm.name}
                    onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                    className="w-full bg-[#080d16] border border-slate-800 rounded-xl py-2 px-3 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-505 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={editForm.email}
                    onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                    className="w-full bg-[#080d16] border border-slate-800 rounded-xl py-2 px-3 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-505 mb-1">
                    Phone
                  </label>
                  <input
                    type="text"
                    required
                    value={editForm.phone}
                    onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                    className="w-full bg-[#080d16] border border-slate-800 rounded-xl py-2 px-3 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-505 mb-1">
                    Graduation Year
                  </label>
                  <input
                    type="number"
                    value={editForm.year}
                    onChange={(e) => setEditForm({ ...editForm, year: e.target.value })}
                    placeholder="e.g. 2024"
                    className="w-full bg-[#080d16] border border-slate-800 rounded-xl py-2 px-3 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-550 mb-1">
                    Department / Branch
                  </label>
                  <input
                    type="text"
                    value={editForm.branch}
                    onChange={(e) => setEditForm({ ...editForm, branch: e.target.value })}
                    placeholder="e.g. CSE"
                    className="w-full bg-[#080d16] border border-slate-800 rounded-xl py-2 px-3 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-550 mb-1">
                    Startup Name
                  </label>
                  <input
                    type="text"
                    required
                    value={editForm.startup}
                    onChange={(e) => setEditForm({ ...editForm, startup: e.target.value })}
                    className="w-full bg-[#080d16] border border-slate-800 rounded-xl py-2 px-3 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-550 mb-1">
                  Current Role
                </label>
                <input
                  type="text"
                  required
                  value={editForm.role}
                  onChange={(e) => setEditForm({ ...editForm, role: e.target.value })}
                  placeholder="e.g. Founder & CEO"
                  className="w-full bg-[#080d16] border border-slate-800 rounded-xl py-2 px-3 text-xs text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-550 mb-1">
                  LinkedIn Profile URL
                </label>
                <input
                  type="url"
                  required
                  value={editForm.linkedin}
                  onChange={(e) => setEditForm({ ...editForm, linkedin: e.target.value })}
                  className="w-full bg-[#080d16] border border-slate-800 rounded-xl py-2 px-3 text-xs text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              {/* Form Actions */}
              <div className="flex justify-end space-x-3 pt-4 border-t border-slate-800/85">
                <button
                  type="button"
                  onClick={() => setEditingAlumni(null)}
                  className="bg-[#080d16] hover:bg-[#0c1322] border border-slate-800 rounded-xl py-2.5 px-4 text-xs font-semibold cursor-pointer active:scale-95 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={editLoading}
                  className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl py-2.5 px-5 text-xs font-semibold cursor-pointer active:scale-95 transition flex items-center space-x-2"
                >
                  {editLoading ? (
                    <Loader2 className="h-3 w-3 animate-spin text-white" />
                  ) : (
                    <span>Save Changes</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Floating Toast Notification Containers */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`glass-card rounded-xl py-3 px-4 shadow-xl flex items-center space-x-2 border text-xs max-w-sm transition-all transform translate-y-0 animate-fadeIn ${
              toast.type === "success"
                ? "border-green-500/20 text-green-400 bg-green-950/20"
                : "border-red-500/20 text-red-400 bg-red-950/20"
            }`}
          >
            {toast.type === "success" ? (
              <CheckCircle className="h-4 w-4 shrink-0 text-green-400" />
            ) : (
              <AlertTriangle className="h-4 w-4 shrink-0 text-red-400" />
            )}
            <span className="font-medium">{toast.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
