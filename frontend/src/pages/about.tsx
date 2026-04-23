import Head from 'next/head';
import { motion, Variants } from 'framer-motion';
import { Target, Users, ShieldCheck, Zap, Globe, Scale } from 'lucide-react';

export default function About() {
    const container: Variants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    const pillars = [
        { title: "EQUALITY", desc: "Equal voting rights and decision-making power for every committed member.", icon: Scale },
        { title: "TRANSPARENCY", desc: "Quarterly financial reporting and open-book management at the heart of the club.", icon: ShieldCheck },
        { title: "ACTIVITY", desc: "Regular weekly training sessions and internal match participation for development.", icon: Zap },
        { title: "COMMUNITY", desc: "Strengthening friendship and cultural connections through the spirit of cricket.", icon: Globe },
    ];

    return (
        <>
            <Head>
                <title>DORTMUND CXI | ABOUT</title>
            </Head>

            <div className="bg-black min-h-screen py-16 px-4 sm:px-6 lg:px-8 border-t border-zinc-900">
                <div className="max-w-7xl mx-auto">

                    {/* Header Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-20 border-l-8 border-cyan-500 pl-6"
                    >
                        <h1 className="font-heading text-5xl md:text-8xl font-bold text-white uppercase tracking-tighter leading-none">
                            Cricket <br /> With <span className="text-cyan-400">Purpose</span>
                        </h1>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
                        {/* The Founding Vision */}
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
                            className="lg:col-span-7 space-y-8"
                        >
                            <div className="space-y-6">
                                <h2 className="font-heading text-3xl text-white uppercase tracking-widest">Foundation Alpha</h2>
                                <p className="text-zinc-400 text-xl leading-relaxed font-light">
                                    Dortmund Cricket XI was founded to promote cricket as a premier sport in Germany.
                                    We welcome people from all backgrounds who want to play, learn, and grow together,
                                    fostering a space where community and cultural connection thrive on and off the pitch.
                                </p>
                            </div>

                            <div className="p-8 bg-zinc-900/30 border-l-4 border-cyan-500 border-y border-r border-zinc-800">
                                <div className="flex items-center gap-4 mb-4">
                                    <Target className="text-cyan-400 w-8 h-8" />
                                    <h3 className="font-heading text-2xl text-white uppercase">League Ambition</h3>
                                </div>
                                <p className="text-zinc-500 uppercase tracking-wider leading-relaxed">
                                    Our long-term directive is absolute: To compete and excel in regional and national
                                    cricket leagues across Germany, establishing Dortmund as a hub for elite cricket talent.
                                </p>
                            </div>
                        </motion.div>

                        {/* Club Highlights Sidebar */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
                            className="lg:col-span-5 bg-cyan-500/5 border-2 border-cyan-500/20 p-8 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <ShieldCheck size={120} className="text-cyan-500" />
                            </div>
                            <h3 className="font-heading text-3xl text-white uppercase mb-8 relative z-10">Club Highlights</h3>
                            <ul className="space-y-6 relative z-10">
                                {[
                                    "Equal voting rights for all members",
                                    "Quarterly financial reporting",
                                    "Weekly cricket activity",
                                    "Transparent player selection committee",
                                    "Focus on league participation"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 text-zinc-300 font-bold uppercase tracking-widest text-xs">
                                        <span className="text-cyan-500 mt-1"></span> {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* The Four Pillars Grid */}
                    <motion.div
                        variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {pillars.map((pillar, idx) => (
                            <motion.div
                                key={idx} variants={item}
                                className="bg-zinc-950 border border-zinc-800 p-8 group hover:border-cyan-500 transition-all duration-300"
                            >
                                <pillar.icon className="text-zinc-700 group-hover:text-cyan-400 w-10 h-10 mb-6 transition-colors" />
                                <h4 className="font-heading text-2xl text-white mb-4 uppercase tracking-widest">{pillar.title}</h4>
                                <p className="text-zinc-500 text-sm leading-relaxed uppercase tracking-wide">
                                    {pillar.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Final Call to Action Tag */}
                    <motion.div
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                        className="mt-24 text-center border-t border-zinc-900 pt-12"
                    >
                        <p className="text-zinc-500 font-bold tracking-[0.5em] text-xs uppercase">
                            Join the evolution. Open to new players
                        </p>
                    </motion.div>
                </div>
            </div>
        </>
    );
}