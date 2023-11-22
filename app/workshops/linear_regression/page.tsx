import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <Link
        href="https://colab.research.google.com/drive/1i44Y2rmeQT0R9FAJy2jORyD2WEA7b1A5?usp=sharing"
        className="underline text-sm md:text-xl text-center"
      >
        Get the Notebook
      </Link>
      <Link
        href="/presentations/Linear_Regression_Workshop_Presentation.pdf"
        className="underline text-sm md:text-xl text-center"
        target="_blank"
      >
        Download the Presentation
      </Link>
      <Link
        href="https://plakshauniversity1-my.sharepoint.com/:w:/g/personal/abhinav_lodha_plaksha_edu_in/ERUsW6shsJxHk9GpKc6pUcABRUj7sD_8fnvk9Mku-jKJRQ?rtime=oNQi6ofY20g"
        className="underline text-sm md:text-xl text-center"
      >
        Post Workshop Content
      </Link>
    </div>
  );
}
