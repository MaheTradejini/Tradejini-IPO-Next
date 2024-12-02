import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import SmoothScroll from "./components/Smoothscroll";
// import { Poppins } from "next/font/google";
import Footer from "./components/footer";
import QRCodeScanner from "./components/QRCodeScan";
// import { IpoProvider } from "./context";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   display: "swap",
// });

// const satoshi = Satoshi({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"], // Adjust weights as needed
//   display: "swap",
// });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Tradejini IPO",
  description: "Tradejini IPO next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-sans">
        <head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <IpoProvider> */}
          <SmoothScroll>
            <Navbar />
            {children}
            <QRCodeScanner/>
            <Footer />
          </SmoothScroll>
        {/* </IpoProvider> */}
      </body>
    </html>
  );
}
