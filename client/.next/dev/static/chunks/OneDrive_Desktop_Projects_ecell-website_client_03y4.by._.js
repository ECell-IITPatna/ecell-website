(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EndeavoursPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects/ecell-website/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects/ecell-website/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature();
"use client";
;
// ─── Data ────────────────────────────────────────────────────────────────────
const FEATURED = {
    tag: "# INITIATIVE",
    icon: "💡",
    title: "Xplore",
    description: "Xplore is the freshers' introduction to E-Cell IIT Patna. Here the seed to innovate and create jobs is planted. This is the new student initiative to find, challenge, engage, and grow with the entrepreneurial ecosystem of the institute.",
    highlights: [
        "Freeprise Program",
        "Innovative Workshops",
        "Mentorship Mapping",
        "Skill Development"
    ],
    stats: [
        {
            value: "100+",
            label: "Annual Participants"
        },
        {
            value: "15",
            label: "Mentorships"
        },
        {
            value: "4",
            label: "Workshops"
        }
    ]
};
const CARDS = [
    {
        id: 1,
        icon: "🚀",
        iconBg: "#c0440a",
        badge: "FLAGSHIP ENDEAVOUR",
        badgeColor: "#c0440a",
        title: "Startup Expo",
        description: "The Startup Expo at E-Summit IIT Patna is a curated showcase where startups can exhibit their products, ideas, and traction before investors, mentors, and fellow entrepreneurs. The Expo fosters visibility, validation,",
        tags: [
            "#8yr Celebration",
            "#Founding"
        ]
    },
    {
        id: 2,
        icon: "⚡",
        iconBg: "#b8960a",
        badge: "FLAGSHIP ENDEAVOUR",
        badgeColor: "#c0440a",
        title: "E-Summit",
        description: "E-Summit 2025, the flagship entrepreneurial event of IIT Patna, is a vibrant platform that brings together innovators, investors, startups, and industry leaders to foster entrepreneurship and business growth.",
        tags: [
            "#Partnerships",
            "#Networking"
        ]
    },
    {
        id: 3,
        icon: "⭐",
        iconBg: "#3a2d6e",
        badge: "STARTUP CAMP",
        badgeColor: "#3a2d6e",
        title: "Startin'",
        description: "A campus startup expo where students pitch, validate, and market their ideas through live stalls and demos. Startin' gives first-time founders a safe arena to test their vision in front of peers and mentors.",
        tags: [
            "#Founders Built"
        ]
    },
    {
        id: 4,
        icon: "💡",
        iconBg: "#0a3d6e",
        badge: "INITIATIVE",
        badgeColor: "#0a3d6e",
        title: "Xplore",
        description: "Xplore is the freshers' introduction to E-Cell IIT Patna. Here the seed to innovate and create jobs is planted. This is the new student initiative to find, challenge, engage, and grow with the entrepreneurial ecosystem of",
        tags: [
            "#Freshers",
            "#Foundation"
        ],
        expanded: true
    }
];
// ─── Star / Particle Data ─────────────────────────────────────────────────────
function generateStars(count) {
    return Array.from({
        length: count
    }, (_, i)=>({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            z: Math.random(),
            size: Math.random() * 2 + 0.4,
            opacity: Math.random() * 0.5 + 0.15,
            twinkleDuration: 2 + Math.random() * 4,
            twinkleDelay: Math.random() * 5,
            orbitRadius: Math.random() * 0.06 + 0.01,
            orbitSpeed: (Math.random() * 0.3 + 0.05) * (Math.random() < 0.5 ? 1 : -1),
            orbitPhase: Math.random() * Math.PI * 2,
            isBright: Math.random() < 0.12
        }));
}
function generateShootingStars(count) {
    return Array.from({
        length: count
    }, (_, i)=>({
            id: i,
            delay: i * 3.7 + Math.random() * 6,
            duration: 1.2 + Math.random() * 1.2,
            startX: 10 + Math.random() * 60,
            startY: 5 + Math.random() * 40,
            angle: 25 + Math.random() * 20,
            length: 120 + Math.random() * 180
        }));
}
// ─── Hooks ───────────────────────────────────────────────────────────────────
function useMouse() {
    _s();
    const [mouse, setMouse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0.5,
        y: 0.5
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMouse.useEffect": ()=>{
            const handler = {
                "useMouse.useEffect.handler": (e)=>{
                    setMouse({
                        x: e.clientX / window.innerWidth,
                        y: e.clientY / window.innerHeight
                    });
                }
            }["useMouse.useEffect.handler"];
            window.addEventListener("mousemove", handler);
            return ({
                "useMouse.useEffect": ()=>window.removeEventListener("mousemove", handler)
            })["useMouse.useEffect"];
        }
    }["useMouse.useEffect"], []);
    return mouse;
}
_s(useMouse, "PJENtfxxG5TsEvIMbCxMUsVG5HA=");
function useInView(threshold = 0.15) {
    _s1();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [inView, setInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInView.useEffect": ()=>{
            const obs = new IntersectionObserver({
                "useInView.useEffect": ([entry])=>{
                    if (entry.isIntersecting) setInView(true);
                }
            }["useInView.useEffect"], {
                threshold
            });
            if (ref.current) obs.observe(ref.current);
            return ({
                "useInView.useEffect": ()=>obs.disconnect()
            })["useInView.useEffect"];
        }
    }["useInView.useEffect"], [
        threshold
    ]);
    return {
        ref,
        inView
    };
}
_s1(useInView, "K+dCFMkCcTyPMHOI0MxAWPXS6Js=");
function useAnimationFrame(callback, running = true) {
    _s2();
    const cbRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(callback);
    cbRef.current = callback;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAnimationFrame.useEffect": ()=>{
            if (!running) return;
            let id;
            const tick = {
                "useAnimationFrame.useEffect.tick": (t)=>{
                    cbRef.current(t);
                    id = requestAnimationFrame(tick);
                }
            }["useAnimationFrame.useEffect.tick"];
            id = requestAnimationFrame(tick);
            return ({
                "useAnimationFrame.useEffect": ()=>cancelAnimationFrame(id)
            })["useAnimationFrame.useEffect"];
        }
    }["useAnimationFrame.useEffect"], [
        running
    ]);
}
_s2(useAnimationFrame, "6oPE2GPdQIH2xpMAXW3Zhx/FVP8=");
// ─── Nebula Vortex Canvas ─────────────────────────────────────────────────────
function NebulaCanvas({ mouse }) {
    _s3();
    const stars = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "NebulaCanvas.useMemo[stars]": ()=>generateStars(160)
    }["NebulaCanvas.useMemo[stars]"], []);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const timeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const mouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(mouse);
    mouseRef.current = mouse;
    useAnimationFrame({
        "NebulaCanvas.useAnimationFrame": (t)=>{
            timeRef.current = t * 0.0005;
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            const W = canvas.width;
            const H = canvas.height;
            ctx.clearRect(0, 0, W, H);
            const time = timeRef.current;
            const mx = mouseRef.current.x;
            const my = mouseRef.current.y;
            // Draw orbiting star particles in 3D layers
            stars.forEach({
                "NebulaCanvas.useAnimationFrame": (star)=>{
                    const orbitX = Math.cos(time * star.orbitSpeed + star.orbitPhase) * star.orbitRadius * W;
                    const orbitY = Math.sin(time * star.orbitSpeed * 0.7 + star.orbitPhase) * star.orbitRadius * H;
                    // 3D tilt based on mouse
                    const tiltX = (mx - 0.5) * star.z * 80;
                    const tiltY = (my - 0.5) * star.z * 80;
                    const px = star.x / 100 * W + orbitX - tiltX;
                    const py = star.y / 100 * H + orbitY - tiltY;
                    // Depth-based size & brightness
                    const depthScale = 0.4 + star.z * 0.6;
                    const twinkle = 0.5 + 0.5 * Math.sin(time * star.twinkleDuration * 3 + star.twinkleDelay);
                    const finalOpacity = star.opacity * (0.6 + 0.4 * twinkle) * depthScale;
                    const finalSize = star.size * depthScale;
                    if (star.isBright) {
                        // Cross-shaped lens flare for bright stars
                        const flareSize = finalSize * 3;
                        const grad = ctx.createRadialGradient(px, py, 0, px, py, flareSize);
                        grad.addColorStop(0, `rgba(200,230,255,${finalOpacity})`);
                        grad.addColorStop(0.3, `rgba(150,200,255,${finalOpacity * 0.4})`);
                        grad.addColorStop(1, `rgba(100,160,255,0)`);
                        ctx.fillStyle = grad;
                        ctx.beginPath();
                        ctx.arc(px, py, flareSize, 0, Math.PI * 2);
                        ctx.fill();
                        // Cross lines
                        ctx.strokeStyle = `rgba(200,230,255,${finalOpacity * 0.25})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(px - flareSize * 1.5, py);
                        ctx.lineTo(px + flareSize * 1.5, py);
                        ctx.stroke();
                        ctx.beginPath();
                        ctx.moveTo(px, py - flareSize * 1.5);
                        ctx.lineTo(px, py + flareSize * 1.5);
                        ctx.stroke();
                    } else {
                        ctx.beginPath();
                        ctx.arc(px, py, Math.max(0.2, finalSize), 0, Math.PI * 2);
                        ctx.fillStyle = `rgba(210,230,255,${finalOpacity})`;
                        ctx.fill();
                    }
                }
            }["NebulaCanvas.useAnimationFrame"]);
            // Nebula wisps — soft radial blobs that drift
            const nebulaCenters = [
                {
                    x: 0.2,
                    y: 0.3,
                    r: 0.18,
                    color: "40,80,160",
                    speed: 0.12
                },
                {
                    x: 0.75,
                    y: 0.2,
                    r: 0.14,
                    color: "80,30,120",
                    speed: 0.09
                },
                {
                    x: 0.5,
                    y: 0.7,
                    r: 0.16,
                    color: "20,60,130",
                    speed: 0.07
                },
                {
                    x: 0.85,
                    y: 0.6,
                    r: 0.12,
                    color: "60,20,100",
                    speed: 0.11
                }
            ];
            nebulaCenters.forEach({
                "NebulaCanvas.useAnimationFrame": (n)=>{
                    const nx = (n.x + Math.sin(time * n.speed) * 0.04 + (mx - 0.5) * -0.03) * W;
                    const ny = (n.y + Math.cos(time * n.speed * 0.8) * 0.04 + (my - 0.5) * -0.03) * H;
                    const radius = n.r * Math.min(W, H);
                    const grad = ctx.createRadialGradient(nx, ny, 0, nx, ny, radius);
                    grad.addColorStop(0, `rgba(${n.color},0.06)`);
                    grad.addColorStop(0.5, `rgba(${n.color},0.03)`);
                    grad.addColorStop(1, `rgba(${n.color},0)`);
                    ctx.fillStyle = grad;
                    ctx.beginPath();
                    ctx.arc(nx, ny, radius, 0, Math.PI * 2);
                    ctx.fill();
                }
            }["NebulaCanvas.useAnimationFrame"]);
        }
    }["NebulaCanvas.useAnimationFrame"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NebulaCanvas.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const resize = {
                "NebulaCanvas.useEffect.resize": ()=>{
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                }
            }["NebulaCanvas.useEffect.resize"];
            resize();
            window.addEventListener("resize", resize);
            return ({
                "NebulaCanvas.useEffect": ()=>window.removeEventListener("resize", resize)
            })["NebulaCanvas.useEffect"];
        }
    }["NebulaCanvas.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        style: {
            position: "fixed",
            inset: 0,
            zIndex: 0,
            pointerEvents: "none"
        }
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
        lineNumber: 255,
        columnNumber: 5
    }, this);
}
_s3(NebulaCanvas, "MoCsWQDpRbnspbBVPCgqj8p/XBA=", false, function() {
    return [
        useAnimationFrame
    ];
});
_c = NebulaCanvas;
// ─── Shooting Stars ───────────────────────────────────────────────────────────
function ShootingStars() {
    _s4();
    const [stars, setStars] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShootingStars.useEffect": ()=>{
            setStars(generateShootingStars(6));
        }
    }["ShootingStars.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "fixed",
            inset: 0,
            zIndex: 1,
            pointerEvents: "none",
            overflow: "hidden"
        },
        children: stars.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    left: `${s.startX}%`,
                    top: `${s.startY}%`,
                    width: s.length,
                    height: 1.5,
                    background: "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(200,230,255,0.9) 50%, rgba(255,255,255,0) 100%)",
                    transform: `rotate(${s.angle}deg)`,
                    transformOrigin: "left center",
                    animation: `shoot ${s.duration}s ease-out ${s.delay}s infinite`,
                    borderRadius: 2,
                    opacity: 0,
                    boxShadow: "0 0 6px rgba(200,230,255,0.6)"
                }
            }, s.id, false, {
                fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                lineNumber: 273,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
        lineNumber: 271,
        columnNumber: 5
    }, this);
}
_s4(ShootingStars, "MpMl4xT356TDKICdFBbojt4n5zM=");
_c1 = ShootingStars;
// ─── Aurora Curtain ───────────────────────────────────────────────────────────
function AuroraCurtain() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "45%",
            pointerEvents: "none",
            zIndex: 1,
            opacity: 0.35
        },
        children: [
            0,
            1,
            2
        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    inset: 0,
                    background: i === 0 ? "radial-gradient(ellipse 80% 60% at 30% -10%, rgba(30,80,180,0.5) 0%, transparent 70%)" : i === 1 ? "radial-gradient(ellipse 60% 50% at 70% -5%, rgba(80,30,160,0.4) 0%, transparent 65%)" : "radial-gradient(ellipse 50% 40% at 50% 0%, rgba(20,100,200,0.3) 0%, transparent 60%)",
                    animation: `aurora${i} ${8 + i * 3}s ease-in-out infinite alternate`
                }
            }, i, false, {
                fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                lineNumber: 312,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
        lineNumber: 299,
        columnNumber: 5
    }, this);
}
_c2 = AuroraCurtain;
// ─── Word-by-word 3D Title ────────────────────────────────────────────────────
function AnimatedTitle({ text, visible, delay = 0 }) {
    const words = text.split(" ");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
        style: {
            fontSize: "clamp(44px, 8vw, 72px)",
            fontWeight: 900,
            letterSpacing: -2,
            lineHeight: 1.05,
            margin: "0 0 18px",
            color: "#f0f8ff",
            perspective: 800,
            perspectiveOrigin: "50% 50%"
        },
        children: words.map((word, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    display: "inline-block",
                    marginRight: "0.25em",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateZ(0) translateY(0)" : "translateZ(-300px) translateY(30px)",
                    transition: `opacity 0.7s ease ${delay + i * 0.12}s, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${delay + i * 0.12}s`
                },
                children: word
            }, i, false, {
                fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                lineNumber: 348,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
        lineNumber: 335,
        columnNumber: 5
    }, this);
}
_c3 = AnimatedTitle;
// ─── Featured Card ────────────────────────────────────────────────────────────
function FeaturedCard() {
    _s5();
    const { ref, inView } = useInView(0.1);
    const [closed, setClosed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mousePos, setMousePos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0.5,
        y: 0.5
    });
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleMouseMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FeaturedCard.useCallback[handleMouseMove]": (e)=>{
            const rect = cardRef.current?.getBoundingClientRect();
            if (!rect) return;
            setMousePos({
                x: (e.clientX - rect.left) / rect.width,
                y: (e.clientY - rect.top) / rect.height
            });
        }
    }["FeaturedCard.useCallback[handleMouseMove]"], []);
    if (closed) return null;
    const rotX = hovered ? (mousePos.y - 0.5) * -8 : 0;
    const rotY = hovered ? (mousePos.x - 0.5) * 8 : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        style: {
            perspective: 1000,
            perspectiveOrigin: "50% 50%"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: cardRef,
            onMouseEnter: ()=>setHovered(true),
            onMouseLeave: ()=>{
                setHovered(false);
                setMousePos({
                    x: 0.5,
                    y: 0.5
                });
            },
            onMouseMove: handleMouseMove,
            style: {
                background: "linear-gradient(135deg, #0f2027 0%, #1a2a3a 40%, #0d1f2e 100%)",
                border: `1px solid rgba(100,160,200,${hovered ? 0.35 : 0.18})`,
                borderRadius: 16,
                padding: "32px 36px",
                position: "relative",
                backdropFilter: "blur(12px)",
                boxShadow: hovered ? "0 24px 60px rgba(0,0,0,0.7), 0 0 40px rgba(40,100,200,0.15), inset 0 1px 0 rgba(255,255,255,0.08)" : "0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
                opacity: inView ? 1 : 0,
                transform: inView ? `translateY(0) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(${hovered ? 12 : 0}px)` : "translateY(40px)",
                transition: hovered ? "box-shadow 0.3s ease, border-color 0.3s ease, transform 0.08s ease" : "opacity 0.7s ease, transform 0.5s cubic-bezier(0.22,1,0.36,1), box-shadow 0.5s ease, border-color 0.3s ease",
                transformStyle: "preserve-3d",
                willChange: "transform"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "absolute",
                        inset: 0,
                        borderRadius: 16,
                        background: hovered ? `radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(100,180,255,0.07) 0%, transparent 60%)` : "none",
                        pointerEvents: "none",
                        transition: "opacity 0.3s"
                    }
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                    lineNumber: 420,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "absolute",
                        inset: -1,
                        borderRadius: 17,
                        background: hovered ? `conic-gradient(from ${mousePos.x * 360}deg at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(60,140,255,0.3), rgba(120,60,220,0.2), rgba(40,120,200,0.3), transparent 60%)` : "none",
                        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "xor",
                        maskComposite: "exclude",
                        padding: 1,
                        pointerEvents: "none",
                        opacity: hovered ? 1 : 0,
                        transition: "opacity 0.3s"
                    }
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                    lineNumber: 434,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setClosed(true),
                    style: {
                        position: "absolute",
                        top: 16,
                        right: 16,
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        border: "1px solid rgba(255,255,255,0.2)",
                        background: "rgba(255,255,255,0.07)",
                        color: "#aaa",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 14,
                        lineHeight: 1,
                        zIndex: 2
                    },
                    children: "×"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                    lineNumber: 453,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        fontSize: 10,
                        letterSpacing: 2,
                        color: "#7ab3d4",
                        fontWeight: 600,
                        marginBottom: 16
                    },
                    children: FEATURED.tag
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                    lineNumber: 469,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        gap: 40,
                        flexWrap: "wrap"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                flex: "1 1 320px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: 48,
                                        height: 48,
                                        borderRadius: 12,
                                        background: "rgba(60,130,200,0.25)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: 22,
                                        marginBottom: 16,
                                        border: "1px solid rgba(100,180,255,0.15)",
                                        transform: `translateZ(${hovered ? 20 : 0}px)`,
                                        transition: "transform 0.08s ease"
                                    },
                                    children: FEATURED.icon
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                                    lineNumber: 476,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontSize: 28,
                                        fontWeight: 700,
                                        color: "#e8f4ff",
                                        margin: "0 0 12px"
                                    },
                                    children: FEATURED.title
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                                    lineNumber: 487,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: 14,
                                        color: "#8aabb8",
                                        lineHeight: 1.7,
                                        margin: 0
                                    },
                                    children: FEATURED.description
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                                    lineNumber: 490,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        gap: 0,
                                        marginTop: 32
                                    },
                                    children: FEATURED.stats.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                flex: 1,
                                                borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.1)" : "none",
                                                paddingLeft: i > 0 ? 24 : 0
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 26,
                                                        fontWeight: 800,
                                                        color: "#e0efff",
                                                        letterSpacing: -1
                                                    },
                                                    children: s.value
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                                                    lineNumber: 500,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 10,
                                                        letterSpacing: 1.5,
                                                        color: "#5a8aa0",
                                                        fontWeight: 600,
                                                        marginTop: 4
                                                    },
                                                    children: s.label.toUpperCase()
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                                                    lineNumber: 503,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                                            lineNumber: 495,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                                    lineNumber: 493,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                            lineNumber: 475,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                flex: "0 0 auto",
                                minWidth: 180
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 13,
                                        fontWeight: 600,
                                        color: "#c0d8e8",
                                        marginBottom: 14
                                    },
                                    children: "Key Highlights"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                                    lineNumber: 513,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    style: {
                                        listStyle: "none",
                                        margin: 0,
                                        padding: 0,
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 10
                                    },
                                    children: FEATURED.highlights.map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 8,
                                                color: "#8aabb8",
                                                fontSize: 13
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        width: 6,
                                                        height: 6,
                                                        borderRadius: "50%",
                                                        background: "#4a9ebe",
                                                        flexShrink: 0
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                                                    lineNumber: 519,
                                                    columnNumber: 19
                                                }, this),
                                                h
                                            ]
                                        }, h, true, {
                                            fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                                            lineNumber: 518,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                                    lineNumber: 516,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                            lineNumber: 512,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                    lineNumber: 473,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
            lineNumber: 393,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
        lineNumber: 389,
        columnNumber: 5
    }, this);
}
_s5(FeaturedCard, "pA4nlAivzwQeVSy6Y/K6lK8ouEM=", false, function() {
    return [
        useInView
    ];
});
_c4 = FeaturedCard;
// ─── Quick Glance Card ────────────────────────────────────────────────────────
function QuickGlanceCard({ card, index }) {
    _s6();
    const { ref, inView } = useInView(0.08);
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mousePos, setMousePos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0.5,
        y: 0.5
    });
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleMouseMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuickGlanceCard.useCallback[handleMouseMove]": (e)=>{
            const rect = cardRef.current?.getBoundingClientRect();
            if (!rect) return;
            setMousePos({
                x: (e.clientX - rect.left) / rect.width,
                y: (e.clientY - rect.top) / rect.height
            });
        }
    }["QuickGlanceCard.useCallback[handleMouseMove]"], []);
    const rotX = hovered ? (mousePos.y - 0.5) * -12 : 0;
    const rotY = hovered ? (mousePos.x - 0.5) * 12 : 0;
    const badgeTextColor = card.badgeColor === "#c0440a" ? "#e86a2a" : card.badgeColor === "#3a2d6e" ? "#9b8fe8" : "#5ab0e0";
    const badgeBorderColor = card.badgeColor === "#c0440a" ? "#e86a2a44" : card.badgeColor === "#3a2d6e" ? "#9b8fe844" : "#5ab0e044";
    const badgeBgColor = card.badgeColor === "#c0440a" ? "#e86a2a11" : card.badgeColor === "#3a2d6e" ? "#9b8fe811" : "#5ab0e011";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        style: {
            perspective: 900,
            perspectiveOrigin: "50% 50%"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: cardRef,
            onMouseEnter: ()=>setHovered(true),
            onMouseLeave: ()=>{
                setHovered(false);
                setMousePos({
                    x: 0.5,
                    y: 0.5
                });
            },
            onMouseMove: handleMouseMove,
            style: {
                background: hovered ? "linear-gradient(135deg, #0e2030 0%, #172533 100%)" : "linear-gradient(135deg, #0a1a26 0%, #111e2a 100%)",
                border: `1px solid ${hovered ? "rgba(100,180,255,0.3)" : "rgba(60,100,130,0.2)"}`,
                borderRadius: 14,
                padding: "24px 24px 20px",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
                boxShadow: hovered ? "0 20px 50px rgba(0,50,120,0.4), 0 0 0 1px rgba(100,180,255,0.12)" : "0 4px 20px rgba(0,0,0,0.3)",
                opacity: inView ? 1 : 0,
                transform: inView ? `translateY(0) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(${hovered ? 16 : 0}px) scale(${hovered ? 1.01 : 1})` : "translateY(60px) rotateX(20deg) scale(0.96)",
                transition: hovered ? "box-shadow 0.3s ease, border-color 0.3s ease, transform 0.1s ease, background 0.3s ease" : `opacity 0.7s ease ${index * 0.1}s, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${index * 0.1}s, box-shadow 0.4s ease, border-color 0.3s ease, background 0.3s ease`,
                transformStyle: "preserve-3d",
                willChange: "transform"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "absolute",
                        inset: 0,
                        borderRadius: 14,
                        background: hovered ? `radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(80,160,255,0.08) 0%, transparent 55%)` : "none",
                        pointerEvents: "none"
                    }
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                    lineNumber: 590,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "absolute",
                        top: -40,
                        right: -40,
                        width: 120,
                        height: 120,
                        borderRadius: "50%",
                        background: `rgba(${card.iconBg.replace("#", "").match(/.{2}/g).map((h)=>parseInt(h, 16)).join(",")},0.12)`,
                        opacity: hovered ? 1 : 0,
                        transition: "opacity 0.4s",
                        pointerEvents: "none",
                        filter: "blur(20px)"
                    }
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                    lineNumber: 599,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: 16
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: 40,
                                height: 40,
                                borderRadius: 10,
                                background: card.iconBg + "33",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: 18,
                                border: `1px solid ${card.iconBg}55`,
                                transform: `translateZ(${hovered ? 24 : 0}px)`,
                                transition: hovered ? "transform 0.1s ease" : "transform 0.5s cubic-bezier(0.22,1,0.36,1)"
                            },
                            children: card.icon
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                            lineNumber: 611,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontSize: 9,
                                letterSpacing: 1.5,
                                fontWeight: 700,
                                color: badgeTextColor,
                                border: `1px solid ${badgeBorderColor}`,
                                background: badgeBgColor,
                                borderRadius: 4,
                                padding: "3px 8px"
                            },
                            children: card.badge
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                            lineNumber: 622,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                    lineNumber: 610,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    style: {
                        fontSize: 17,
                        fontWeight: 700,
                        color: "#d8eaf8",
                        margin: "0 0 10px",
                        transform: `translateZ(${hovered ? 10 : 0}px)`,
                        transition: hovered ? "transform 0.1s ease" : "transform 0.5s ease"
                    },
                    children: card.title
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                    lineNumber: 633,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        fontSize: 13,
                        color: "#6a8fa8",
                        lineHeight: 1.65,
                        margin: "0 0 16px",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden"
                    },
                    children: card.description
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                    lineNumber: 641,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                gap: 6,
                                flexWrap: "wrap"
                            },
                            children: card.tags.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: 11,
                                        color: "#5a88a8",
                                        background: "rgba(60,100,130,0.15)",
                                        border: "1px solid rgba(60,100,130,0.2)",
                                        borderRadius: 20,
                                        padding: "2px 10px"
                                    },
                                    children: t
                                }, t, false, {
                                    fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                                    lineNumber: 655,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                            lineNumber: 653,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                color: hovered ? "#5ab0e0" : "#3a607a",
                                fontSize: 16,
                                transition: "color 0.3s, transform 0.3s",
                                transform: hovered ? "translateX(4px) translateZ(8px)" : "translateX(0)"
                            },
                            children: card.expanded ? "▾" : "›"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                            lineNumber: 665,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                    lineNumber: 652,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
            lineNumber: 560,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
        lineNumber: 556,
        columnNumber: 5
    }, this);
}
_s6(QuickGlanceCard, "EmCuqi3PNx+4K06U/vd5CJGYlIo=", false, function() {
    return [
        useInView
    ];
});
_c5 = QuickGlanceCard;
// ─── Floating Orbs ────────────────────────────────────────────────────────────
function FloatingOrbs() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "fixed",
            inset: 0,
            zIndex: 0,
            pointerEvents: "none",
            overflow: "hidden"
        },
        children: [
            {
                size: 400,
                x: -10,
                y: 20,
                color: "20,60,160",
                dur: 18
            },
            {
                size: 300,
                x: 80,
                y: 60,
                color: "60,20,120",
                dur: 22
            },
            {
                size: 250,
                x: 50,
                y: 80,
                color: "10,80,140",
                dur: 26
            }
        ].map((orb, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    left: `${orb.x}%`,
                    top: `${orb.y}%`,
                    width: orb.size,
                    height: orb.size,
                    borderRadius: "50%",
                    background: `radial-gradient(circle, rgba(${orb.color},0.09) 0%, transparent 70%)`,
                    filter: "blur(40px)",
                    animation: `floatOrb${i} ${orb.dur}s ease-in-out infinite alternate`,
                    transform: "translate(-50%, -50%)"
                }
            }, i, false, {
                fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                lineNumber: 689,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
        lineNumber: 683,
        columnNumber: 5
    }, this);
}
_c6 = FloatingOrbs;
function EndeavoursPage() {
    _s7();
    const mouse = useMouse();
    const [heroVisible, setHeroVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const glanceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [glanceVisible, setGlanceVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EndeavoursPage.useEffect": ()=>{
            const t = setTimeout({
                "EndeavoursPage.useEffect.t": ()=>setHeroVisible(true)
            }["EndeavoursPage.useEffect.t"], 100);
            return ({
                "EndeavoursPage.useEffect": ()=>clearTimeout(t)
            })["EndeavoursPage.useEffect"];
        }
    }["EndeavoursPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EndeavoursPage.useEffect": ()=>{
            const obs = new IntersectionObserver({
                "EndeavoursPage.useEffect": ([e])=>{
                    if (e.isIntersecting) setGlanceVisible(true);
                }
            }["EndeavoursPage.useEffect"], {
                threshold: 0.1
            });
            if (glanceRef.current) obs.observe(glanceRef.current);
            return ({
                "EndeavoursPage.useEffect": ()=>obs.disconnect()
            })["EndeavoursPage.useEffect"];
        }
    }["EndeavoursPage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: "100vh",
            background: "linear-gradient(170deg, #060d14 0%, #08121c 40%, #050d16 80%, #060e18 100%)",
            color: "#fff",
            fontFamily: "'Geist', 'Inter', system-ui, sans-serif",
            position: "relative",
            overflowX: "hidden"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NebulaCanvas, {
                mouse: mouse
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                lineNumber: 739,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShootingStars, {}, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                lineNumber: 742,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuroraCurtain, {}, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                lineNumber: 745,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingOrbs, {}, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                lineNumber: 748,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative",
                    zIndex: 2,
                    maxWidth: 900,
                    margin: "0 auto",
                    padding: "60px 28px 80px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 10,
                                    marginBottom: 20,
                                    opacity: heroVisible ? 1 : 0,
                                    transform: heroVisible ? "translateY(0)" : "translateY(-16px)",
                                    transition: "opacity 0.6s ease, transform 0.6s ease"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 28,
                                            height: 2,
                                            background: "#e86a2a"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                                        lineNumber: 762,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 11,
                                            letterSpacing: 2.5,
                                            fontWeight: 700,
                                            color: "#e86a2a"
                                        },
                                        children: "E-CELL IIT PATNA"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                                        lineNumber: 763,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                                lineNumber: 756,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedTitle, {
                                text: "Our Endeavours",
                                visible: heroVisible,
                                delay: 0.1
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                                lineNumber: 769,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: 15,
                                    color: "#6a8fa0",
                                    lineHeight: 1.7,
                                    maxWidth: 460,
                                    margin: "0 0 40px",
                                    opacity: heroVisible ? 1 : 0,
                                    transform: heroVisible ? "translateY(0)" : "translateY(20px)",
                                    transition: "opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s"
                                },
                                children: "From flagship summits to grassroots initiatives — a record of everything E-Cell builds to fuel the entrepreneurial spirit at IIT Patna."
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                                lineNumber: 772,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    opacity: heroVisible ? 1 : 0,
                                    transition: "opacity 0.7s ease 0.5s"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FeaturedCard, {}, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                                    lineNumber: 785,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                                lineNumber: 784,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                        lineNumber: 754,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: glanceRef,
                        style: {
                            marginTop: 80
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: "clamp(36px, 6vw, 56px)",
                                    fontWeight: 900,
                                    letterSpacing: -1.5,
                                    color: "#e8f4ff",
                                    margin: "0 0 36px",
                                    opacity: glanceVisible ? 1 : 0,
                                    transform: glanceVisible ? "translateY(0)" : "translateY(30px)",
                                    transition: "opacity 0.6s ease, transform 0.6s ease"
                                },
                                children: "Quick Glance"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                                lineNumber: 791,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "grid",
                                    gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
                                    gap: 20
                                },
                                children: CARDS.map((card, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QuickGlanceCard, {
                                        card: card,
                                        index: i
                                    }, card.id, false, {
                                        fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                                        lineNumber: 808,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                                lineNumber: 802,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                        lineNumber: 790,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: "center",
                            marginTop: 80,
                            fontSize: 12,
                            color: "#2a4a60",
                            letterSpacing: 0.5
                        },
                        children: "© 2026 Entrepreneurship Cell, IIT Patna"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                        lineNumber: 814,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                lineNumber: 751,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        * { box-sizing: border-box; }

        @keyframes shoot {
          0%   { opacity: 0; transform: rotate(var(--angle, 30deg)) translateX(0); }
          5%   { opacity: 1; }
          80%  { opacity: 0.8; }
          100% { opacity: 0; transform: rotate(var(--angle, 30deg)) translateX(${300}px); }
        }

        /* Each shooting star uses its own inline animation with translateX */
        div[style*="shoot"] { animation-name: shootStar; }

        @keyframes shootStar {
          0%   { opacity: 0;   transform: translateX(0)    rotate(0deg); }
          8%   { opacity: 0.9; }
          85%  { opacity: 0.6; }
          100% { opacity: 0;   transform: translateX(300px) rotate(0deg); }
        }

        @keyframes aurora0 {
          0%   { transform: translateX(-5%) scaleX(1);   opacity: 0.8; }
          100% { transform: translateX(8%)  scaleX(1.1); opacity: 1;   }
        }
        @keyframes aurora1 {
          0%   { transform: translateX(4%)  scaleY(1);   opacity: 0.7; }
          100% { transform: translateX(-6%) scaleY(1.15); opacity: 1;  }
        }
        @keyframes aurora2 {
          0%   { transform: scaleX(1)    translateY(0);  opacity: 0.6; }
          100% { transform: scaleX(1.1)  translateY(4%); opacity: 0.9; }
        }

        @keyframes floatOrb0 {
          0%   { transform: translate(-50%, -50%) scale(1);    opacity: 0.7; }
          100% { transform: translate(-35%, -60%) scale(1.2);  opacity: 1;   }
        }
        @keyframes floatOrb1 {
          0%   { transform: translate(-50%, -50%) scale(1.1);  opacity: 0.6; }
          100% { transform: translate(-65%, -40%) scale(0.85); opacity: 0.9; }
        }
        @keyframes floatOrb2 {
          0%   { transform: translate(-50%, -50%) scale(0.9);  opacity: 0.5; }
          100% { transform: translate(-40%, -65%) scale(1.15); opacity: 0.8; }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50%       { opacity: 0.9; }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                lineNumber: 820,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
        lineNumber: 729,
        columnNumber: 5
    }, this);
}
_s7(EndeavoursPage, "uGgRWujlO334pxJB9nKGf1a/cZM=", false, function() {
    return [
        useMouse
    ];
});
_c7 = EndeavoursPage;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "NebulaCanvas");
__turbopack_context__.k.register(_c1, "ShootingStars");
__turbopack_context__.k.register(_c2, "AuroraCurtain");
__turbopack_context__.k.register(_c3, "AnimatedTitle");
__turbopack_context__.k.register(_c4, "FeaturedCard");
__turbopack_context__.k.register(_c5, "QuickGlanceCard");
__turbopack_context__.k.register(_c6, "FloatingOrbs");
__turbopack_context__.k.register(_c7, "EndeavoursPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/Projects/ecell-website/client/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/Projects/ecell-website/client/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/OneDrive/Desktop/Projects/ecell-website/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/OneDrive/Desktop/Projects/ecell-website/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/Projects/ecell-website/client/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/OneDrive/Desktop/Projects/ecell-website/client/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=OneDrive_Desktop_Projects_ecell-website_client_03y4.by._.js.map