import Link from "./Link";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import HomeLink from "./HomeLink";
import { serif } from "./fonts";
import "./global.css";

export const metadata = {
  metadataBase: new URL("https://devblog.briannoriega.com"),
};

const Activity = Symbol.for("react.activity");

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={serif.className}>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTAG_ID || ""} />
      <body className="mx-auto max-w-2xl bg-[--bg] px-5 py-12 text-[--text]">
          <header className="mb-14 flex flex-row place-content-between">
            <HomeLink />
            <span className="relative top-[4px] italic">
              by{" "}
              <Link href="https://www.briannoriega.com" target="_blank">
                <img
                  alt="Brian Noriega"
                  src="/favicon.ico"
                  className="relative -top-1 mx-1 inline h-8 w-8 rounded-full"
                />
              </Link>
            </span>
          </header>
          <main>
            <Activity mode="visible">{children}</Activity>
          </main>
          <Script
            async
            src="https://srv2.briannoriega.com/script.js"
            data-website-id={process.env.NEXT_PUBLIC_SRV2_ID}
            strategy="afterInteractive"
          ></Script>
          <SpeedInsights />
      </body>
    </html>
  );
}
