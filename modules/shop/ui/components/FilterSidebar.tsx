"use client";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function FilterSidebar() {
  const [priceRange, setPriceRange] = useState([0, 1000]);

  return (
    <div className="sticky top-20">
      <Accordion type="multiple">
        <AccordionItem value="category">
          <AccordionTrigger>Category</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="electronics" />
                <Label htmlFor="electronics">Electronics</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="clothing" />
                <Label htmlFor="clothing">Clothing</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="home" />
                <Label htmlFor="home">Home & Kitchen</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="books" />
                <Label htmlFor="books">Books</Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 mt-2">
              <Slider
                defaultValue={[0, 1000]}
                max={1000}
                step={10}
                onValueChange={setPriceRange}
              />
              <div className="flex justify-between">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="rating">
          <AccordionTrigger>Rating</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="rating-4" />
                <Label htmlFor="rating-4">4★ & above</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="rating-3" />
                <Label htmlFor="rating-3">3★ & above</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="rating-2" />
                <Label htmlFor="rating-2">2★ & above</Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="sort">
          <AccordionTrigger>Sort By</AccordionTrigger>
          <AccordionContent>
            <RadioGroup defaultValue="relevance">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="relevance" id="relevance" />
                <Label htmlFor="relevance">Relevance</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="price-low" id="price-low" />
                <Label htmlFor="price-low">Price: Low to High</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="price-high" id="price-high" />
                <Label htmlFor="price-high">Price: High to Low</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="newest" id="newest" />
                <Label htmlFor="newest">Newest First</Label>
              </div>
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Separator className="my-4" />
      <Button className="w-full bg-primary text-primary-foreground rounded-md py-2 font-medium">
        Apply Filters
      </Button>
    </div>
  );
}
