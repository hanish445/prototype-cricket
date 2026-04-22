import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { Oswald, Inter } from 'next/font/google';

// The athletic, impactful font for headings
const oswald = Oswald({
    subsets: ['latin'],
    variable: '--font-oswald',
});

// The ultra-clean font for paragraphs and UI
const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        // We apply Inter as the default, and make Oswald available as a variable
        <main className={`${inter.variable} ${oswald.variable} font-sans`}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </main>
    );
}