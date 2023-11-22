import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <Link href="" className="underline text-sm md:text-xl text-center">
        Get the Notebook
      </Link>
      <Link
        href="/presentations/Logistic_Regression_Workshop_Presentation.pdf"
        className="underline text-sm md:text-xl text-center"
        target="_blank"
      >
        Download the Presentation
      </Link>
      <Link href="" className="underline text-sm md:text-xl text-center">
        Post Workshop Content
      </Link>
    </div>
  );
}
