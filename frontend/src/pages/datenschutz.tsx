import Head from 'next/head';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export default function Datenschutz() {
    return (
        <>
            <Head>
                <title>DORTMUND CXI | DATENSCHUTZ</title>
            </Head>

            <div className="bg-black min-h-screen py-16 px-4 sm:px-6 lg:px-8 border-t border-zinc-900">
                <div className="max-w-4xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-16 border-l-8 border-yellow-500 pl-6"
                    >
                        <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-2 tracking-tighter uppercase">
                            Privacy <span className="text-yellow-400">Policy</span>
                        </h1>
                        <p className="text-lg text-zinc-500 max-w-2xl uppercase tracking-wide">
                            Datenschutzerklärung (GDPR / DSGVO Compliant)
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8 text-zinc-400 font-sans text-sm leading-relaxed"
                    >
                        {/* Intro / Legal Shield Icon */}
                        <div className="flex items-center gap-4 p-6 bg-yellow-500/5 border border-yellow-500/20 mb-8">
                            <ShieldCheck className="w-10 h-10 text-yellow-500 shrink-0" />
                            <p className="uppercase tracking-wider text-xs font-bold text-zinc-300">
                                Note: This is a provisional privacy policy for the prototype phase. Upon official launch, this text should be reviewed by a legal entity or generated via a certified German DSGVO generator (e.g., eRecht24).
                            </p>
                        </div>

                        {/* Section 1: Data Protection at a Glance */}
                        <section className="bg-zinc-950 border border-zinc-800 p-8 hover:border-zinc-700 transition-colors">
                            <h2 className="font-heading text-2xl text-white uppercase tracking-wide mb-4 border-b border-zinc-800 pb-4">
                                1. Data Protection at a Glance
                            </h2>
                            <h3 className="text-white font-bold mb-2">General Information</h3>
                            <p className="mb-4">
                                The following notes provide a simple overview of what happens to your personal data when you visit this website. Personal data is any data with which you could be personally identified.
                            </p>
                            <h3 className="text-white font-bold mb-2">Data collection on this website</h3>
                            <p>
                                <strong>Who is responsible for the data collection on this website?</strong><br />
                                The data processing on this website is carried out by the website operator. You can find their contact details in the Impressum (Legal Notice) of this website.
                            </p>
                        </section>

                        {/* Section 2: Hosting (Netlify) */}
                        <section className="bg-zinc-950 border border-zinc-800 p-8 hover:border-zinc-700 transition-colors">
                            <h2 className="font-heading text-2xl text-white uppercase tracking-wide mb-4 border-b border-zinc-800 pb-4">
                                2. Hosting & Content Delivery
                            </h2>
                            <h3 className="text-white font-bold mb-2">External Hosting</h3>
                            <p className="mb-4">
                                This website is hosted externally by Netlify. The personal data collected on this website is stored on the servers of the hoster. This may include, but is not limited to, IP addresses, contact requests, meta and communication data, contract data, contact details, names, website access, and other data generated through a website.
                            </p>
                            <p>
                                The external hosting serves the purpose of fulfilling the contract with our potential and existing members (Art. 6(1)(b) GDPR) and in the interest of a secure, fast, and efficient provision of our online services by a professional provider (Art. 6(1)(f) GDPR).
                            </p>
                        </section>

                        {/* Section 3: Contact Forms (Web3Forms) */}
                        <section className="bg-zinc-950 border border-zinc-800 p-8 hover:border-zinc-700 transition-colors">
                            <h2 className="font-heading text-2xl text-white uppercase tracking-wide mb-4 border-b border-zinc-800 pb-4">
                                3. Contact Form & Enrollment
                            </h2>
                            <p className="mb-4">
                                If you send us inquiries via the contact form or enrollment page, your details from the inquiry form, including the contact details you provided there, will be stored by us for the purpose of processing the inquiry and in case of follow-up questions. We do not share this data without your consent.
                            </p>
                            <p>
                                We use the third-party service <strong>Web3Forms</strong> to securely transmit your form data to our club's email inbox. Web3Forms only processes the data necessary to deliver the email and does not use your data for advertising purposes.
                            </p>
                        </section>

                        {/* Section 4: Your Rights */}
                        <section className="bg-zinc-950 border border-zinc-800 p-8 hover:border-zinc-700 transition-colors">
                            <h2 className="font-heading text-2xl text-white uppercase tracking-wide mb-4 border-b border-zinc-800 pb-4">
                                4. Your Rights (DSGVO)
                            </h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>Right to information:</strong> You have the right to receive information about the origin, recipient, and purpose of your stored personal data at any time free of charge.</li>
                                <li><strong>Right to rectification or erasure:</strong> You have the right to request the correction or deletion of this data.</li>
                                <li><strong>Right to withdraw consent:</strong> Many data processing operations are only possible with your express consent. You can revoke this consent at any time.</li>
                                <li><strong>Right to complain:</strong> In the event of violations of the GDPR, data subjects have the right to lodge a complaint with a supervisory authority.</li>
                            </ul>
                        </section>

                    </motion.div>
                </div>
            </div>
        </>
    );
}