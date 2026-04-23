import Head from 'next/head';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

export default function Impressum() {
    return (
        <>
            <Head>
                <title>DORTMUND CXI | IMPRESSUM</title>
            </Head>

            <div className="bg-black min-h-screen py-16 px-4 sm:px-6 lg:px-8 border-t border-zinc-900">
                <div className="max-w-4xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-16 border-l-8 border-cyan-500 pl-6"
                    >
                        <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-2 tracking-tighter uppercase">
                            Legal <span className="text-cyan-400">Notice</span>
                        </h1>
                        <p className="text-lg text-zinc-500 max-w-2xl uppercase tracking-wide">
                            Impressum according to § 5 TMG
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-12 text-zinc-400"
                    >
                        {/* 1. Entity Information */}
                        <section className="bg-zinc-950 border border-zinc-800 p-8">
                            <h2 className="font-heading text-2xl text-white uppercase tracking-wide mb-6 border-b border-zinc-800 pb-4">
                                Provider Information
                            </h2>
                            <div className="space-y-2 uppercase tracking-widest text-xs leading-relaxed font-bold">
                                <p className="text-cyan-400 text-lg mb-4">Dortmund Cricket XI</p>
                                <p>[Street Address of Club / President]</p>
                                <p>[Zip Code] Dortmund</p>
                                <p>Germany</p>
                            </div>
                        </section>

                        {/* 2. Representation & Contact */}
                        <section className="bg-zinc-950 border border-zinc-800 p-8">
                            <h2 className="font-heading text-2xl text-white uppercase tracking-wide mb-6 border-b border-zinc-800 pb-4">
                                Representation & Contact
                            </h2>
                            <div className="space-y-6 uppercase tracking-widest text-xs font-bold">
                                <div>
                                    <p className="text-zinc-600 mb-1">Represented By:</p>
                                    <p className="text-white">Shekar Madasu (President)</p>
                                    <p className="text-white">Aman Batra (Vice President)</p>
                                </div>
                                <div>
                                    <p className="text-zinc-600 mb-1">Direct Contact:</p>
                                    <span>Phone:</span>
                                    <p>+49 162 6430936</p>
                                    <p>+49 176 37006828</p>
                                    <p>----------------------------------------------------</p>
                                    <span>Email:</span>
                                    <p className="lowercase">shekar3m@gmail.com</p>
                                    <p className="lowercase">amam.pmp@gmail.com</p>
                                </div>
                            </div>
                        </section>

                        {/* 3. Register Entry (Crucial for German e.V.) */}
                        <section className="bg-zinc-950 border border-zinc-800 p-8">
                            <h2 className="font-heading text-2xl text-white uppercase tracking-wide mb-6 border-b border-zinc-800 pb-4">
                                Register Entry
                            </h2>
                            <div className="space-y-2 uppercase tracking-widest text-xs font-bold">
                                <p>Entry in the Vereinsregister (Register of Associations)</p>
                                <p>Register Court: Amtsgericht Dortmund</p>
                                <p>Register Number: VR [Number Pending]</p>
                            </div>
                        </section>

                        <section className="mt-16 pt-8 border-t-2 border-zinc-900 flex flex-col items-center text-center">
                            <Code2 className="w-8 h-8 text-cyan-500 mb-4" />
                            <h3 className="text-zinc-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-2">
                                WEBSITE MANAGEMENT
                            </h3>
                            <p className="text-white font-heading text-2xl uppercase tracking-widest">
                                Developed by <span className="text-cyan-400">Hanish Madasu</span>
                            </p>
                        </section>

                    </motion.div>
                </div>
            </div>
        </>
    );
}