import { Separator } from "@/components/ui/separator";
import FilterSidebar from "./FilterSidebar";
import ProductGrid from "./ProductGrid";

const ProductView = () => {
  return (
    // outer
    <div className="flex justify-center mt-20 px-20">
      <div className="flex flex-col w-full">
        {/* HEADER */}
        <div className="flex flex-row w-full justify-between">
          <h2 className="font-semibold text-base p-5">Header Title</h2>
          <h2 className="font-light text-base p-5">1320 Products</h2>
          <h2 className="font-light text-base p-5">Sorting</h2>
        </div>
        <Separator orientation="horizontal" className="mb-10 rounded-3xl" />

        <div className="flex flex-col md:flex-row gap-8 pb-20">
          <div className="w-full md:w-64 shrink-0">
            <FilterSidebar />
          </div>
          <div className="flex-1">
            <ProductGrid />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
