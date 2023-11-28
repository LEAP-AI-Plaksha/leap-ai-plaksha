import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <Link
        href="https://colab.research.google.com/drive/19l1M7lAPooHxfmkZByKhuJDHaNrLRsYA?usp=sharing"
        className="underline text-sm md:text-xl text-center"
      >
        Get the Notebook
      </Link>
      {/* <Link
        href="/presentations/Logistic_Regression_Workshop_Presentation.pdf"
        className="underline text-sm md:text-xl text-center"
        target="_blank"
      >
        Download the Presentation
      </Link> */}
      <Link
        href="https://plakshauniversity1-my.sharepoint.com/:w:/g/personal/abhinav_lodha_plaksha_edu_in/Eba5E16q-GRIjBBuljkG4FMBg30nJLX6_l6kKRpIRaHmhg?e=jNnsv0"
        className="underline text-sm md:text-xl text-center"
      >
        Post Workshop Content
      </Link>
    </div>
  );
}
