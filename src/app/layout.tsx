// src/app/layout.tsx
import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";

import { efcoBrookshire } from "../fonts";

import AppProviders from "@/components/providers/AppProviders";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollTop from "@/components/layout/ScrollTop";
import Preloader from "@/components/layout/Preloader";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Bespoke-Cuisine",
  description: "Bespoke-Cuisine landing website built with Next.js",
  icons: {
    icon: "/assets/img/logo.png",
    apple: "/assets/img/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-bs-theme="dark" suppressHydrationWarning className={efcoBrookshire.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&family=Dead+Saloon&family=Rye&display=swap"
          rel="stylesheet"
        />

        {/* Template CSS from your copied assets */}
        <link rel="stylesheet" href="/assets/css/main.css" />
      </head>
      <body>
        <AppProviders>
          <Header />
          <main className="main">{children}</main>
          <Footer />
          <WhatsAppFloat />
          <ScrollTop />
          <Preloader />
        </AppProviders>
      </body>
    </html>
  );
}
