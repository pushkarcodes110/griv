import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
    const container = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Background Image Parallax
            gsap.to('.ph-bg', {
                yPercent: 30,
                ease: 'none',
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
            });

            // Text Reveal
            gsap.fromTo('.ph-text',
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: container.current,
                        start: 'center 80%',
                    }
                }
            );
        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} className="relative w-full py-32 md:py-48 overflow-hidden bg-background">
            {/* Background Texture image */}
            <div className="absolute inset-0 z-0 h-[130%] -top-[15%] ph-bg pointer-events-none">
                <img
                    src="https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?q=80&w=2400&auto=format&fit=crop"
                    alt="Dark Abstract Texture"
                    className="w-full h-full object-cover opacity-[0.15] scale-105 filter grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
            </div>

            <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center gap-12">
                <p className="ph-text text-lg md:text-2xl text-textMuted font-sans max-w-2xl font-medium tracking-tight">
                    Most agencies focus on manual effort and fragmented tools.
                </p>

                <h2 className="ph-text text-4xl md:text-6xl lg:text-7xl font-sans font-bold text-text leading-tight max-w-4xl tracking-tight">
                    We focus on{' '}
                    <span className="font-drama italic text-accent font-normal px-2">
                        Intelligence-first
                    </span>{' '}
                    leverage.
                </h2>
            </div>
        </section>
    );
}
