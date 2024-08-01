import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#2a2a2a" />
        <meta
          name="description"
          content="FastChat: Real-time, scalable messaging powered by WebSockets and Redis. Connect instantly and scale effortlessly."
        />
        <meta name="keywords" content="chat, real-time, WebSockets, Redis, scalable, messaging" />
        <meta name="author" content="Mutasim" />
        <meta property="og:title" content="FastChat - Real-time Scalable Messaging" />
        <meta property="og:description" content="Experience instant, scalable messaging with FastChat. Powered by WebSockets and Redis." />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
