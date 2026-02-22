import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Activity, Code, Server, CheckCircle, Database } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

function DiagnosticShuffler() {
    const [cards, setCards] = useState([
        { id: 1, title: 'Sales Automation Pipeline', icon: <Activity className="text-accent" size={20} /> },
        { id: 2, title: 'Intelligent Support Routing', icon: <Server className="text-accent" size={20} /> },
        { id: 3, title: 'Marketing Data Synthesis', icon: <Database className="text-accent" size={20} /> },
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCards((prev) => {
                const newArr = [...prev];
                const last = newArr.pop();
                newArr.unshift(last);
                return newArr;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-64 w-full flex items-center justify-center -mt-4">
            {cards.map((card, i) => {
                const isTop = i === 0;
                const isMiddle = i === 1;
                const isBottom = i === 2;

                return (
                    <div
                        key={card.id}
                        className="absolute w-[85%] bg-surface border border-slate rounded-[1.5rem] p-5 shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex items-center gap-4"
                        style={{
                            transform: `translateY(${i * 18}px) scale(${1 - i * 0.05})`,
                            zIndex: 10 - i,
                            opacity: 1 - i * 0.2,
                        }}
                    >
                        <div className="bg-background p-3 rounded-full border border-slate">
                            {card.icon}
                        </div>
                        <div>
                            <p className="font-mono text-xs text-textMuted uppercase tracking-wider mb-1">Process #{card.id}00</p>
                            <h4 className="font-sans font-medium text-text text-[15px]">{card.title}</h4>
                        </div>
                        {isTop && (
                            <div className="ml-auto flex shrink-0">
                                <span className="animate-ping-slow absolute inline-flex h-2 w-2 rounded-full bg-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

function TelemetryTypewriter() {
    const [text, setText] = useState('');
    const fullText = "Initializing custom logic...\n> Analyzing business model\n> Mapping audience parameters\n> Deploying bespoke automation sequence\n[SYSTEM OPTIMIZED]";

    useEffect(() => {
        let current = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, current));
            current++;
            if (current > fullText.length) {
                clearInterval(interval);
                setTimeout(() => {
                    setText('');
                    current = 0; // simplistic loop
                }, 5000);
            }
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-64 w-full bg-background/50 rounded-[1.5rem] border border-slate p-5 flex flex-col font-mono relative overflow-hidden">
            <div className="flex items-center justify-between mb-4 border-b border-slate pb-3">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500/80 animate-pulse" />
                    <span className="text-[10px] text-textMuted uppercase tracking-widest">Live Telemetry</span>
                </div>
                <Code size={14} className="text-textMuted" />
            </div>
            <div className="text-sm text-text whitespace-pre-line text-left leading-relaxed">
                {text}
                <span className="inline-block w-2 h-4 bg-accent ml-1 animate-pulse align-middle" />
            </div>
        </div>
    );
}

function CursorProtocolScheduler() {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({ repeat: -1, defaults: { ease: 'power2.inOut' } });

            tl.set('.custom-cursor', { x: 0, y: 0, scale: 1 })
                .to('.custom-cursor', { x: 50, y: 40, duration: 1 })
                .to('.custom-cursor', { scale: 0.85, duration: 0.15 })
                .to('.day-cell-3', { backgroundColor: '#C9A84C', color: '#0D0D12', duration: 0.1 }, "<")
                .to('.custom-cursor', { scale: 1, duration: 0.15 })
                .to('.custom-cursor', { x: 140, y: 120, duration: 1, delay: 0.5 })
                .to('.custom-cursor', { scale: 0.85, duration: 0.15 })
                .to('.save-btn-ui', { scale: 0.95, duration: 0.1 }, "<")
                .to('.save-btn-ui', { backgroundColor: '#C9A84C', color: '#0D0D12', scale: 1, duration: 0.15 })
                .to('.custom-cursor', { scale: 1, duration: 0.15 })
                .to('.custom-cursor', { opacity: 0, duration: 0.5, delay: 0.5 })
                .to('.day-cell-3', { backgroundColor: 'transparent', color: '#FAF8F5', duration: 0.5 }, "<")
                .to('.save-btn-ui', { backgroundColor: '#2A2A35', color: '#FAF8F5', duration: 0.5 }, "<");
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative h-64 w-full bg-background/30 rounded-[1.5rem] border border-slate p-5 flex flex-col items-center justify-center overflow-hidden touch-none select-none">
            <div className="w-full max-w-[200px] flex flex-col gap-4">
                <div className="grid grid-cols-5 gap-2">
                    {['M', 'T', 'W', 'T', 'F'].map((day, i) => (
                        <div key={i} className={`day-cell-${i} h-8 flex items-center justify-center rounded-md border border-slate text-xs font-mono text-text bg-background`}>
                            {day}
                        </div>
                    ))}
                </div>
                <div className="w-full h-8 bg-surface border border-slate rounded-md mt-4 save-btn-ui flex items-center justify-center text-xs font-sans font-medium text-text transition-colors">
                    Deploy System
                </div>
            </div>

            {/* Fake Cursor (Lucide Icon, absolutely positioned) */}
            <div className="custom-cursor absolute top-8 left-8 z-10 drop-shadow-lg" style={{ pointerEvents: 'none' }}>
                <svg width="24" height="36" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.65376 2.00017L21.7317 17.6534C22.6599 18.5571 22.0494 20.1539 20.7634 20.197L13.7842 20.4308L10.0822 28.5303C9.64653 29.4832 8.35345 29.6226 7.73397 28.7838L0.98188 19.642C0.292942 18.7093 0.69707 17.3887 1.76185 17.0945L8.5372 15.223L4.17936 3.82776C3.76672 2.74857 4.70884 1.7208 5.65376 2.00017Z" fill="white" stroke="#0D0D12" strokeWidth="1.5" />
                </svg>
            </div>
        </div>
    );
}

export default function Features() {
    const container = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo('.feature-card',
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: container.current,
                        start: 'top 75%',
                    }
                }
            );
        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} id="systems" className="w-full max-w-7xl mx-auto px-6 py-24 md:py-32">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Card 1 */}
                <div className="feature-card bg-surface rounded-[2rem] p-8 md:p-10 flex flex-col gap-8 shadow-2xl relative overflow-hidden group border border-slate/50 hover:border-slate transition-colors">
                    <div className="grow flex flex-col gap-2">
                        <h3 className="text-2xl font-sans font-semibold text-text">AI-Driven Growth Systems</h3>
                        <p className="text-sm font-sans text-textMuted leading-relaxed">
                            We design and deploy AI workflows that automate sales, marketing, support, and operations.
                        </p>
                    </div>
                    <DiagnosticShuffler />
                </div>

                {/* Card 2 */}
                <div className="feature-card bg-surface rounded-[2rem] p-8 md:p-10 flex flex-col gap-8 shadow-2xl relative overflow-hidden group border border-slate/50 hover:border-slate transition-colors">
                    <div className="grow flex flex-col gap-2">
                        <h3 className="text-2xl font-sans font-semibold text-text">Custom-Built for Each Business</h3>
                        <p className="text-sm font-sans text-textMuted leading-relaxed">
                            No templates. Every AI system is tailored to your unique business model, audience, and goals.
                        </p>
                    </div>
                    <TelemetryTypewriter />
                </div>

                {/* Card 3 */}
                <div className="feature-card bg-surface rounded-[2rem] p-8 md:p-10 flex flex-col gap-8 shadow-2xl relative overflow-hidden group border border-slate/50 hover:border-slate transition-colors">
                    <div className="grow flex flex-col gap-2">
                        <h3 className="text-2xl font-sans font-semibold text-text">From Strategy to Execution</h3>
                        <p className="text-sm font-sans text-textMuted leading-relaxed">
                            We don't just advise — we build, integrate, and optimize end-to-end AI solutions.
                        </p>
                    </div>
                    <CursorProtocolScheduler />
                </div>

            </div>
        </section>
    );
}
