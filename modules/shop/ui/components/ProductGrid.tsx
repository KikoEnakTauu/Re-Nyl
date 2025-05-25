import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

// Mock product data
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 129.99,
    rating: 4.5,
    image: "/placeholder.svg?height=200&width=200",
    category: "Electronics",
    sale: true,
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    rating: 4.2,
    image: "/placeholder.svg?height=200&width=200",
    category: "Electronics",
    sale: false,
  },
  {
    id: 3,
    name: "Cotton T-Shirt",
    price: 24.99,
    rating: 4.0,
    image: "/placeholder.svg?height=200&width=200",
    category: "Clothing",
    sale: false,
  },
  {
    id: 4,
    name: "Coffee Maker",
    price: 89.99,
    rating: 4.7,
    image: "/placeholder.svg?height=200&width=200",
    category: "Home & Kitchen",
    sale: true,
  },
  {
    id: 5,
    name: "Desk Lamp",
    price: 39.99,
    rating: 3.9,
    image: "/placeholder.svg?height=200&width=200",
    category: "Home & Kitchen",
    sale: false,
  },
  {
    id: 6,
    name: "Bestselling Novel",
    price: 14.99,
    rating: 4.8,
    image: "/placeholder.svg?height=200&width=200",
    category: "Books",
    sale: false,
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    price: 79.99,
    rating: 4.3,
    image: "/placeholder.svg?height=200&width=200",
    category: "Electronics",
    sale: true,
  },
  {
    id: 8,
    name: "Denim Jeans",
    price: 49.99,
    rating: 4.1,
    image: "/placeholder.svg?height=200&width=200",
    category: "Clothing",
    sale: false,
  },
  {
    id: 9,
    name: "Blender",
    price: 69.99,
    rating: 4.4,
    image: "/placeholder.svg?height=200&width=200",
    category: "Home & Kitchen",
    sale: false,
  },
  {
    id: 10,
    name: "Cookbook",
    price: 19.99,
    rating: 4.6,
    image: "/placeholder.svg?height=200&width=200",
    category: "Books",
    sale: true,
  },
  {
    id: 11,
    name: "Wireless Earbuds",
    price: 89.99,
    rating: 4.2,
    image: "/placeholder.svg?height=200&width=200",
    category: "Electronics",
    sale: false,
  },
  {
    id: 12,
    name: "Winter Jacket",
    price: 129.99,
    rating: 4.5,
    image: "/placeholder.svg?height=200&width=200",
    category: "Clothing",
    sale: true,
  },
];

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden">
          <div className="relative">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={200}
              height={200}
              className="w-full h-48 object-cover"
            />
            {product.sale && (
              <Badge className="absolute top-2 right-2 bg-red-500">Sale</Badge>
            )}
          </div>
          <CardContent className="p-4">
            <div className="text-sm text-muted-foreground mb-1">
              {product.category}
            </div>
            <h3 className="font-semibold text-lg line-clamp-1">
              {product.name}
            </h3>
            <div className="flex items-center mt-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="ml-1 text-sm">{product.rating}</span>
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0 flex justify-between items-center">
            <span className="font-bold">${product.price}</span>
            <button className="bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm">
              Add to Cart
            </button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
