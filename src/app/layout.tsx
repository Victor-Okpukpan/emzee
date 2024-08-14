import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";

// const inter = Inter({ subsets: ["latin"] });

const polysansTrial = localFont({
  src: [
    {
      path: "../../public/PolySans-trial/Standard/PolySansTrial-Neutral.otf",
      weight: "400",
    },
    {
      path: "../../public/PolySans-trial/Standard/PolySansTrial-Slim.otf",
      weight: "300",
    },
    {
      path: "../../public/PolySans-trial/Standard/PolySansTrial-Median.otf",
      weight: "500",
    },
    {
      path: "../../public/PolySans-trial/Standard/PolySansTrial-Bulky.otf",
      weight: "700",
    },
  ],
});

export const metadata: Metadata = {
  title: "EzeeMedia",
  description: "Driving brands and businesses to the pinnacle of success.",
  keywords: [
    "Ezee media",
    "EzeeMedia",
    "Ezee",
    "Media",
    "quality",
    "branding",
    "PR Agency",
    "PR Services",
  ],
  metadataBase: new URL("https://ezeemedia.io"),
  openGraph: {
    type: "website",
    title: "EzeeMedia",
    description: "Driving brands and businesses to the pinnacle of success.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={polysansTrial.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
