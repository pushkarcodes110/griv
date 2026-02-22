import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';

export default function Navbar({ onOpenModal }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl transition-all duration-500 rounded-[2rem] px-6 py-4 flex items-center justify-between ${scrolled
            ? 'bg-background/80 backdrop-blur-xl border border-surface shadow-2xl'
            : 'bg-transparent border-transparent'
            }`}>
            {/* Logo */}
            <div className="flex items-center gap-2">
                <HashLink smooth to="/#" className="font-sans font-bold text-xl tracking-tight text-text">
                    Griv<span className="text-accent">.in</span>
                </HashLink>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
                {['Systems', 'Process', 'Protocol'].map((link) => (
                    <HashLink smooth key={link} to={`/#${link.toLowerCase()}`} className="text-sm font-medium text-textMuted hover:text-text transition-colors hover-lift">
                        {link}
                    </HashLink>
                ))}
            </div>

            {/* CTA Desktop */}
            <button onClick={onOpenModal} className="hidden md:inline-flex magnetic-btn bg-surface text-text border border-surface px-6 py-2.5 rounded-full text-sm font-medium hover:border-accent">
                <div className="btn-bg-layer absolute inset-0 rounded-full" />
                <span className="relative z-10">Book Audit</span>
            </button>

            {/* Mobile Toggle */}
            <button
                className="md:hidden text-text"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Minimal Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="absolute top-[120%] left-0 w-full bg-background/95 backdrop-blur-xl border border-surface rounded-2xl p-6 flex flex-col gap-4 shadow-2xl md:hidden">
                    {['Systems', 'Process', 'Protocol'].map((link) => (
                        <HashLink smooth key={link} to={`/#${link.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-textMuted hover:text-text">
                            {link}
                        </HashLink>
                    ))}
                    <button onClick={() => { setMobileMenuOpen(false); onOpenModal(); }} className="magnetic-btn w-full mt-4 bg-accent text-background px-6 py-3 rounded-full text-sm font-bold">
                        <div className="btn-bg-layer bg-text !text-background absolute inset-0 rounded-full" />
                        <span className="relative z-10">Book Audit</span>
                    </button>
                </div>
            )}
        </nav>
    );
}
