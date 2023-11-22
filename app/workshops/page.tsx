import Link from "next/link";
export default function Workshop() {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <Link
        href="/workshops/linear_regression"
        className="underline text-sm md:text-xl text-center"
      >
        Linear Regression
      </Link>
      <Link
        href="/workshops/logistic_regression"
        className="underline text-sm md:text-xl text-center"
      >
        Logistic Regression
      </Link>
    </div>
  );
}
