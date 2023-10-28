import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <Link href="https://colab.research.google.com/drive/1i44Y2rmeQT0R9FAJy2jORyD2WEA7b1A5?usp=sharing">
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
