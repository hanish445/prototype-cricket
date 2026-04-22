import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Activity } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'HOME', href: '/' },
        { name: 'FIXTURES', href: '/fixtures' },
        { name: 'SQUAD', href: '/roster' },
        { name: 'CONTACT', href: '/contact' },
    ];

    return (
        <nav className="bg-black text-white border-b border-zinc-900 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Logo Section */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-3 group">
                            <Activity className="h-8 w-8 text-cyan-500 group-hover:text-cyan-400 transition-colors" />
                            <span className="font-heading font-bold text-3xl tracking-tighter uppercase text-white group-hover:text-cyan-400 transition-colors">
                DORTMUND <span className="text-zinc-600">Cricket XI</span>
              </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-zinc-400 hover:text-cyan-400 uppercase tracking-widest text-sm font-bold transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 text-zinc-500 hover:text-cyan-400 focus:outline-none transition-colors"
                        >
                            {isOpen ? <X className="block h-8 w-8" /> : <Menu className="block h-8 w-8" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-zinc-950 border-b border-zinc-900">
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-zinc-400 hover:text-cyan-400 hover:bg-zinc-900 block px-4 py-4 text-sm font-bold uppercase tracking-widest transition-colors border-b border-zinc-900/50"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}