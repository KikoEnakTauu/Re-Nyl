import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useCart } from "../../hooks/use-cart";

export const CheckoutButton = () => {
  const { totalItems } = useCart();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative text-white hover:text-black cursor-pointer transition-colors"
    >
      <Link href="/checkout">
        <ShoppingCart className="h-5 w-5" />
        {totalItems > 0 && (
          <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-red-500 hover:bg-red-500 text-white text-xs rounded-full">
            {totalItems > 99 ? "99+" : totalItems}
          </Badge>
        )}
        {/* <span className="sr-only">Cart ({cartCount} items)</span> */}
      </Link>
    </Button>
  );
};
