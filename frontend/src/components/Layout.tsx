import Navbar from  "./Navbar"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            {/* We can add a Footer here later! */}
            <footer className="bg-slate-900 text-slate-400 text-center py-4 text-sm mt-auto">
                © {new Date().getFullYear()} Cricket Club. All rights reserved.
            </footer>
        </div>
    );
}