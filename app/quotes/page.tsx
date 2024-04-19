import Card from "@/components/shared/Card";
import { getQuotes } from "@/lib/action";
import { Loader2 } from "lucide-react";
import Link from "next/link";

const page = async ({ searchParams }: { searchParams: { q?: string } }) => {
  const data = await getQuotes({ filter: searchParams?.q || "all" });
  if (!data)
    return (
      <>
        <Loader2 width={32} height={32} className="animate-spin" />
      </>
    );
  return (
    <div className="w-full flex max-md:flex-col gap-2 mt-4">
      <div className="h-fit w-48 md:sticky md:top-28  rounded-lg flex flex-col gap-1 items-start justify-center max-md:w-full bg-white">
        <span className="text-lg max-md:text-base mt-2 ml-2">Categories</span>
        <Link
          href={"/quotes"}
          className={`font-bold w-full p-2 hover:bg-primary ${
            !searchParams.q && "bg-primary"
          }`}
        >
          All
        </Link>
        {data?.authors?.map((item, i) => (
          <Link
            href={`/quotes?q=${item}`}
            className={`font-bold w-full p-2 hover:bg-primary ${
              searchParams?.q === item && "bg-primary"
            }`}
            key={i}
          >
            {item}
          </Link>
        ))}
      </div>
      <div className="grid grid-cols-1 w-full sm:grid-cols-3 gap-4">
        {data?.quotes?.map((item) => (
          <Card
            key={item?.id}
            headerTitle={item?.author}
            content={item?.text}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
