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
import { Badge } from "@/components/ui/badge";
import { InboxIcon, Minus, Plus, X } from "lucide-react";

export const CheckoutView = () => {
  const { productIds, clearCart, removeProduct, clearProduct, addProduct } =
    useCart();

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
      console.log(error);
      toast.error(`Failed to place order. Please try again. ${error}`);
    }
  };

  const handleClearAll = () => {
    clearCart();
    toast.success("Cart cleared successfully");
  };

  const handleRemoveProduct = (productId: string, productName: string) => {
    clearProduct(productId);
    toast.success(`${productName} removed from cart`);
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
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Your Items
              </h2>
              {cartItems.length > 0 && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleClearAll}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200"
                >
                  Clear All
                </Button>
              )}
            </div>
            <div className="space-y-4">
              {data?.docs.map((product) => {
                const quantity = productIds[product.id] ?? 0;

                return (
                  <div
                    key={product.id}
                    className="relative border border-gray-100 rounded-lg p-4 shadow-sm"
                  >
                    <div className="flex flex-col sm:flex-row gap-4">
                      {/* Product Image and Details */}
                      <div className="flex-grow">
                        <CheckoutItem
                          imageUrl={product.image?.url ?? undefined}
                          name={product.name}
                          price={product.price}
                          quantity={quantity}
                          artist={product.artist}
                        />
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-1 self-end sm:self-center">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full"
                          onClick={() => removeProduct(product.id)}
                          disabled={quantity <= 1}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>

                        <div className="w-12 h-8 flex items-center justify-center bg-gray-50 border border-gray-200 rounded text-sm font-medium">
                          {product.quantity}
                        </div>

                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full"
                          onClick={() => addProduct(product.id, 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>

                    {/* Remove Product Badge */}
                    <Badge
                      variant="destructive"
                      className="absolute top-2 right-2 cursor-pointer hover:bg-red-600 p-1"
                      onClick={() =>
                        handleRemoveProduct(product.id, product.name)
                      }
                    >
                      <X className="h-3 w-3" />
                    </Badge>
                  </div>
                );
              })}
              {cartItems.length === 0 && (
                <div className="border border-black border-dashed flex items-center justify-center p-8 flex-col gap-y-4 bg-white w-full rounded-lg">
                  <InboxIcon />
                  <p className="text-base font-medium">No products found</p>
                </div>
              )}
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
