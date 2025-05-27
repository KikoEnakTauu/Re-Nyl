import { cn } from "@/lib/utils";
import { formatAsCurrency } from "@/modules/products/ui/components/price-filter";
import { Product } from "@/payload-types";
import Image from "next/image";

interface Props {
  imageUrl?: string;
  name: string;
  price: number;
  quantity: number;
  artist: string;
}
export const CheckoutItem = ({
  imageUrl,
  name,
  price,
  quantity,
  artist,
}: Props) => {
  return (
    <div className="flex items-center space-x-4 p-4 border rounded-lg">
      <div className="relative w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500">{artist}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm text-gray-500">Qty: {quantity}</span>
          <span className="font-medium text-gray-900">
            {formatAsCurrency((price * quantity).toString())}
          </span>
        </div>
      </div>
    </div>
  );
};
