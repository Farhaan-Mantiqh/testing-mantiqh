<section class="relative w-full bg-midnight-500" id="showcase-trigger">
    <!-- Sticky Container -->
    <div
        class="sticky top-0 h-screen w-full flex flex-col items-center overflow-hidden"
    >
        <!-- Desktop Version Container -->
        <div class="w-full h-full relative flex flex-col px-[10%]">
            <!-- Inner Container with Side Borders -->
            <div
                class="w-full h-full relative flex flex-col border-x border-slate-200/10"
            >
                <!-- Holl (Header) Grid -->
                <div
                    class="h-[119px] w-full grid grid-cols-[40%_60%] shrink-0 z-50 bg-midnight-500 relative"
                >
                    <!-- Static Initial Indicator (Always visible) -->
                    <div id="header-indicator" class="absolute left-[-96px] bottom-0 w-16">
                        <div class="w-full h-[1px] bg-white/20"></div>
                        <span
                            class="absolute top-2 left-0 text-[11px] font-medium text-white/40"
                            >01</span
                        >
                    </div>

                    <!-- Col 1: Brands/Logos -->
                    <div
                        class="border-r border-slate-200/10 flex flex-col justify-center px-6 relative"
                    >
                        <div class="flex items-center gap-3 justify-center">
                            <!-- Brand Icon 1 (Featured) -->
                            <div
                                class="w-10 h-10 rounded-lg bg-white flex items-center justify-center p-1.5 shrink-0 shadow-lg shadow-white/5"
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 2L15 8H21L16 12L18 18L12 14L6 18L8 12L3 8H9L12 2Z"
                                        fill="#22C55E"></path>
                                </svg>
                            </div>
                            <!-- Brand Icons 2-5 -->
                            {
                                Array.from({ length: 4 }).map(() => (
                                    <div class="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center shrink-0">
                                        <div class="w-5 h-3 bg-white/10 rounded-sm" />
                                    </div>
                                ))
                            }
                        </div>
                        <!-- Header Progress Line (Step 01) -->
                        <div class="absolute bottom-0 left-6 right-6 h-[1px] bg-white/5 overflow-hidden">
                            <div id="header-progress-line" class="absolute left-0 top-0 h-full w-full bg-white/60" />
                        </div>
                    </div>

                    <!-- Col 2: Info -->
                    <div class="flex items-center px-12">
                        <span class="text-white/40 text-[11px] font-medium uppercase tracking-[0.2em]">Our Portfolio Showcase</span>
                    </div>
                </div>

                <!-- Slides Container Area -->
                <div class="flex-grow w-full relative overflow-hidden">
                    <!-- Pinned Base Content (Indicator 01) -->
                    <div class="absolute inset-0 grid grid-cols-[40%_60%] z-0 bg-[#0A0B10]">
                        <!-- Left Column: Premium Content -->
                        <div class="px-12 lg:px-20 border-r border-white/5 relative flex flex-col justify-center gap-16">
                            <!-- Background Glow -->
                            <div class="absolute top-1/4 left-0 w-64 h-64 bg-azure-500/10 blur-[120px] rounded-full pointer-events-none" />
                            
                            <!-- Project Content -->
                            <div class="relative z-10 space-y-12">
                                <div class="group relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
                                    <img src="/home/farhaan/.gemini/antigravity/brain/9c1ecb72-fd6d-4eeb-9156-fd4768e889d4/showcase_project_1_1778139119324.png" alt="AI Neural Networks" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div class="absolute inset-0 bg-gradient-to-t from-[#0A0B10] via-transparent to-transparent opacity-60" />
                                </div>
                                <div class="space-y-6">
                                    <div class="flex items-center gap-4">
                                        <span class="w-8 h-[1px] bg-azure-500" />
                                        <span class="text-azure-400 font-bold tracking-[0.4em] text-[10px] uppercase">Artificial Intelligence</span>
                                    </div>
                                    <h3 class="text-[40px] lg:text-[48px] font-bold text-white leading-[1.1] tracking-tight">
                                        AI/ML <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-azure-400">Neural Ecosystem</span>
                                    </h3>
                                    <p class="text-[16px] text-white/50 leading-relaxed max-w-[90%] font-medium">
                                        Pioneering high-frequency intelligence layers with neural-driven architectural patterns and autonomous decision-making engines.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Right Column: Split Top/Bottom Glass -->
                        <div class="grid grid-rows-2 h-full bg-[#0D0F17]">
                            <!-- Top Part -->
                            <div class="p-16 lg:p-24 border-b border-white/5 flex flex-col justify-center gap-8 relative group overflow-hidden">
                                <div class="absolute inset-0 bg-azure-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div class="relative z-10 space-y-4">
                                    <span class="text-azure-400/80 font-bold tracking-[0.4em] text-[10px] uppercase">The Challenge</span>
                                    <p class="text-[20px] lg:text-[24px] text-white/90 leading-relaxed font-semibold tracking-tight">
                                        Synthesizing unstructured neural pathways into high-performance, real-time analytics with sub-millisecond latency requirements.
                                    </p>
                                </div>
                            </div>
                            <!-- Bottom Part -->
                            <div class="p-16 lg:p-24 flex flex-col justify-center gap-8 relative group overflow-hidden">
                                <div class="absolute inset-0 bg-azure-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div class="relative z-10 space-y-4">
                                    <span class="text-azure-400/80 font-bold tracking-[0.4em] text-[10px] uppercase">The Outcome</span>
                                    <p class="text-[20px] lg:text-[24px] text-white/90 leading-relaxed font-semibold tracking-tight">
                                        Achieved a 400% increase in predictive accuracy while establishing an industry-first standard for autonomous tech scaling.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Slides Wrapper (02-05) -->
                    <div class="absolute inset-0 z-10" id="slides-container">
                        {
                            [
                                {
                                    title: "Enterprise Ecosystem",
                                    subtitle: "Data Governance",
                                    desc: "Unified cloud-native data lake architecture powering global enterprise synchronization and distributed intelligence.",
                                    challenge: "Managing massive data throughput across siloed infrastructures while maintaining 99.99% consistency and zero-loss integrity.",
                                    outcome: "Successfully unified 42 global regions into a single, cohesive data fabric with near-instantaneous synchronization across all nodes.",
                                    img: "/home/farhaan/.gemini/antigravity/brain/9c1ecb72-fd6d-4eeb-9156-fd4768e889d4/showcase_project_2_1778139145271.png",
                                    accent: "from-purple-500/10"
                                },
                                {
                                    title: "Next-Gen Experience",
                                    subtitle: "Product Design",
                                    desc: "Immersive mobile interface re-defining user interaction through fluid motion, haptic feedback, and predictive UI patterns.",
                                    challenge: "Designing a high-density information interface that remains intuitive and responsive across diverse device ecosystems.",
                                    outcome: "Enhanced user retention by 65% through a patent-pending interaction model and state-of-the-art visual design language.",
                                    img: "/home/farhaan/.gemini/antigravity/brain/9c1ecb72-fd6d-4eeb-9156-fd4768e889d4/showcase_project_3_1778139168018.png",
                                    accent: "from-azure-500/10"
                                },
                                {
                                    title: "CyberCloud Architecture",
                                    subtitle: "Cloud Solutions",
                                    desc: "Distributed server-less framework providing infinite scalability and state-of-the-art security protocols for modern web apps.",
                                    challenge: "Securing decentralized cloud assets against high-frequency intrusion attempts without compromising global access speeds.",
                                    outcome: "Implemented a zero-trust network architecture that successfully mitigated 100% of intrusion attempts while reducing latency by 30%.",
                                    img: "/home/farhaan/.gemini/antigravity/brain/9c1ecb72-fd6d-4eeb-9156-fd4768e889d4/showcase_project_4_1778139195146.png",
                                    accent: "from-lime-500/10"
                                }
                            ].map((slide, i) => (
                                <div
                                    class:list={[
                                        "slide absolute top-0 left-0 w-full h-full translate-y-[100vh]",
                                    ]}
                                    style={`
                                    z-index: ${10 + i}; 
                                    background: #0A0B10;
                                `}
                                >
                                    <!-- Individual Slide Indicator (02+) -->
                                    <div
                                        class="slide-indicator absolute left-[-96px] w-16 pointer-events-none"
                                        style={`top: ${(i + 1) * 18}px;`}
                                    >
                                        <div class="w-full h-[1px] bg-white/20" />
                                        <span
                                            class="absolute top-2 left-0 text-[11px] font-medium text-white/40"
                                        >
                                            0{i + 2}
                                        </span>
                                    </div>

                                    <!-- Slide Content Grid (2 Columns) -->
                                    <div class="w-full grid grid-cols-[40%_60%] h-full">
                                        <!-- Left Column -->
                                        <div class="px-12 lg:px-20 border-r border-white/5 relative flex flex-col justify-center gap-16">
                                            <div class:list={["absolute top-1/4 left-0 w-64 h-64 blur-[120px] rounded-full pointer-events-none bg-gradient-to-br opacity-40", slide.accent]} />
                                            
                                            <div 
                                                class="absolute left-6 right-6 h-[1px] bg-white/5 overflow-hidden"
                                                style={`top: ${(i + 1) * 18}px;`}
                                            >
                                                <div class="slide-progress-line absolute left-0 top-0 h-full w-0 bg-azure-500" />
                                            </div>

                                            <div class="relative z-10 space-y-12">
                                                <div class="group relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
                                                    <img src={slide.img} alt={slide.title} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                                    <div class="absolute inset-0 bg-gradient-to-t from-[#0A0B10] via-transparent to-transparent opacity-60" />
                                                </div>
                                                <div class="space-y-6">
                                                    <div class="flex items-center gap-4">
                                                        <span class="w-8 h-[1px] bg-azure-500" />
                                                        <span class="text-azure-400 font-bold tracking-[0.4em] text-[10px] uppercase">{slide.subtitle}</span>
                                                    </div>
                                                    <h3 class="text-[40px] lg:text-[48px] font-bold text-white leading-[1.1] tracking-tight">
                                                        {slide.title.split(' ')[0]} <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-azure-400">{slide.title.split(' ').slice(1).join(' ')}</span>
                                                    </h3>
                                                    <p class="text-[16px] text-white/50 leading-relaxed max-w-[90%] font-medium">
                                                        {slide.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Right Column -->
                                        <div class="grid grid-rows-2 h-full bg-[#0D0F17]">
                                            <div class="p-16 lg:p-24 border-b border-white/5 flex flex-col justify-center gap-8 relative group overflow-hidden">
                                                <div class="absolute inset-0 bg-azure-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                                <div class="relative z-10 space-y-4">
                                                    <span class="text-azure-400/80 font-bold tracking-[0.4em] text-[10px] uppercase">The Challenge</span>
                                                    <p class="text-[20px] lg:text-[24px] text-white/90 leading-relaxed font-semibold tracking-tight">
                                                        {slide.challenge}
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="p-16 lg:p-24 flex flex-col justify-center gap-8 relative group overflow-hidden">
                                                <div class="absolute inset-0 bg-azure-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                                <div class="relative z-10 space-y-4">
                                                    <span class="text-azure-400/80 font-bold tracking-[0.4em] text-[10px] uppercase">The Outcome</span>
                                                    <p class="text-[20px] lg:text-[24px] text-white/90 leading-relaxed font-semibold tracking-tight">
                                                        {slide.outcome}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Scroll Spacer -->
    <div class="h-[400vh]"></div>
</section>

<script>
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";

    gsap.registerPlugin(ScrollTrigger);

    const slides = document.querySelectorAll(".slide");
    const trigger = document.querySelector("#showcase-trigger");

    if (trigger && slides.length > 0) {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: trigger,
                start: "top top",
                end: "bottom bottom",
                scrub: 0.5,
            },
        });

        // Sequential animations for slides
        slides.forEach((slide, i) => {
            const startTime = i * 1; // Slide i starts moving immediately as its index dictates

            // Animate current slide up
            tl.to(
                slide,
                {
                    y: 0,
                    duration: 1,
                    ease: "power1.inOut",
                },
                startTime
            );

            // Animate current slide's local progress line
            const progressLine = slide.querySelector(".slide-progress-line");
            if (progressLine) {
                tl.to(
                    progressLine,
                    {
                        width: "100%",
                        duration: 1,
                        ease: "none",
                    },
                    startTime
                );
            }

            // "Empty out" (to the opposite side) and fade the previous indicators
            if (i === 0) {
                // Header (01) empties as Slide 1 (02) comes in
                const headerText = document.querySelector("#header-indicator span");
                const headerLine = document.querySelector("#header-progress-line");
                
                if (headerLine) {
                    tl.to(headerLine, { 
                        left: "100%",
                        width: "0%", 
                        duration: 1, 
                        ease: "power1.inOut" 
                    }, startTime);
                }
                if (headerText) {
                    tl.to(headerText, { opacity: 0, duration: 0.05 }, startTime + 0.95);
                }
            } else {
                const prevIndicator = slides[i - 1].querySelector(".slide-indicator span");
                const prevLine = slides[i - 1].querySelector(".slide-progress-line");
                
                if (prevLine) {
                    tl.to(prevLine, { 
                        left: "100%",
                        width: "0%", 
                        duration: 1, 
                        ease: "power1.inOut" 
                    }, startTime);
                }
                if (prevIndicator) {
                    tl.to(prevIndicator, { opacity: 0, duration: 0.05 }, startTime + 0.95);
                }
            }
        });
    }
</script>

<style>
    .glass {
        background: rgba(255, 255, 255, 0.02);
        backdrop-filter: blur(24px);
        box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5);
    }
</style>
