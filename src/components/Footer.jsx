export default function Footer() {
    return (
        <footer className="w-full bg-background pt-24 md:pt-32 pb-8 px-6 relative z-10">
            <div className="w-full bg-[#050508] rounded-t-[4rem] px-8 md:px-16 pt-20 pb-12 flex flex-col gap-16 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
                    {/* Brand Col */}
                    <div className="md:col-span-5 flex flex-col gap-6">
                        <span className="font-sans font-bold text-3xl tracking-tight text-text">
                            Griv<span className="text-accent">.in</span>
                        </span>
                        <p className="text-textMuted font-sans max-w-sm text-sm leading-relaxed">
                            AI-powered growth systems for businesses that want speed, scale, and leverage.
                        </p>
                        <div className="mt-4 flex items-center gap-3 bg-surface w-fit px-4 py-2 rounded-full border border-slate/50">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="font-mono text-xs text-textMuted uppercase tracking-widest">System Operational</span>
                        </div>
                    </div>

                    {/* Links Cols */}
                    <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div className="flex flex-col gap-4">
                            <h4 className="font-sans font-semibold text-text uppercase text-xs tracking-wider">Navigation</h4>
                            <a href="#systems" className="text-sm font-sans text-textMuted hover:text-accent transition-colors">Systems</a>
                            <a href="#process" className="text-sm font-sans text-textMuted hover:text-accent transition-colors">Process</a>
                            <a href="#protocol" className="text-sm font-sans text-textMuted hover:text-accent transition-colors">Protocol</a>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4 className="font-sans font-semibold text-text uppercase text-xs tracking-wider">Socials</h4>
                            <a href="#" className="text-sm font-sans text-textMuted hover:text-accent transition-colors">Twitter (X)</a>
                            <a href="#" className="text-sm font-sans text-textMuted hover:text-accent transition-colors">LinkedIn</a>
                            <a href="#" className="text-sm font-sans text-textMuted hover:text-accent transition-colors">GitHub</a>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4 className="font-sans font-semibold text-text uppercase text-xs tracking-wider">Legal</h4>
                            <a href="#" className="text-sm font-sans text-textMuted hover:text-accent transition-colors">Privacy Policy</a>
                            <a href="#" className="text-sm font-sans text-textMuted hover:text-accent transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>

                <hr className="border-slate/30" />

                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans text-textMuted">
                    <p>© {new Date().getFullYear()} Griv AI. All rights reserved.</p>
                    <p>Designed for Scale.</p>
                </div>

            </div>
        </footer>
    );
}
