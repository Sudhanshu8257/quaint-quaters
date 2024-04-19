import Link from "next/link";

export default function Home() {
  return (
    <main className="px-4 flex flex-col items-center gap-4 justify-center h-[80vh] w-full text-center">
      <h1 className="text-primary-foreground  font-black md:text-2xl text-lg">
        Welcome to Quant Quarters: Discover Quotes, Proverbs, and Dialogues
      </h1>
      <h3 className="text-[#666666] md:text-lg text-base -mt-1 mb-6">
        Immerse yourself in a world of wisdom and inspiration with Quaint
        Quarters. Our app is your gateway to an expansive collection of quotes,
        proverbs, and dialogues curated to uplift, motivate, and enlighten
      </h3>
      <div className="flex items-center justify-center gap-4 ">
        <Link
          className="bg-primary p-4 md:text-lg text-sm font-bold rounded-lg hover:bg-[#C17A5D]"
          href={"/quotes"}
        >
          Quotes
        </Link>
        <Link
          className="bg-primary p-4 md:text-lg text-sm font-bold rounded-lg hover:bg-[#C17A5D]"
          href={"/proverbs"}
        >
          Proverbs
        </Link>
        <Link
          className="bg-primary p-4 md:text-lg text-sm font-bold rounded-lg hover:bg-[#C17A5D]"
          href={"/dialogues"}
        >
          Dialogues
        </Link>
      </div>
    </main>
  );
}
