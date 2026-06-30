import { Geist, Geist_Mono, DM_Serif_Display, Nunito, Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { LanguageProvider } from "../utils/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
});
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});
const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: "Caffe Wow | Authentic Coffee & Pastries",
    template: "%s | Caffe Wow",
  },
  description: "Experience the best coffee, fresh pastries, and a relaxing atmosphere at Caffe Wow. Discover our menu, gallery, and locations.",
  keywords: ["coffee", "cafe", "pastries", "coffee shop", "wow cafe", "caffe wow"],
  authors: [{ name: "Dexber Teams" }],
  creator: "Dexber Teams",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://caffewow.com",
    title: "Caffe Wow | Authentic Coffee & Pastries",
    description: "Experience the best coffee, fresh pastries, and a relaxing atmosphere at Caffe Wow.",
    siteName: "Caffe Wow",
  },
  twitter: {
    card: "summary_large_image",
    title: "Caffe Wow | Authentic Coffee & Pastries",
    description: "Experience the best coffee, fresh pastries, and a relaxing atmosphere at Caffe Wow.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dmSerif.variable} ${nunito.variable} ${cairo.variable} antialiased`}
      >
        <LanguageProvider>
          {/* nav */}
          <Navbar></Navbar>
          <main>{children}</main>
          {/* footer */}
          <Footer></Footer>
        </LanguageProvider>
      </body>
    </html>
  );
}

