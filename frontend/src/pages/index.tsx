import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, Calendar, Users, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
      <>
        <Head>
          <title>Dortmund CC | Home</title>
        </Head>

        {/* Hero Section: Deep Slate & Emerald */}
        <section className="relative bg-slate-900 text-white py-32 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center overflow-hidden">
          {/* Subtle Pitch Green Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-emerald-600/10 blur-[120px] rounded-full pointer-events-none"></div>

          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 flex flex-col items-center max-w-4xl"
          >
            {/* Using the new Oswald font for the main title */}
            <h1 className="font-heading text-6xl md:text-8xl font-bold tracking-tight mb-6 uppercase">
              Welcome to <br />
              <span className="text-emerald-400">Dortmund CC</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-12 font-light leading-relaxed">
              Step onto the pitch. Whether you are a seasoned all-rounder, a hostile fast bowler, or a passionate supporter, we are building a legacy that respects the game.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/roster" passHref>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-10 py-4 rounded-full font-bold tracking-wide transition-colors flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                >
                  <Users className="w-5 h-5" />
                  MEET THE SQUAD
                </motion.button>
              </Link>
              <Link href="/fixtures" passHref>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-slate-800/50 hover:bg-slate-800 border border-slate-600 backdrop-blur-md text-white px-10 py-4 rounded-full font-bold tracking-wide transition-all flex items-center justify-center gap-3"
                >
                  <Calendar className="w-5 h-5" />
                  MATCH CENTER
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Quick Info Cards */}
        <section className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 relative -mt-16 z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {[
              { icon: Calendar, title: "NEXT FIXTURE", desc: "Saturday, 2:00 PM vs. The Invincibles", link: "/fixtures", linkText: "Match Center" },
              { icon: Users, title: "JOIN THE SQUAD", desc: "We are currently scouting fast bowlers and top-order batters for the new season.", link: "/contact", linkText: "Register Interest" },
              { icon: TrendingUp, title: "PLAYER STATS", desc: "Track batting averages, strike rates, and bowling economies.", link: "/roster", linkText: "View Leaderboards" }
            ].map((card, index) => (
                <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center group"
                >
                  <div className="bg-slate-50 p-5 rounded-full mb-6 group-hover:bg-emerald-50 transition-colors duration-300">
                    <card.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="font-heading text-2xl mb-3 text-slate-900 tracking-wide">{card.title}</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed">{card.desc}</p>
                  <Link href={card.link} className="text-emerald-600 font-bold uppercase tracking-wider text-sm hover:text-emerald-700 flex items-center gap-2 mt-auto">
                    {card.linkText} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
            ))}

          </div>
        </section>
      </>
  );
}