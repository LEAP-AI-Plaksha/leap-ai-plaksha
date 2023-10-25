import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      {/* <Link href="/linear_regression_workshop">Linear Regression Workshop</Link> */}
      <Link href="https://colab.research.google.com/drive/16G5_NW3W9FFkuDjDz1MTT1Iy6ngV_Cds?usp=sharing">
        <Button className="bg-main_blue1 hover:bg-main_blued">
          Download the Notebook
        </Button>
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
