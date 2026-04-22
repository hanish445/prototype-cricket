// frontend/src/pages/roster.tsx
import Head from 'next/head';
import { players } from '@/data/mockData';
import { User, Activity, Target, Shield } from 'lucide-react';

export default function Roster() {
    // A helper function to assign different colors based on the player's role
    const getRoleBadgeColor = (role: string) => {
        switch (role) {
            case 'Batter': return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'Bowler': return 'bg-red-100 text-red-800 border-red-200';
            case 'All-rounder': return 'bg-purple-100 text-purple-800 border-purple-200';
            case 'Wicket-keeper': return 'bg-amber-100 text-amber-800 border-amber-200';
            default: return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    return (
        <>
            <Head>
                <title>Cricket Club | Roster</title>
            </Head>

            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">First XI Squad</h1>
                    <p className="text-lg text-slate-600">Meet the players defending our home ground this season.</p>
                </div>

                {/* Player Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {players.map((player) => (
                        <div key={player.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">

                            {/* Card Header (Avatar & Name) */}
                            <div className="bg-slate-50 p-6 flex flex-col items-center border-b border-gray-100">
                                <div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center mb-4 text-slate-400">
                                    <User size={40} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 text-center">{player.name}</h3>
                                <span className={`mt-2 px-3 py-1 text-xs font-semibold rounded-full border ${getRoleBadgeColor(player.role)}`}>
                  {player.role}
                </span>
                            </div>

                            {/* Card Body (Stats) */}
                            <div className="p-6">
                                <ul className="space-y-3 text-sm text-slate-600">
                                    <li className="flex items-center gap-2">
                                        <Activity className="w-4 h-4 text-emerald-500" />
                                        <strong>Matches:</strong> {player.stats.matches}
                                    </li>

                                    {/* Conditionally render stats based on role */}
                                    {player.stats.runs && (
                                        <li className="flex items-center gap-2">
                                            <Target className="w-4 h-4 text-blue-500" />
                                            <strong>Average:</strong> {player.stats.average}
                                        </li>
                                    )}

                                    {player.stats.wickets && (
                                        <li className="flex items-center gap-2">
                                            <Shield className="w-4 h-4 text-red-500" />
                                            <strong>Wickets:</strong> {player.stats.wickets}
                                        </li>
                                    )}
                                </ul>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}