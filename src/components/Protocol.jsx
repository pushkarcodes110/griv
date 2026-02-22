import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        id: '01',
        title: 'Audit & Blueprint',
        desc: 'We map your entire operational architecture to identify AI leverage points.'
    },
    {
        id: '02',
        title: 'Custom Engineering',
        desc: 'Bespoke AI workflows are built and integrated seamlessly into your existing stack.'
    },
    {
        id: '03',
        title: 'Scale & Optimize',
        desc: 'Continuous telemetry monitoring to refine outputs and maximize ROI at scale.'
    }
];

export default function Protocol() {
    const container = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.protocol-card');

            cards.forEach((card, i) => {
                if (i === cards.length - 1) return; // Don't animate the last card out

                gsap.to(card, {
                    scale: 0.9,
                    opacity: 0.5,
                    filter: 'blur(20px)',
                    ease: 'none',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top top',
                        end: 'bottom top',
                        scrub: true,
                        pin: true,
                        pinSpacing: false, // Allows the next card to scroll over it
                    }
                });
            });

            // Pin the last card briefly for pacing
            gsap.to(cards[cards.length - 1], {
                scrollTrigger: {
                    trigger: cards[cards.length - 1],
                    start: 'top top',
                    end: '+=100%',
                    pin: true,
                }
            });

        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <section id="protocol" ref={container} className="w-full bg-background relative pb-[100vh]">
            <div className="w-full max-w-7xl mx-auto px-6 py-24 md:py-32 mb-12">
                <h2 className="text-4xl md:text-5xl font-sans font-bold text-text mb-4">Execution Protocol</h2>
                <p className="text-textMuted font-sans max-w-xl">A deterministic, zero-fluff methodology to integrate intelligent automation.</p>
            </div>

            <div className="relative w-full text-center">
                {steps.map((step, i) => (
                    <div
                        key={step.id}
                        className="protocol-card w-full h-[100vh] flex items-center justify-center sticky top-0"
                        style={{ zIndex: i + 1 }}
                    >
                        <div className="w-[90%] max-w-5xl h-[70vh] bg-surface rounded-[3rem] p-10 md:p-16 shadow-2xl border border-slate flex flex-col items-center justify-center relative overflow-hidden group">

                            {/* Abstract Visual based on step index */}
                            <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10">
                                {i === 0 && (
                                    <div className="w-[400px] h-[400px] border-[1px] border-accent rounded-full animate-[spin_20s_linear_infinite]" />
                                )}
                                {i === 1 && (
                                    <div className="w-full h-full relative">
                                        <div className="absolute left-0 right-0 h-[2px] bg-accent/50 animate-[ping_4s_ease-in-out_infinite]" style={{ top: '50%' }} />
                                        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #C9A84C 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.2 }} />
                                    </div>
                                )}
                                {i === 2 && (
                                    <svg className="w-full h-full opacity-50" viewBox="0 0 100 100" preserveAspectRatio="none">
                                        <path d="M0,50 Q25,20 50,50 T100,50" fill="none" stroke="#C9A84C" strokeWidth="0.5" className="animate-[pulse_3s_ease-in-out_infinite]" />
                                    </svg>
                                )}
                            </div>

                            {/* Content */}
                            <div className="relative z-10 flex flex-col gap-6 items-center text-center max-w-2xl">
                                <span className="font-mono text-accent text-lg">Step {step.id}</span>
                                <h3 className="text-4xl md:text-6xl font-sans font-bold text-text tracking-tight">{step.title}</h3>
                                <p className="text-lg md:text-xl text-textMuted font-sans leading-relaxed">{step.desc}</p>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
