import Card from "@/components/shared/Card";
import { getDialogues } from "@/lib/action";
import { Loader2 } from "lucide-react";

const page = async () => {
  const data = await getDialogues();
  if (!data)
    return (
      <>
        <Loader2 width={32} height={32} className="animate-spin" />
      </>
    );
  return (
    <div className=" w-full mt-4">
      <div className="grid grid-cols-1 w-full sm:grid-cols-3 gap-4">
        {data?.map((item) => (
          <Card
            key={item?.id}
            headerTitle={`${item?.series} - ${item.character}`}
            content={item?.text}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
