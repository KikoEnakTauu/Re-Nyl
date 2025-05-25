import { Disc3, Heart, Play, ShoppingCart, Star } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardHeader } from "../../../../components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "../../../../components/ui/badge";

const vinyl = [
  {
    id: 1,
    title: "Abbey Road",
    artist: "The Beatles",
    price: 45.99,
    condition: "Near Mint",
    year: 1969,
    genre: "Rock",
    seller: "VinylCollector123",
    rating: 4.9,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    title: "Dark Side of the Moon",
    artist: "Pink Floyd",
    price: 52.99,
    condition: "Mint",
    year: 1973,
    genre: "Progressive Rock",
    seller: "RecordHunter",
    rating: 5.0,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    title: "Kind of Blue",
    artist: "Miles Davis",
    price: 38.99,
    condition: "Very Good+",
    year: 1959,
    genre: "Jazz",
    seller: "JazzMaster",
    rating: 4.8,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    title: "Nevermind",
    artist: "Nirvana",
    price: 29.99,
    condition: "Very Good",
    year: 1991,
    genre: "Grunge",
    seller: "90sVinyl",
    rating: 4.7,
    image: "/placeholder.svg?height=300&width=300",
  },
];

export const PopularVinyl = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Vinyl Records
          </h2>
          <p className="text-gray-600">
            Handpicked gems from our trusted sellers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vinyl.map((vinyl) => (
            <Card
              key={vinyl.id}
              className="group hover:shadow-lg transition-shadow cursor-pointer"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={vinyl.image || "/placeholder.svg"}
                    alt={vinyl.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 flex gap-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="h-8 w-8 p-0"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="h-8 w-8 p-0"
                    >
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-1">{vinyl.title}</h3>
                <p className="text-gray-600 mb-2">{vinyl.artist}</p>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">{vinyl.genre}</Badge>
                  {/* <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-600 ml-1">
                      {vinyl.rating}
                    </span>
                  </div> */}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-purple-600">
                    ${vinyl.price}
                  </span>
                  <span className="text-sm text-gray-500">
                    by {vinyl.seller}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Records
          </Button>
        </div>
      </div>
    </section>
  );
};
