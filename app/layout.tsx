import type { Metadata } from "next";
import {Inter,Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
});


export const metadata: Metadata = {
  title: "Développeur Web Full Stack | Symfony, React & PHP",
  description: "Développeur web full stack spécialisé en Symfony, React et PHP. Expérience en formation, développement d’applications web et projets e-commerce en freelance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-base-100">{children}</body>
    </html>
  );
}
