import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-dm-sans',
});
export const metadata: Metadata = {
  title: "CrowdVolt",
  description: "Pratik Khaire",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={clsx(dmSans.className, "antialiased bg-[#ffffff]")}>
        {children}
      </body>
    </html>
  );
}
