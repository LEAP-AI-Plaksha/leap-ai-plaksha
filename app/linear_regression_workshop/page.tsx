import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <Link href="https://colab.research.google.com/drive/16G5_NW3W9FFkuDjDz1MTT1Iy6ngV_Cds?usp=sharing">
        <Button className="bg-main_blue1 hover:bg-main_blued">
          Download the Notebook
        </Button>
      </Link>
    </div>
  );
}
