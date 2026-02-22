import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    const container = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Staggered fade up for text
            gsap.fromTo(
                '.hero-el',
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.15,
                    ease: 'power3.out',
                    delay: 0.2, // allow initial load
                }
            );
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} className="relative w-full h-[100dvh] flex flex-col justify-end overflow-hidden">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0 bg-background">
                <img
                    src="https://images.unsplash.com/photo-1549421253-5d55230c1e63?q=80&w=2400&auto=format&fit=crop"
                    alt="Dark Laboratory Precision"
                    className="w-full h-full object-cover opacity-20 scale-105 filter grayscale contrast-125 mix-blend-screen"
                />
                {/* Heavy primary-to-black gradient overlay (bottom heavy) */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-24 md:pb-32 flex flex-col items-start gap-6">
                <div className="flex flex-col gap-1 max-w-4xl">
                    <h1 className="hero-el text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-text mb-[-0.2em] z-10 leading-tight">
                        Growth meets
                    </h1>
                    <h2 className="hero-el text-6xl md:text-8xl lg:text-9xl font-drama italic text-accent pr-4 leading-[1.1]">
                        Precision.
                    </h2>
                </div>

                <p className="hero-el text-lg md:text-xl text-textMuted max-w-xl font-medium mt-4">
                    Griv.in — AI-powered growth systems for businesses that want speed, scale, and leverage.
                </p>

                <div className="hero-el mt-8 flex flex-col sm:flex-row gap-4">
                    <button className="magnetic-btn bg-accent text-background px-8 py-4 rounded-full text-sm font-bold flex items-center gap-2 group">
                        <div className="btn-bg-layer bg-text !text-background absolute inset-0 rounded-full" />
                        <span className="relative z-10 flex items-center gap-2">
                            Book a Free AI Growth Audit
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}
