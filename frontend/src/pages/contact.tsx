import Head from 'next/head';
import { Phone, Mail, Clock } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

export default function Contact() {
    // The club administration directory
    const directory = [
        { id: '01', name: 'Shekar Madasu', role: 'President' },
        { id: '02', name: 'Aman Batra', role: 'Vice President' },
        { id: '03', name: 'Gifty Kurian', role: 'Treasurer' },
        { id: '04', name: 'Mayank Upadhay', role: 'Marketing' },
        { id: '05', name: 'Sachin Kharinar', role: 'Tournament Coordinator' },
        { id: '06', name: 'Dharmaraju Nalliboyana', role: 'Event' },
        { id: '07', name: 'Ubed Sheik', role: 'Ground Management' },
    ];

    // Universal contact details requested for the prototype
    const contactInfo = {
        phone: '+49 123 45678910',
        email: 'abcd-dortmundcxi@gmail.com',
        timings: '6:00 PM - 7:00 PM',
    };

    // ADDED ": Variants" HERE
    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    // ADDED ": Variants" HERE
    const item: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
    };

    return (
        <>
            <Head>
                <title>DORTMUND CC | COMMS</title>
            </Head>

            <div className="bg-black min-h-screen py-16 px-4 sm:px-6 lg:px-8 border-t border-zinc-900">
                <div className="max-w-7xl mx-auto">

                    {/* Page Header */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-16 border-l-8 border-cyan-500 pl-6"
                    >
                        <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-2 tracking-tighter uppercase">
                            Command <span className="text-cyan-400">Center</span>
                        </h1>
                        <p className="text-lg text-zinc-500 max-w-2xl uppercase tracking-wide">
                            Contacts to Dortmund Cricket XI administration.
                        </p>
                    </motion.div>

                    {/* Directory Grid */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    >
                        {directory.map((person) => (
                            <motion.div
                                key={person.id}
                                variants={item}
                                className="bg-zinc-950 border-2 border-zinc-800 hover:border-cyan-500 transition-colors duration-200 group relative flex flex-col"
                            >

                                {/* ID Tag */}
                                <div className="absolute top-0 right-0 bg-zinc-900 text-zinc-500 font-heading text-xl px-3 py-1 border-b-2 border-l-2 border-zinc-800 group-hover:border-cyan-500 group-hover:text-cyan-400 group-hover:bg-cyan-500/10 transition-colors">
                                    {person.id}
                                </div>

                                {/* Card Header (Name & Role) */}
                                <div className="p-6 pt-10 border-b border-zinc-800 bg-zinc-900/30 group-hover:bg-zinc-900 transition-colors">
                                    <div className="flex items-center gap-3 mb-3">
                                        <h3 className="font-heading text-2xl text-white uppercase tracking-wide leading-none">{person.name}</h3>
                                    </div>
                                    <span className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-widest border border-cyan-500/20">
                                        {person.role}
                                    </span>
                                </div>

                                {/* Card Body (Contact Details) */}
                                <div className="p-6 flex-grow flex flex-col justify-end bg-black">
                                    <ul className="space-y-4 text-sm text-zinc-400 uppercase tracking-widest font-bold">
                                        <li className="flex items-center gap-4 group/item hover:text-white transition-colors">
                                            <Phone className="w-5 h-5 text-zinc-600 group-hover/item:text-cyan-400 transition-colors" />
                                            <span className="font-sans">{contactInfo.phone}</span>
                                        </li>

                                        <li className="flex items-center gap-4 group/item hover:text-white transition-colors">
                                            <Mail className="w-5 h-5 text-zinc-600 group-hover/item:text-cyan-400 transition-colors" />
                                            <span className="font-sans lowercase tracking-wider">{contactInfo.email}</span>
                                        </li>

                                        <li className="flex items-center gap-4 group/item hover:text-white transition-colors">
                                            <Clock className="w-5 h-5 text-zinc-600 group-hover/item:text-cyan-400 transition-colors" />
                                            <span className="font-sans">{contactInfo.timings}</span>
                                        </li>
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