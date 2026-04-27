import Head from 'next/head';
import { motion } from 'framer-motion';

export default function Home() {
  return (
      <>
        <Head>
          <title>DORTMUND CXI</title>
        </Head>

        <section className="relative bg-black text-white py-32 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center overflow-hidden border-b-[12px] border-yellow-500">
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
              <div className="lg:col-span-5 flex flex-col justify-center border-l-8 border-yellow-500 pl-8">
                <h2 className="font-heading text-5xl md:text-6xl text-white tracking-tighter uppercase leading-none mb-6">
                  THE SPIRIT OF <br />
                  <span className="text-zinc-600">CRICKET IN</span> <br />
                  <span className="text-yellow-400">THE HEART OF</span> <br />
                  DORTMUND
                </h2>
              </div>

              {/* Right Column: The Conviction / Copy */}
              <div className="lg:col-span-7 flex flex-col justify-center space-y-8 text-lg">

                <div className="bg-black border border-zinc-800 p-8 hover:border-zinc-700 transition-colors">
                  <p className="text-zinc-300 leading-relaxed font-light tracking-wide">
                    <strong className="text-white font-bold tracking-widest uppercase text-sm mr-2">OUR STORY.</strong>
                    Dortmund Cricket XI was born out of a pure love for the game. What started as friendly Sunday matches among passionate expats and locals quickly blossomed into a dedicated community. We play to celebrate the rich traditions of cricket, foster lifelong friendships, and bring a slice of home to the pitches of Germany.
                  </p>
                </div>

                <div className="bg-black border border-zinc-800 p-8 border-l-4 border-l-yellow-500 shadow-[0_0_30px_rgba(234,179,8,0.05)]">
                  <p className="text-zinc-300 leading-relaxed font-light tracking-wide">
                    <strong className="text-yellow-400 font-bold tracking-widest uppercase text-sm mr-2">OUR VISION.</strong>
                    Moving forward, we aim to elevate local cricket by creating an inclusive, welcoming environment for players of all skill levels. Whether you are an experienced cricketer looking for competitive matches or a newcomer eager to learn the gentleman's game, our club is focused on nurturing talent, sportsmanship, and the joy of playing together.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>
      </>
  );
}