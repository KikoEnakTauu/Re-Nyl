"use client";
import { Button } from "@/components/ui/button";
import { Heart, Minus, Plus, Star } from "lucide-react";
import Image from "next/image";
import { formatAsCurrency } from "./price-filter";
import { useState } from "react";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { CartButton } from "../../../checkout/ui/components/cart-button";

interface Props {
  id: string;
}

export const ProductDetail = ({ id }: Props) => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(
    trpc.products.getOne.queryOptions({
      id,
    })
  );

  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  return (
    <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {/* Left Side - Images */}
      <div className="space-y-4">
        {/* Main Image */}
        <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-sm">
          <Image
            src={data.image.url || "/placeholder.svg"}
            alt={data.name}
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right Side - Product Details */}
      <div className="space-y-6">
        {/* Title and Basic Info */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{data.name}</h1>
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
            <span>• {data.year}</span>
            <span>• {data.label}</span>
          </div>

          {/* Price */}
          <div className="text-2xl font-bold text-gray-900 mb-6">
            {formatAsCurrency(data.price.toString())}
          </div>
        </div>

        {/* Vinyl Specifications */}
        <div className="bg-yellow-100 p-4 rounded-lg">
          <div className="flex items-center mb-3">
            <span className="text-sm font-medium">🎵 Vinyl specification</span>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="mb-2">
                <span className="font-medium">Format:</span> {data.format}
              </div>
              <div className="mb-2">
                <span className="font-medium">Condition:</span> {data.condition}
              </div>
              <div>
                <span className="font-medium">Label:</span> {data.label}
              </div>
            </div>
            <div>
              <div className="mb-2">
                <span className="font-medium">Speed:</span> {data.speed} RPM
              </div>
              <div>
                <span className="font-medium">Year:</span> {data.year}
              </div>
            </div>
          </div>
        </div>

        {/* Quantity and Actions */}
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Quantity :
            </label>
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                size="icon"
                onClick={decrementQuantity}
                className="h-8 w-8 border-gray-300"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="text-lg font-medium w-8 text-center">
                {quantity}
              </span>
              <Button
                variant="outline"
                size="icon"
                onClick={incrementQuantity}
                className="h-8 w-8 border-gray-300"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <CartButton productId={data.id} quantity={quantity}/>
          </div>
        </div>
      </div>
    </div>
  );
};
