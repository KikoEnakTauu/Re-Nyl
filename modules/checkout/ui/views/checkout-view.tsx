"use client";
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";
import { useCart } from "../../hooks/use-cart";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { CheckoutItem } from "../components/check-out-item";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { formatAsCurrency } from "@/modules/products/ui/components/price-filter";
import { redirect } from "next/navigation";

export const CheckoutView = () => {
  const { productIds, clearCart } = useCart();

  const trpc = useTRPC();
  const { data, error } = useQuery(
    trpc.checkout.getProducts.queryOptions({
      productId: productIds,
    })
  );

  const cartItems = data?.docs || [];
  const subtotal = cartItems.reduce((sum, product) => {
    const quantity = productIds[product.id] ?? 0;
    return sum + product.price * quantity;
  }, 0);
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    if (cartItems.length === 0) {
      toast.warning("Your cart is empty");
      return;
    }

    setIsLoading(true);

    try {
      toast.success("Order placed successfully!");
      redirect("/shop");
    } catch (error) {
      toast.error(`Failed to place order. Please try again. ${error}`);
    }
  };

  useEffect(() => {
    if (error?.data?.code === "NOT_FOUND") {
      clearCart();
      toast.warning("Invalid product found, cart cleared");
    }
  }, [error, clearCart]);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 lg:gap-16">
        {/* Left Column - Cart Items */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Your Items
            </h2>
            <div className="space-y-4">
              {data?.docs.map((product) => (
                <CheckoutItem
                  key={product.id}
                  imageUrl={product.image?.url ?? undefined}
                  name={product.name}
                  price={product.price}
                  quantity={productIds[product.id] ?? 0}
                  artist={product.artist}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Order Summary
            </h2>

            {/* Order Totals */}
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Subtotal ({cartItems.length} items)</span>
                <span>{formatAsCurrency(subtotal.toString())}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span>Tax</span>
                <span>{formatAsCurrency(tax.toString())}</span>
              </div>

              <Separator className="my-3" />
              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>{formatAsCurrency(total.toString())}</span>
              </div>
            </div>

            {/* Place Order Button */}
            <Button
              className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg font-semibold"
              disabled={cartItems.length === 0 || isLoading}
              onClick={handleSubmit}
            >
              Place Order - {formatAsCurrency(total.toString())}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
