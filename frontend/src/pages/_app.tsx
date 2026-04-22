import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { Inter, Tourney } from 'next/font/google';

// The clean font for body text
const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

// The Tourney font for massive, sporty headings!
const tourney = Tourney({
    subsets: ['latin'],
    variable: '--font-tourney',
    // Tourney looks best when it's thick and aggressive
    weight: ['700', '900'],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={`${inter.variable} ${tourney.variable} font-sans`}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </main>
    );
}