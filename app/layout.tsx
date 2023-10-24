import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import TopNav from "@/components/Topnav";
import cn from "classnames";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leap",
  description: "AI CLUB OF PLAKSHA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-main_dark text-main_text")}>
        <TopNav />
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
          {children}
        </div>
      </body>
    </html>
  );
}
