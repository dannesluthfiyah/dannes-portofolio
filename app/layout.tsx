import type { Metadata } from "next";
// import { Poppins, Inter_Tight } from "next/font/google";
import "./globals.css";
import AppShell from "./components/AppShell";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["500", "600"], // medium & semibold
//   variable: "--font-poppins",
// });

// const interTight = Inter_Tight({
//   subsets: ["latin"],
//   weight: ["500"], // medium
//   variable: "--font-inter-tight",
// });

export const metadata: Metadata = {
  title: "Dannes Portfolio",
  description: "Portfolio website built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#F6F9FE]">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
