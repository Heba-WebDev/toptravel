import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="container-custom  h-[100vh]  py-[2rem]">
      <div className="relative  flex h-[90%] items-center justify-between rounded-2xl bg-hero bg-center ">
        <div className="m-auto">
          <h1 className="mt-[-150px] text-center text-5xl font-extrabold italic text-orange-600 md:text-7xl">
            Unforgettable Adventures Await!{" "}
            <span className="block pt-8 text-3xl text-white md:text-5xl">
              Tailored travel packages for large groups
            </span>
          </h1>
        </div>
        <Link
          href="/#howitworks"
          className="absolute bottom-8 left-[43%] mt-3 flex flex-col justify-center gap-4 self-center scroll-smooth text-center text-sm font-bold uppercase text-white md:left-[47.3%] "
        >
          Learn more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="absolute left-8 top-6 h-6 w-6 self-center text-center text-sm text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
