import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  data: any;
  isActive?: boolean;
}

export const GenreButton = ({ data, isActive }: Props) => {
  return (
    <Button
      asChild
      className={cn(
        "px-4 bg-transparent rounded-3xl border-1 text-black hover:bg-black hover:text-white hover:border-white transition-all",
        isActive && "bg-black text-white border-white"
      )}
    >
      <Link href={`/shop/${data.slug === "all" ? "" : data.slug}`}>
        {data.name}
      </Link>
    </Button>
  );
};
