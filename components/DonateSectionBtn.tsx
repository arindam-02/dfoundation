import Link from "next/link";

const DonateSectionBtn = () => {
  return (
    <>
      <div className="mb-20 flex flex-col justify-center items-center">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-lime-800 text-center mb-5">
          Help Us Make a Difference
        </h1>
        <p className="text-xs md:text-sm text-gray-600 mb-4 text-center">
          Support our mission to create lasting change in communities.
        </p>

        <Link
          href="/donate"
          className="w-full md:w-1/4 p-5 rounded-lg bg-linear-to-r from-teal-800 to to-slate-950 text-white text-center font-extrabold tracking-widest cursor-pointer mx-auto "
        >
          <button>Contribute Us</button>
        </Link>
      </div>
    </>
  );
};

export default DonateSectionBtn;
