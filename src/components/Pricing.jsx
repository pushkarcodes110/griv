import { CheckCircle2 } from 'lucide-react';

export default function Pricing() {
    const plans = [
        {
            name: 'Strategy Session',
            price: 'Free',
            desc: 'Introductory AI growth audit.',
            features: ['Current stack analysis', 'Opportunity mapping', 'High-level roadmap'],
            popular: false,
        },
        {
            name: 'Custom Integration',
            price: 'Bespoke',
            desc: 'End-to-end intelligent systems build.',
            features: ['Dedicated engineering team', 'Custom AI agent deployment', 'CRM & Tool integraton', 'System telemetry'],
            popular: true,
        },
        {
            name: 'Retained Leverage',
            price: 'Partner',
            desc: 'Continuous optimization & scaling.',
            features: ['24/7 System monitoring', 'Iterative model fine-tuning', 'Priority architecture support'],
            popular: false,
        }
    ];

    return (
        <section id="process" className="w-full max-w-7xl mx-auto px-6 py-24 md:py-48 flex flex-col items-center">
            <div className="text-center mb-16 md:mb-24 flex flex-col gap-4">
                <h2 className="text-4xl md:text-5xl font-sans font-bold text-text">Select Your Leverage</h2>
                <p className="text-textMuted max-w-2xl text-lg">Transparent engagement models built for ambitious businesses.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
                {plans.map((plan, i) => (
                    <div
                        key={i}
                        className={`relative rounded-[2rem] p-8 md:p-10 flex flex-col gap-8 transition-transform hover:-translate-y-2 ${plan.popular
                                ? 'bg-text text-background shadow-[0_0_40px_rgba(201,168,76,0.15)] ring-1 ring-accent'
                                : 'bg-surface border border-slate text-text'
                            }`}
                    >
                        {plan.popular && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-background px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                Most Required
                            </div>
                        )}

                        <div className="flex flex-col gap-2">
                            <h3 className={`text-xl font-bold font-sans ${plan.popular ? 'text-background' : 'text-text'}`}>{plan.name}</h3>
                            <p className={plan.popular ? 'text-background/80' : 'text-textMuted'}>{plan.desc}</p>
                        </div>

                        <div className="text-4xl font-sans font-bold tracking-tight">
                            {plan.price}
                        </div>

                        <hr className={plan.popular ? 'border-background/20' : 'border-slate/50'} />

                        <ul className="flex flex-col gap-4 grow">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <CheckCircle2 size={20} className={`shrink-0 ${plan.popular ? 'text-accent' : 'text-accent'}`} />
                                    <span className={`text-sm ${plan.popular ? 'font-medium' : ''}`}>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <button className={`magnetic-btn mt-4 w-full py-4 rounded-full font-bold text-sm ${plan.popular
                                ? 'bg-accent text-background'
                                : 'bg-background border border-slate hover:border-accent text-text'
                            }`}>
                            <div className={`btn-bg-layer absolute inset-0 rounded-full ${plan.popular ? 'bg-background' : 'bg-surface'}`} />
                            <span className={`relative z-10 ${plan.popular ? 'mix-blend-difference text-text' : ''}`}>
                                {plan.popular ? 'Start Build' : 'Inquire'}
                            </span>
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
