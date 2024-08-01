import type { AppProps } from "next/app";
import { Poppins } from 'next/font/google';
import Head from "next/head";
import "@/styles/globals.css";

const poppins = Poppins({
  weight: ['400', '500', '700'],
  style: ['italic', 'normal'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>FastChat - Real-time Scalable Messaging</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={poppins.className}>
        <Component {...pageProps} />;
      </main>
    </>
  )
}
