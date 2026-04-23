import Head from 'next/head';
import { motion, Variants } from 'framer-motion';
import { Send, Info, CheckCircle, CreditCard } from 'lucide-react';

export default function JoinUs() {
    const container: Variants = {
        hidden: {opacity: 0},
        show: {opacity: 1, transition: {staggerChildren: 0.1}},
    };
    const item: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
    };
    const fees = [
        { type: "FULL MEMBER", price: "€25", interval: "One time", specs: "Full match access + training" },
        { type: "STUDENT / YOUTH", price: "€15", interval: "One time", specs: "Valid ID required" },
    ];

    return (
        <>
            <Head>
                <title>DORTMUND CXI | ENROLLMENT</title>
            </Head>

            <div className="bg-black min-h-screen py-16 px-4 sm:px-6 lg:px-8 border-t border-zinc-900">
                <div className="max-w-6xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-12 border-l-8 border-cyan-500 pl-6"
                    >
                        <h1 className="font-heading text-5xl md:text-7xl font-bold text-white uppercase tracking-tighter">
                            Enrollment <span className="text-cyan-400">Page</span>
                        </h1>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                        <motion.div
                            variants={container} initial="hidden" animate="show"
                            className="lg:col-span-5 space-y-6"
                        >
                            <div className="bg-zinc-900/50 border border-zinc-800 p-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <CreditCard className="text-cyan-500 w-6 h-6" />
                                    <h3 className="font-heading text-2xl text-white uppercase tracking-wide">FEE STRUCTURE</h3>
                                </div>

                                <div className="space-y-4">
                                    {fees.map((fee, idx) => (
                                        <div key={idx} className="border-b border-zinc-800 pb-4 last:border-0">
                                            <div className="flex justify-between items-end mb-1">
                                                <span className="text-white font-bold tracking-widest text-sm">{fee.type}</span>
                                                <span className="text-cyan-400 font-heading text-2xl">{fee.price}</span>
                                            </div>
                                            <p className="text-zinc-500 text-[10px] uppercase tracking-widest">{fee.specs}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 p-4 bg-cyan-500/5 border border-cyan-500/20 flex gap-4 items-start">
                                    <Info className="text-cyan-500 w-8 h-8 shrink-0" />
                                    <p className="text-zinc-400 text-xs leading-relaxed uppercase tracking-wider">
                                        All applications are reviewed by the board. Payment is only required once your membership is authorized.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                            className="lg:col-span-7 bg-zinc-950 border-2 border-zinc-800 p-8 md:p-12 relative"
                        >
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Full Name</label>
                                        <input type="text" placeholder="ENTRY NAME" className="w-full bg-black border border-zinc-800 p-4 text-white focus:border-cyan-500 outline-none transition-colors font-sans" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Email Address</label>
                                        <input type="email" placeholder="EMAIL@DOMAIN.COM" className="w-full bg-black border border-zinc-800 p-4 text-white focus:border-cyan-500 outline-none transition-colors font-sans" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Primary Role</label>
                                        <select className="w-full bg-black border border-zinc-800 p-4 text-white focus:border-cyan-500 outline-none transition-colors font-sans appearance-none">
                                            <option>BATTER</option>
                                            <option>BOWLER</option>
                                            <option>ALL-ROUNDER</option>
                                            <option>WICKET-KEEPER</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Experience Level</label>
                                        <select className="w-full bg-black border border-zinc-800 p-4 text-white focus:border-cyan-500 outline-none transition-colors font-sans appearance-none">
                                            <option>AMATEUR</option>
                                            <option>INTERMEDIATE</option>
                                            <option>ADVANCED / PRO</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Message / Notes</label>
                                    <textarea rows={4} placeholder="ANY ADDITIONAL INFORMATION..." className="w-full bg-black border border-zinc-800 p-4 text-white focus:border-cyan-500 outline-none transition-colors font-sans resize-none"></textarea>
                                </div>

                                <button type="button" className="w-full bg-cyan-500 text-black py-5 font-heading text-2xl uppercase tracking-wider flex items-center justify-center gap-3 hover:bg-cyan-400 transition-all shadow-[0_0_30px_rgba(6,182,212,0.1)] group">
                                    SUBMIT FORM <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
}