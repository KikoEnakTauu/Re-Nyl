"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCart } from "@/modules/checkout/hooks/use-cart";
import { useTRPC } from "@/trpc/client";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ModalFailed } from "./modal-failed";

interface Props {
  productId: string;
  quantity: number;
}

interface CartCardProps {
  productId: string;
}

export const CartButton = ({ productId, quantity }: Props) => {
  const cart = useCart();
  const [showDialog, setShowDialog] = useState(false);
  const trpc = useTRPC();
  const session = useQuery(trpc.auth.session.queryOptions());

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    if (!session.data?.user) {
      setShowDialog(true);
    } else {
      const userId = session.data.user.id;
      cart.toggleProduct(userId, productId, quantity);
    }
  };

  return (
    <>
      <Button
        className={cn(
          "flex-1 bg-orange-500 hover:bg-orange-600 text-white",
          cart.isProductInCart(productId) &&
            "bg-white border-1 border-black text-black hover:bg-orange-600 hover:text-white transition-all ease-in-out"
        )}
        onClick={handleAddToCart}
      >
        <ShoppingCart className="mr-2 h-4 w-4" />
        {cart.isProductInCart(productId) ? "Remove from cart" : "Add to cart"}
      </Button>

      <ModalFailed open={showDialog} setOpen={setShowDialog} />
    </>
  );
};

export const CartButtonCard = ({ productId }: CartCardProps) => {
  const [showDialog, setShowDialog] = useState(false);
  const cart = useCart();
  const trpc = useTRPC();
  const session = useQuery(trpc.auth.session.queryOptions());

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    if (!session.data?.user) {
      setShowDialog(true);
    } else {
      const userId = session.data.user.id;
      // cart.addProduct(session.data.user.id, productId, 1);
      cart.addProduct(productId, 1);
    }
  };

  return (
    <>
      <Button
        className={cn(
          "cursor-pointer w-full mt-3 bg-black hover:bg-white hover:text-black text-white font-medium py-2 rounded-lg transition-all duration-200 hover:scale-105"
        )}
        onClick={handleAddToCart}
      >
        <ShoppingCart className="mr-2 h-4 w-4" />
        "Add to cart"
      </Button>

      <ModalFailed open={showDialog} setOpen={setShowDialog} />
    </>
  );
};
