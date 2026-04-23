import Head from 'next/head';
import { motion, Variants } from 'framer-motion';
import { MapPin, Clock, Target, Navigation, Crosshair } from 'lucide-react';

export default function Training() {
    const container: Variants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <>
            <Head>
                <title>DORTMUND CXI | TRAINING</title>
            </Head>

            <div className="bg-black min-h-screen py-16 px-4 sm:px-6 lg:px-8 border-t border-zinc-900">
                <div className="max-w-6xl mx-auto">

                    {/* Header Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-16 border-l-8 border-cyan-500 pl-6"
                    >
                        <h1 className="font-heading text-5xl md:text-7xl font-bold text-white uppercase tracking-tighter leading-none">
                            Training <span className="text-cyan-400">Ground</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                    >
                        {/* The Schedule Module */}
                        <motion.div variants={item} className="bg-zinc-950 border-2 border-zinc-800 p-8 md:p-10 relative group hover:border-cyan-500 transition-colors">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Clock size={100} className="text-cyan-500" />
                            </div>

                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-cyan-500/10 border border-cyan-500/20">
                                    <Clock className="w-8 h-8 text-cyan-400" />
                                </div>
                                <div>
                                    <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs">FREQUENCY</p>
                                    <h2 className="font-heading text-3xl text-white uppercase tracking-wider">Twice Weekly</h2>
                                </div>
                            </div>

                            <div className="space-y-6 relative z-10">
                                <div className="border-b border-zinc-800 pb-4">
                                    <div className="flex justify-between items-end mb-2">
                                        <span className="text-white font-bold tracking-widest text-lg uppercase">Tuesdays & Thursdays</span>
                                        <span className="text-cyan-400 font-heading text-2xl">18:00 - 21:00</span>
                                    </div>
                                    <p className="text-zinc-500 text-xs uppercase tracking-widest">Core drills, open field sessions and physical conditioning</p>
                                </div>

                                <div className="bg-black border border-zinc-800 p-4 flex items-start gap-3">
                                    <Target className="w-5 h-5 text-cyan-500 shrink-0" />
                                    <p className="text-zinc-400 text-[11px] leading-relaxed uppercase tracking-wider">
                                        Arrival required 15 minutes prior to start time for warm-up
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* The Location Module */}
                        <motion.div variants={item} className="bg-zinc-950 border-2 border-zinc-800 p-8 md:p-10 relative group hover:border-cyan-500 transition-colors flex flex-col">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                                <MapPin size={100} className="text-cyan-500" />
                            </div>

                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-cyan-500/10 border border-cyan-500/20">
                                    <Navigation className="w-8 h-8 text-cyan-400" />
                                </div>
                                <div>
                                    <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs">DESIGNATED ZONE</p>
                                    <h2 className="font-heading text-3xl text-white uppercase tracking-wider">Tremoniapark</h2>
                                </div>
                            </div>

                            <div className="flex-grow flex flex-col justify-between relative z-10">
                                <div className="mb-6">
                                    {/* Updated with the exact address */}
                                    <p className="text-white font-bold tracking-widest text-lg uppercase mb-1">Am Tremoniapark 13</p>
                                    <p className="text-cyan-400 font-heading text-xl tracking-wider mb-2">44137 DORTMUND</p>
                                    <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">OPEN FIELD</p>
                                </div>

                                {/* Clickable Cyber Map Linking to Google Maps */}
                                <a
                                    href="https://www.google.com/maps/place/?q=place_id:ChIJJfRugrgZuUcR3YXlqWt4kk4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full h-32 bg-black border border-zinc-800 relative overflow-hidden flex items-center justify-center group/map hover:border-cyan-500 transition-colors cursor-pointer"
                                >
                                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:12px_12px]"></div>
                                    <div className="absolute w-full h-[1px] bg-cyan-500/20 top-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                                    <div className="absolute h-full w-[1px] bg-cyan-500/20 left-1/2 -translate-x-1/2 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>

                                    {/* Icon that scales up slightly on hover to indicate it's clickable */}
                                    <Crosshair className="w-6 h-6 text-cyan-400 absolute z-10 animate-pulse group-hover/map:scale-125 transition-transform" />

                                    {/* Updated with the exact coordinates */}
                                    <span className="absolute bottom-2 right-2 text-zinc-600 font-heading text-xs tracking-widest group-hover/map:text-cyan-500 transition-colors">
                    COORD: 51.5037° N, 7.4369° E
                  </span>

                                    {/* Hover prompt */}
                                    <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover/map:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-black text-cyan-400 px-3 py-1 font-bold text-xs uppercase tracking-widest border border-cyan-500/50 relative z-20">
                      OPEN IN MAPS
                    </span>
                                    </div>
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </>
    );
}