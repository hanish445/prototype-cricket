import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, Calendar, Users, TrendingUp } from 'lucide-react';

export default function Home() {
  return (
      <>
        <Head>
          <title>Dortmund CC | Home</title>
          <meta name="description" content="Welcome to Dortmund CC" />
        </Head>

        {/* Hero Section */}
        <section className="bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Welcome to the <span className="text-emerald-400">Dortmund CC</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10">
            Join us on the pitch. Whether you are a seasoned all-rounder or a passionate fan, we are building a community that loves the game.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
                href="/roster"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <Users className="w-5 h-5" />
              Meet the Team
            </Link>
            <Link
                href="/fixtures"
                className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white px-8 py-3 rounded-full font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              View Fixtures
            </Link>
          </div>
        </section>

        {/* Quick Info Cards */}
        <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1: Next Match */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="bg-emerald-100 p-3 rounded-full mb-4">
                <Calendar className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Next Match</h3>
              <p className="text-slate-600 mb-4">Saturday, 2:00 PM vs. The Invincibles</p>
              <Link href="/fixtures" className="text-emerald-600 font-semibold hover:text-emerald-700 flex items-center gap-1 mt-auto">
                All Fixtures <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 2: Recruitment */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Join the Squad</h3>
              <p className="text-slate-600 mb-4">We are currently recruiting fast bowlers and top-order batters for the new season.</p>
              <Link href="/contact" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-1 mt-auto">
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 3: Stats */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="bg-purple-100 p-3 rounded-full mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Player Stats</h3>
              <p className="text-slate-600 mb-4">Track batting averages, strike rates, and bowling economies.</p>
              <Link href="/roster" className="text-purple-600 font-semibold hover:text-purple-700 flex items-center gap-1 mt-auto">
                View Stats <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </section>
      </>
  );
}