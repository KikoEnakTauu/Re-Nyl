import Link from "next/link";
import React from "react";
import { CheckoutView } from "@/modules/checkout/ui/views/checkout-view";

const page = () => {
  return (
    <div className="my-20">
      <Link href="/shop" className="px-20">
        <span className="text-2xl font-bold">&larr; Continue to Shopping</span>
      </Link>

      <h1 className="mt-5 text-3xl font-bold text-gray-900 mb-8 px-20">Checkout</h1>

      <div className="lg:col-span-4 space-y-8 px-10">
        <CheckoutView />
      </div>
    </div>
  );
};

export default page;
