import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <Link href="/linear_regression_workshop" className="underline">
        Linear Regression Workshop
      </Link>
      <Link href="/ml_bytes" className="underline">
        ML Bytes
      </Link>

      <Link href="/upcoming_events" className="underline">
        Upcoming Events
      </Link>

      <Link href="/team" className="underline">
        Team
      </Link>
    </div>
  );
}
