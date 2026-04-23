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
            <footer className="bg-black border-t border-zinc-900 py-8 px-4 text-center">
                <p className="text-zinc-600 font-bold uppercase tracking-widest text-[10px]">
                    © {new Date().getFullYear()} DORTMUND CRICKET XI. ALL RIGHTS RESERVED.
                </p>
            </footer>
        </div>
    );
}