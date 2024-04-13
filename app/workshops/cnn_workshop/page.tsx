import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <Link
        href="https://colab.research.google.com/drive/1oIAQ8Pa66xecsaLwONHDQrtbal-bdY_n?usp=sharing"
        className="underline text-sm md:text-xl text-center"
      >
        Get the Notebook
      </Link>
    </div>
  );
}
