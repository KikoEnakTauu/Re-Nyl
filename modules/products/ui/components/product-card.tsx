import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlayIcon, ShoppingCart } from "lucide-react";
import { formatAsCurrency } from "./price-filter";
import { CartButtonCard } from "@/modules/checkout/ui/components/cart-button";

interface ProductCardProps {
  id: string;
  name: string;
  imageUrl?: string | null;
  artistName: string;
  authorUsername: string;
  price: number;
}

export const ProductCard = ({
  id,
  name,
  imageUrl,
  artistName,
  authorUsername,
  price,
}: ProductCardProps) => {
  return (
    <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:shadow-vinyl-purple/20 group border-0 bg-white rounded-xl">
      <Link href={`/products/${id}`}>
        <div className="aspect-square relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-vinyl-purple/80 to-vinyl-pink/80 opacity-0 group-hover:opacity-70 transition-opacity z-10"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
            <PlayIcon className="h-16 w-16 text-white animate-spin-slow" />
          </div>
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <CardContent className="p-5">
          <h3 className="font-bold text-lg truncate">{name}</h3>
          <p className="text-sm text-muted-foreground">{artistName}</p>
          <div className="flex justify-between items-center mt-3">
            <span className="font-bold text-lg text-vinyl-purple">
              {formatAsCurrency(price.toString())}
            </span>
            <Badge
              variant="outline"
              className="border-vinyl-purple text-vinyl-purple"
            >
              by {authorUsername}
            </Badge>
          </div>
        </CardContent>
      </Link>

      <div className="px-5 pb-5">
        <CartButtonCard productId={id} />
      </div>
    </Card>
  );
};

export const ProductCardSkeleton = () => {
  return (
    <div className="w-full aspect-3/4 bg-neutral-200 rounded-lg animate-pulse" />
  );
};
