import { useEffect } from 'react';

export default function Legal({ title, lastUpdated, content }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full min-h-screen bg-background pt-32 pb-24 px-6 md:px-12 flex justify-center">
            <div className="w-full max-w-4xl flex flex-col gap-12">
                <div className="flex flex-col gap-4 border-b border-slate pb-8 relative">
                    <div className="absolute left-0 bottom-0 w-1/3 h-[1px] bg-accent" />
                    <h1 className="text-4xl md:text-5xl font-sans font-bold text-text">{title}</h1>
                    <p className="text-textMuted font-mono text-sm uppercase tracking-wider">Last Updated: {lastUpdated}</p>
                </div>

                <div className="prose prose-invert prose-slate max-w-none 
                        prose-headings:font-sans prose-headings:font-semibold prose-headings:text-text
                        prose-p:font-sans prose-p:text-textMuted prose-p:leading-relaxed
                        prose-a:text-accent prose-a:no-underline hover:prose-a:underline
                        prose-strong:text-text prose-li:text-textMuted">
                    {content}
                </div>
            </div>
        </div>
    );
}
