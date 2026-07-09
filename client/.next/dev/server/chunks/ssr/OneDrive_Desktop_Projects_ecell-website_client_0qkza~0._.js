module.exports = [
"[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EndeavoursPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects/ecell-website/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects/ecell-website/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
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
    const [mouse, setMouse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0.5,
        y: 0.5
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handler = (e)=>{
            setMouse({
                x: e.clientX / window.innerWidth,
                y: e.clientY / window.innerHeight
            });
        };
        window.addEventListener("mousemove", handler);
        return ()=>window.removeEventListener("mousemove", handler);
    }, []);
    return mouse;
}
function useInView(threshold = 0.15) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [inView, setInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const obs = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting) setInView(true);
        }, {
            threshold
        });
        if (ref.current) obs.observe(ref.current);
        return ()=>obs.disconnect();
    }, [
        threshold
    ]);
    return {
        ref,
        inView
    };
}
function useAnimationFrame(callback, running = true) {
    const cbRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(callback);
    cbRef.current = callback;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!running) return;
        let id;
        const tick = (t)=>{
            cbRef.current(t);
            id = requestAnimationFrame(tick);
        };
        id = requestAnimationFrame(tick);
        return ()=>cancelAnimationFrame(id);
    }, [
        running
    ]);
}
// ─── Nebula Vortex Canvas ─────────────────────────────────────────────────────
function NebulaCanvas({ mouse }) {
    const stars = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>generateStars(160), []);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const timeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const mouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(mouse);
    mouseRef.current = mouse;
    useAnimationFrame((t)=>{
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
        stars.forEach((star)=>{
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
        });
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
        nebulaCenters.forEach((n)=>{
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
        });
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const resize = ()=>{
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);
        return ()=>window.removeEventListener("resize", resize);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
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
// ─── Shooting Stars ───────────────────────────────────────────────────────────
function ShootingStars() {
    const [stars, setStars] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setStars(generateShootingStars(6));
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "fixed",
            inset: 0,
            zIndex: 1,
            pointerEvents: "none",
            overflow: "hidden"
        },
        children: stars.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
// ─── Aurora Curtain ───────────────────────────────────────────────────────────
function AuroraCurtain() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
// ─── Word-by-word 3D Title ────────────────────────────────────────────────────
function AnimatedTitle({ text, visible, delay = 0 }) {
    const words = text.split(" ");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
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
        children: words.map((word, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
// ─── Featured Card ────────────────────────────────────────────────────────────
function FeaturedCard() {
    const { ref, inView } = useInView(0.1);
    const [closed, setClosed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mousePos, setMousePos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0.5,
        y: 0.5
    });
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleMouseMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        const rect = cardRef.current?.getBoundingClientRect();
        if (!rect) return;
        setMousePos({
            x: (e.clientX - rect.left) / rect.width,
            y: (e.clientY - rect.top) / rect.height
        });
    }, []);
    if (closed) return null;
    const rotX = hovered ? (mousePos.y - 0.5) * -8 : 0;
    const rotY = hovered ? (mousePos.x - 0.5) * 8 : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        style: {
            perspective: 1000,
            perspectiveOrigin: "50% 50%"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        gap: 40,
                        flexWrap: "wrap"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                flex: "1 1 320px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        gap: 0,
                                        marginTop: 32
                                    },
                                    children: FEATURED.stats.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                flex: 1,
                                                borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.1)" : "none",
                                                paddingLeft: i > 0 ? 24 : 0
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                flex: "0 0 auto",
                                minWidth: 180
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    style: {
                                        listStyle: "none",
                                        margin: 0,
                                        padding: 0,
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 10
                                    },
                                    children: FEATURED.highlights.map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 8,
                                                color: "#8aabb8",
                                                fontSize: 13
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
// ─── Quick Glance Card ────────────────────────────────────────────────────────
function QuickGlanceCard({ card, index }) {
    const { ref, inView } = useInView(0.08);
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mousePos, setMousePos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0.5,
        y: 0.5
    });
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleMouseMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        const rect = cardRef.current?.getBoundingClientRect();
        if (!rect) return;
        setMousePos({
            x: (e.clientX - rect.left) / rect.width,
            y: (e.clientY - rect.top) / rect.height
        });
    }, []);
    const rotX = hovered ? (mousePos.y - 0.5) * -12 : 0;
    const rotY = hovered ? (mousePos.x - 0.5) * 12 : 0;
    const badgeTextColor = card.badgeColor === "#c0440a" ? "#e86a2a" : card.badgeColor === "#3a2d6e" ? "#9b8fe8" : "#5ab0e0";
    const badgeBorderColor = card.badgeColor === "#c0440a" ? "#e86a2a44" : card.badgeColor === "#3a2d6e" ? "#9b8fe844" : "#5ab0e044";
    const badgeBgColor = card.badgeColor === "#c0440a" ? "#e86a2a11" : card.badgeColor === "#3a2d6e" ? "#9b8fe811" : "#5ab0e011";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        style: {
            perspective: 900,
            perspectiveOrigin: "50% 50%"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: 16
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                gap: 6,
                                flexWrap: "wrap"
                            },
                            children: card.tags.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
// ─── Floating Orbs ────────────────────────────────────────────────────────────
function FloatingOrbs() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
        ].map((orb, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
function EndeavoursPage() {
    const mouse = useMouse();
    const [heroVisible, setHeroVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const glanceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [glanceVisible, setGlanceVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const t = setTimeout(()=>setHeroVisible(true), 100);
        return ()=>clearTimeout(t);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const obs = new IntersectionObserver(([e])=>{
            if (e.isIntersecting) setGlanceVisible(true);
        }, {
            threshold: 0.1
        });
        if (glanceRef.current) obs.observe(glanceRef.current);
        return ()=>obs.disconnect();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: "100vh",
            background: "linear-gradient(170deg, #060d14 0%, #08121c 40%, #050d16 80%, #060e18 100%)",
            color: "#fff",
            fontFamily: "'Geist', 'Inter', system-ui, sans-serif",
            position: "relative",
            overflowX: "hidden"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NebulaCanvas, {
                mouse: mouse
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                lineNumber: 739,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ShootingStars, {}, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                lineNumber: 742,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuroraCurtain, {}, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                lineNumber: 745,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingOrbs, {}, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                lineNumber: 748,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative",
                    zIndex: 2,
                    maxWidth: 900,
                    margin: "0 auto",
                    padding: "60px 28px 80px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedTitle, {
                                text: "Our Endeavours",
                                visible: heroVisible,
                                delay: 0.1
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Projects/ecell-website/client/src/app/endeavours/page.tsx",
                                lineNumber: 769,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    opacity: heroVisible ? 1 : 0,
                                    transition: "opacity 0.7s ease 0.5s"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FeaturedCard, {}, void 0, false, {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: glanceRef,
                        style: {
                            marginTop: 80
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "grid",
                                    gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
                                    gap: 20
                                },
                                children: CARDS.map((card, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(QuickGlanceCard, {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$ecell$2d$website$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
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
}),
"[project]/OneDrive/Desktop/Projects/ecell-website/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/OneDrive/Desktop/Projects/ecell-website/client/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=OneDrive_Desktop_Projects_ecell-website_client_0qkza~0._.js.map