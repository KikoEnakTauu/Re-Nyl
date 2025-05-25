import { ChangeEvent } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Props {
  minPrice?: string | null;
  maxPrice?: string | null;
  onMinPriceChange: (value: string) => void;
  onMaxPriceChange: (value: string) => void;
}

export const formatAsCurrency = (value: string) => {
  const cleaned = value.replace(/[^0-9]/g, "");

  const number = parseFloat(cleaned);
  if (isNaN(number)) return "";

  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(number);
};

export const PriceFilter = ({
  minPrice,
  maxPrice,
  onMinPriceChange,
  onMaxPriceChange,
}: Props) => {
  const handleMinPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9]/g, "");
    onMinPriceChange(raw);
  };

  const handleMaxPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9]/g, "");
    onMaxPriceChange(raw);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <Label className="font-medium text-base">Minimum Price</Label>
        <Input
          type="text"
          placeholder="Rp 0"
          value={minPrice ? formatAsCurrency(minPrice) : ""}
          onChange={handleMinPriceChange}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label className="font-medium text-base">Maximum Price</Label>
        <Input
          type="text"
          placeholder="Rp ???.???.???"
          value={maxPrice ? formatAsCurrency(maxPrice) : ""}
          onChange={handleMaxPriceChange}
        />
      </div>
    </div>
  );
};
