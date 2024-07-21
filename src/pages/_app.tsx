import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.className}`}>
         <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            <title>Social Media</title>
            <link
              rel="icon"
              href='/Logo.png'
              type="image/x-icon"
            />
          </Head>
      <Component {...pageProps} />
    </div>
  );
}
