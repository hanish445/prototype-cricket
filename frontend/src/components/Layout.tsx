import Navbar from './Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white font-sans">
            <Navbar />

            {/* Main Page Content */}
            <main className="flex-grow">
                {children}
            </main>

            {/* New Minimal Cyber Footer */}
            <footer className="bg-black border-t border-zinc-900 py-10 px-4">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

                    <p className="text-zinc-600 font-bold uppercase tracking-[0.3em] text-[10px] text-center md:text-left">
                        © {new Date().getFullYear()} DORTMUND CRICKET XI
                    </p>

                    {/* LEGAL NAVIGATION BLOCK */}
                    <nav className="flex gap-8">
                        <a
                            href="/impressum"
                            className="text-zinc-500 hover:text-cyan-400 font-bold uppercase tracking-[0.2em] text-[10px] transition-colors"
                        >
                            Impressum
                        </a>
                        {/* Pro-Tip: Add this placeholder now, you will need a Privacy Policy later too */}
                        <a
                            href="/datenschutz"
                            className="text-zinc-500 hover:text-cyan-400 font-bold uppercase tracking-[0.2em] text-[10px] transition-colors"
                        >
                            Datenschutz
                        </a>
                    </nav>

                </div>
            </footer>
        </div>
    );
}