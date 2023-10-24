import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <Link href="/linear_regression_workshop">Linear Regression Workshop</Link>
      <Link href="/ml_bytes">ML Bytes</Link>

      <Link href="/upcoming_events">Upcoming Events</Link>

      <Link href="/team">Team</Link>
    </div>
  );
}
