import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import TopNav from "../../components/Topnav";
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
      <body className={inter.className}>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
