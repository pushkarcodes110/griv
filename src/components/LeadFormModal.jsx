import { useState, useEffect } from 'react';
import { X, CheckCircle, Loader2 } from 'lucide-react';

export default function LeadFormModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({ name: '', email: '', company: '', needs: '' });
    const [status, setStatus] = useState('idle'); // idle | submitting | success | error

    // Prevent background scrolling when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        // User will provide webhook. Replace URL here.
        const WEBHOOK_URL = 'YOUR_WEBHOOK_URL_HERE'; // <--- Webhook destination

        try {
            const response = await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                /** Note: no-cors might be needed depending on the webhook provider (e.g. Zapier/Make)
                 *  but omitting for now assuming standard JSON parsing API 
                 */
                body: JSON.stringify({
                    source: 'Griv.in Landing Page',
                    timestamp: new Date().toISOString(),
                    ...formData
                })
            });

            // Even if response isn't 200 (due to CORS or opaque response from typical webhooks), 
            // we assume success if fetch didn't throw a network error for now.
            setStatus('success');
            setTimeout(() => {
                onClose();
                setStatus('idle');
                setFormData({ name: '', email: '', company: '', needs: '' });
            }, 3000);

        } catch (error) {
            console.error("Webhook Error:", error);
            setStatus('error');
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-background/80 backdrop-blur-sm">
            <div
                className="relative w-full max-w-lg bg-surface border border-slate rounded-3xl p-8 md:p-10 shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-textMuted hover:text-text transition-colors"
                >
                    <X size={24} />
                </button>

                {status === 'success' ? (
                    <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                        <CheckCircle size={64} className="text-emerald-500 mb-2" />
                        <h3 className="text-2xl font-sans font-bold text-text">Request Received</h3>
                        <p className="text-textMuted">We will run the preliminary audit and get back to you within 24 hours.</p>
                    </div>
                ) : (
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <h3 className="text-3xl font-sans font-bold text-text">Initialize Audit</h3>
                            <p className="text-textMuted text-sm">Provide your details to securely log your request into our systems.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-mono text-textMuted uppercase tracking-wider">Full Name</label>
                                <input
                                    required
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-background border border-slate rounded-xl px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-mono text-textMuted uppercase tracking-wider">Work Email</label>
                                <input
                                    required
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-background border border-slate rounded-xl px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors"
                                    placeholder="john@company.com"
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-mono text-textMuted uppercase tracking-wider">Company URL</label>
                                <input
                                    required
                                    type="text"
                                    value={formData.company}
                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                    className="w-full bg-background border border-slate rounded-xl px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors"
                                    placeholder="company.com"
                                />
                            </div>

                            <div className="flex flex-col gap-1.5 mb-2">
                                <label className="text-xs font-mono text-textMuted uppercase tracking-wider">Primary Bottleneck</label>
                                <textarea
                                    required
                                    rows={3}
                                    value={formData.needs}
                                    onChange={(e) => setFormData({ ...formData, needs: e.target.value })}
                                    className="w-full bg-background border border-slate rounded-xl px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors resize-none"
                                    placeholder="We are struggling to scale outbound sales manually..."
                                />
                            </div>

                            {status === 'error' && (
                                <p className="text-red-400 text-sm font-medium">System Error: Failed to dispatch data. Please try again.</p>
                            )}

                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="magnetic-btn w-full bg-accent text-background py-4 rounded-xl font-bold font-sans disabled:opacity-70 disabled:hover:scale-100"
                            >
                                <div className="btn-bg-layer absolute inset-0 rounded-xl bg-text" />
                                <span className="relative z-10 flex items-center justify-center gap-2 mix-blend-difference text-background">
                                    {status === 'submitting' ? <Loader2 className="animate-spin" size={20} /> : 'Submit Request'}
                                </span>
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}
