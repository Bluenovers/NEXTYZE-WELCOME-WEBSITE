import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import "./globals.css";

// Flip to false to take the site live and drop the overlay.
const COMING_SOON: boolean = true;

export const metadata: Metadata = {
  title: "Nextyze | Website Studio",
  description: "Websites for established firms and creators.",
  icons: {
    icon: "/images/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={COMING_SOON ? "is-coming-soon" : undefined}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600&family=Space+Grotesk:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="page" inert={COMING_SOON}>
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
        <img
          src="/images/icon.png"
          alt="Nextyze Icon"
          className="bottom-icon"
        />
        {COMING_SOON ? <ComingSoon /> : null}
      </body>
    </html>
  );
}
