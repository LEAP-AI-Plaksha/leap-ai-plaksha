import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <Link
        href="https://colab.research.google.com/drive/1-zWDaCMqtg4vR5NFM-l_2CNiHrO2zuOK?usp=sharing"
        className="underline text-sm md:text-xl text-center"
        target="_blank"
      >
        Get the Notebook
      </Link>
      {/*<Link
        href="/presentations/Linear_Regression_Workshop_Presentation.pdf"
        className="underline text-sm md:text-xl text-center"
        target="_blank"
      >
        Download the Presentation
      </Link>*/}
      <Link
        href="#"
        className="underline text-sm md:text-xl text-center"
      >
        Post Workshop Content
      </Link>
    </div>
  );
}
