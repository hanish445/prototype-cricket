import Head from 'next/head';
import { motion } from 'framer-motion';

export default function Home() {
  return (
      <>
        <Head>
          <title>DORTMUND CXI</title>
        </Head>

        <section className="relative bg-black text-white py-32 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center overflow-hidden border-b-[12px] border-cyan-500">
          <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 flex flex-col items-center max-w-5xl"
          >
            {/* Subheading tag */}
            <div className="bg-white text-black font-bold tracking-widest text-sm px-3 py-1 mb-6 uppercase flex items-center gap-2">
              <span>EST. 2024</span>
              <div className="w-4 h-4 bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,#000_2px,#000_4px)]"></div>
            </div>

            <img
                src="/images/dortmund-crest.png"
                alt="Dortmund Cricket XI Crest"
                className="w-full max-w-[280px] md:max-w-[450px] object-contain mb-12 rounded-2xl"
            />
          </motion.div>
        </section>
        <section className="bg-zinc-950 py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-900 relative overflow-hidden">
          {/* Subtle background grid pattern for the tech vibe */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

              {/* Left Column: Massive Establishing Text */}
              <div className="lg:col-span-5 flex flex-col justify-center border-l-8 border-cyan-500 pl-8">
                <h2 className="font-heading text-5xl md:text-6xl text-white tracking-tighter uppercase leading-none mb-6">
                  FROM SUNDAY <br />
                  <span className="text-zinc-600">RITUAL TO</span> <br />
                  <span className="text-cyan-400">RELENTLESS</span> <br />
                  PURSUIT
                </h2>
              </div>

              {/* Right Column: The Conviction / Copy */}
              <div className="lg:col-span-7 flex flex-col justify-center space-y-8 text-lg">

                <div className="bg-black border border-zinc-800 p-8 hover:border-zinc-700 transition-colors">
                  <p className="text-zinc-300 leading-relaxed font-light tracking-wide">
                    <strong className="text-white font-bold tracking-widest uppercase text-sm mr-2">PHASE 01: THE ROOTS.</strong>
                    It didn't start in a corporate boardroom or a state-of-the-art academy. Dortmund Cricket XI was born on Sunday mornings. We were a collective of players driven by a shared obsession for the game, playing for fun, pride, and the love of the sport. But as the weekends passed, the competitive drive demanded more than just a casual hit.
                  </p>
                </div>

                <div className="bg-black border border-zinc-800 p-8 border-l-4 border-l-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.05)]">
                  <p className="text-zinc-300 leading-relaxed font-light tracking-wide">
                    <strong className="text-cyan-400 font-bold tracking-widest uppercase text-sm mr-2">PHASE 02: THE DIRECTIVE.</strong>
                    In 2026, we formalized the vision. We evolved from weekend warriors into a disciplined, tactical unit. Our goal is absolute: to elevate the standard of local cricket, foster raw talent, and build a brotherhood that plays a fierce, uncompromising brand of cricket. We aren't just here to participate. We are building a system designed to dominate.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>
      </>
  );
}