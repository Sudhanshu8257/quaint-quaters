import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quaint Quarters",
  description: "Immerse yourself in a world of wisdom and inspiration with Quaint Quarters. Our app is your gateway to an expansive collection of quotes, proverbs, and dialogues curated to uplift, motivate, and enlighten",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-full min-h-screen p-4 flex flex-col gap-3`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
