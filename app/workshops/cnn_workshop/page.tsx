import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <Link
        href="https://colab.research.google.com/drive/1oIAQ8Pa66xecsaLwONHDQrtbal-bdY_n?usp=sharing"
        className="underline text-sm md:text-xl text-center"
        target="_blank"
      >
        Get the Day 1 Notebook
      </Link>
      <Link
        href="https://colab.research.google.com/drive/1TFmJ-aGHkHC61cOTYZD0q9RhL1tMmoe2?usp=sharing"
        className="underline text-sm md:text-xl text-center"
        target="_blank"
      >
        Get the Day 2 Notebook
      </Link>
      
      <br/>

      <Link
        href="https://plakshauniversity1-my.sharepoint.com/:b:/g/personal/arnav_rustagi_plaksha_edu_in/EV9AdXzlFA9AnrnTGqzXiVQBSHKoEW34WNNUqlLKdx1p7Q?e=dGwHvA"
        className="underline text-sm md:text-xl text-center"
        target="_blank"
      >
        Get the Post-Workshop Content
      </Link>

      <Link
        href="https://colab.research.google.com/drive/1Sc8z5SQ4_VHSNozLcC8lJQL_cfXviz6R?usp=sharing"
        className="underline text-sm md:text-xl text-center"
        target="_blank"
      >
        Get Day 1 Completed Notebook
      </Link>

      <Link
        href="https://colab.research.google.com/drive/1Qjw7Wh2WoENYAECSvZX9DJQthrR7s4l2?usp=sharing"
        className="underline text-sm md:text-xl text-center"
        target="_blank"
      >
        Get Day 2 Completed Notebook
      </Link>

      <Link
        href="/presentations/LEAP_CNNWorkshop.pdf"
        className="underline text-sm md:text-xl text-center"
        target="_blank"
      >
        Get the Presentation
      </Link>
    </div>
  );
}
