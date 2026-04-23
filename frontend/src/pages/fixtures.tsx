import Head from 'next/head';
import { Calendar, MapPin } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

export default function Fixtures() {
    // Mock data for upcoming matches
    const matches = [
        { id: '01', date: 'MAY 12, 2026', time: '14:00', opponent: 'THE INVINCIBLES', venue: 'HOME GROUND', type: 'LEAGUE MATCH' },
        { id: '02', date: 'MAY 19, 2026', time: '10:00', opponent: 'BOCHUM BLASTERS', venue: 'AWAY (BOCHUM OVAL)', type: 'LEAGUE MATCH' },
        { id: '03', date: 'MAY 26, 2026', time: '15:30', opponent: 'ESSEN EAGLES', venue: 'HOME GROUND', type: 'T20 CUP' },
        { id: '04', date: 'JUN 02, 2026', time: '13:00', opponent: 'COLOGNE KINGS', venue: 'AWAY (RHEIN PARK)', type: 'LEAGUE MATCH' },
    ];

    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const item: Variants = {
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } }
    };

    return (
        <>
            <Head>
                <title>DORTMUND CXI | MATCH CENTER</title>
            </Head>

            <div className="bg-black min-h-screen py-16 px-4 sm:px-6 lg:px-8 border-t border-zinc-900">
                <div className="max-w-5xl mx-auto">

                    {/* Page Header */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-16 border-l-8 border-cyan-500 pl-6"
                    >
                        <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-2 tracking-tighter uppercase">
                            Match <span className="text-cyan-400">Center</span>
                        </h1>
                        <p className="text-lg text-zinc-500 max-w-2xl uppercase tracking-wide">
                            Official fixture list for the 2026 season.
                        </p>
                    </motion.div>

                    {/* Fixtures List */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="space-y-4"
                    >
                        {matches.map((match) => (
                            <motion.div
                                key={match.id}
                                variants={item}
                                className="bg-zinc-950 border-2 border-zinc-800 hover:border-cyan-500 transition-all duration-200 group flex flex-col md:flex-row items-start md:items-center relative"
                            >

                                {/* Date Block */}
                                <div className="w-full md:w-48 bg-zinc-900/50 p-6 md:p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-zinc-800 group-hover:bg-cyan-500/5 transition-colors">
                                    <h3 className="font-heading text-3xl text-white tracking-wider leading-none mb-2">{match.date}</h3>
                                    <div className="flex items-center gap-2 text-cyan-400 font-bold tracking-widest text-sm">
                                        <Calendar className="w-4 h-4" /> {match.time}
                                    </div>
                                </div>

                                {/* Match Details */}
                                <div className="p-6 md:p-8 flex-grow flex flex-col justify-center">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-zinc-500 font-bold text-xs uppercase tracking-widest">{match.type}</span>
                                    </div>
                                    <h2 className="font-heading text-3xl md:text-4xl text-white uppercase tracking-wide mb-4">
                                        VS. {match.opponent}
                                    </h2>
                                    <div className="flex items-center gap-2 text-zinc-400 font-bold tracking-widest text-sm uppercase">
                                        <MapPin className="w-4 h-4" /> {match.venue}
                                    </div>
                                </div>

                                {/* Status Badge */}
                                <div className="absolute top-4 right-4 md:static md:pr-8">
                   <span className="inline-block px-3 py-1 bg-zinc-900 text-zinc-500 text-xs font-bold uppercase tracking-widest border border-zinc-800 group-hover:border-cyan-500/50 group-hover:text-cyan-400 transition-colors">
                    UPCOMING
                  </span>
                                </div>

                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </>
    );
}