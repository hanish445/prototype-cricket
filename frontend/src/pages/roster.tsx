import Head from 'next/head';
import { players } from '@/data/mockData';
import { User, Crosshair, Target, Shield, Activity, Trophy } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

export default function Roster() {
    const getRoleBadgeColor = (role: string) => {
        switch (role) {
            case 'Batter': return 'bg-white text-black';
            case 'Bowler': return 'bg-red-600 text-white';
            case 'All-rounder': return 'bg-yellow-500 text-black';
            case 'Wicket-keeper': return 'bg-zinc-700 text-white';
            default: return 'bg-zinc-800 text-white';
        }
    };

    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
    };

    return (
        <>
            <Head>
                <title>DORTMUND CXI | SQUAD</title>
            </Head>

            <div className="bg-black min-h-screen py-16 px-4 sm:px-6 lg:px-8 border-t border-zinc-900">
                <div className="max-w-7xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-16 border-l-8 border-yellow-500 pl-6"
                    >
                        <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-2 tracking-tighter uppercase">2026 <span className="text-yellow-400">Squad</span></h1>
                        <p className="text-lg text-zinc-500 max-w-2xl uppercase tracking-wide">Finalised Squad for 2026 season</p>
                    </motion.div>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    >
                        {players.map((player: any) => (
                            <motion.div
                                key={player.id}
                                variants={item}
                                className="bg-zinc-950 border-2 border-zinc-800 hover:border-yellow-500 transition-colors duration-200 group relative overflow-hidden flex flex-col"
                            >

                                {/* ID Number */}
                                <div className="absolute top-4 left-4 text-zinc-700 font-heading text-3xl opacity-50 z-0 group-hover:text-yellow-900 transition-colors">
                                    {String(player.id).padStart(2, '0')}
                                </div>

                                {/* Header Profile Section */}
                                <div className="p-8 pb-6 flex flex-col items-center border-b border-zinc-800 relative z-10 bg-zinc-900/50 group-hover:bg-zinc-900 transition-colors">
                                    <div className="w-20 h-20 bg-zinc-950 border-2 border-zinc-700 flex items-center justify-center mb-6 text-zinc-500 group-hover:text-yellow-400 group-hover:border-yellow-500 transition-colors">
                                        <User size={32} />
                                    </div>
                                    <h3 className="font-heading text-2xl text-white text-center uppercase tracking-wide leading-none">{player.name}</h3>

                                    <span className={`mt-4 px-3 py-1 text-xs font-bold uppercase tracking-widest ${getRoleBadgeColor(player.role)}`}>
                                        {player.role}
                                    </span>

                                    {/* Added Batting/Bowling Styles as Sub-data */}
                                    <div className="mt-4 text-center flex flex-col gap-1">
                                        {player.battingStyle && <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{player.battingStyle}</span>}
                                        {player.bowlingStyle && <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{player.bowlingStyle}</span>}
                                    </div>
                                </div>

                                {/* Detailed Stats Section */}
                                <div className="p-6 flex-grow flex flex-col justify-end">
                                    <ul className="space-y-0 text-sm text-zinc-400 uppercase tracking-widest font-bold">

                                        {player.stats.matches !== undefined && (
                                            <li className="flex items-center justify-between py-2 border-b border-zinc-800/50">
                                                <span className="flex items-center gap-3"><Crosshair className="w-4 h-4 text-zinc-600 group-hover:text-yellow-500/50" /> MATCHES</span>
                                                <span className="text-white font-heading text-xl">{player.stats.matches}</span>
                                            </li>
                                        )}

                                        {player.stats.runs !== undefined && (
                                            <li className="flex items-center justify-between py-2 border-b border-zinc-800/50">
                                                <span className="flex items-center gap-3"><Activity className="w-4 h-4 text-zinc-600 group-hover:text-yellow-500/50" /> RUNS</span>
                                                <span className="text-white font-heading text-xl">{player.stats.runs}</span>
                                            </li>
                                        )}

                                        {player.stats.highScore !== undefined && (
                                            <li className="flex items-center justify-between py-2 border-b border-zinc-800/50">
                                                <span className="flex items-center gap-3"><Trophy className="w-4 h-4 text-zinc-600 group-hover:text-yellow-500/50" /> HIGH SCORE</span>
                                                <span className="text-white font-heading text-xl">{player.stats.highScore}</span>
                                            </li>
                                        )}

                                        {player.stats.average !== undefined && (
                                            <li className="flex items-center justify-between py-2 border-b border-zinc-800/50">
                                                <span className="flex items-center gap-3"><Target className="w-4 h-4 text-zinc-600 group-hover:text-yellow-500/50" /> AVERAGE</span>
                                                <span className="text-white font-heading text-xl">{player.stats.average}</span>
                                            </li>
                                        )}

                                        {player.stats.wickets !== undefined && (
                                            <li className="flex items-center justify-between py-2 border-b border-zinc-800/50">
                                                <span className="flex items-center gap-3"><Shield className="w-4 h-4 text-zinc-600 group-hover:text-yellow-500/50" /> WICKETS</span>
                                                <span className="text-white font-heading text-xl">{player.stats.wickets}</span>
                                            </li>
                                        )}

                                        {player.stats.bestBowling !== undefined && (
                                            <li className="flex items-center justify-between py-2 border-b border-zinc-800/50">
                                                <span className="flex items-center gap-3"><Trophy className="w-4 h-4 text-zinc-600 group-hover:text-yellow-500/50" /> BEST BOWL</span>
                                                <span className="text-white font-heading text-xl">{player.stats.bestBowling}</span>
                                            </li>
                                        )}

                                        {player.stats.economy !== undefined && (
                                            <li className="flex items-center justify-between py-2 border-b border-zinc-800/50">
                                                <span className="flex items-center gap-3"><Activity className="w-4 h-4 text-zinc-600 group-hover:text-yellow-500/50" /> ECONOMY</span>
                                                <span className="text-white font-heading text-xl">{player.stats.economy}</span>
                                            </li>
                                        )}

                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </>
    );
}