import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col justify-center items-center">
        <Link href="/">Linear Regression Workshop</Link>
        <Link href="/parcels">ML Bytes</Link>

        <Link href="/parceladder">Upcoming Events</Link>

        <Link href="/about">Team</Link>
      </div>
    </main>
  );
}
