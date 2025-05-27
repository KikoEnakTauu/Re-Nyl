"use client";
import { CheckCircle, Package, Truck, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

interface CheckoutSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderDetails?: {
    orderNumber: string;
    email: string;
    total: number;
    items: Array<{
      name: string;
      artist: string;
      quantity: number;
      price: number;
    }>;
  };
}

export const CheckoutSuccessModal = ({
  isOpen,
  onClose,
  orderDetails,
}: CheckoutSuccessModalProps) => {
  const defaultOrderDetails = {
    orderNumber:
      "RE-NYL-" + Math.random().toString(36).substr(2, 9).toUpperCase(),
    email: "customer@example.com",
    total: 99.97,
    items: [
      {
        name: "Kind of Blue",
        artist: "Miles Davis",
        quantity: 1,
        price: 29.99,
      },
      { name: "Abbey Road", artist: "The Beatles", quantity: 2, price: 34.99 },
    ],
  };

  const details = orderDetails || defaultOrderDetails;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto bg-white rounded-xl shadow-xl">
        <DialogHeader className="text-center pb-4">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Order Confirmed!
          </DialogTitle>
          <p className="text-gray-600 mt-2">
            Thank you for your purchase. Your order has been successfully
            placed.
          </p>
        </DialogHeader>

        <div className="space-y-6">
          {/* Order Details */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-medium text-gray-700">
                Order Number
              </span>
              <Badge variant="outline" className="font-mono text-xs">
                {details.orderNumber}
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">
                Total Amount
              </span>
              <span className="text-lg font-bold text-gray-900">
                ${details.total.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Order Items */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Items Ordered</h3>
            <div className="space-y-2">
              {details.items.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                >
                  <div>
                    <p className="font-medium text-sm">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.artist}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <p className="text-xs text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Next Steps */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">What happens next?</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-3 h-3 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Confirmation Email
                  </p>
                  <p className="text-xs text-gray-600">
                    Sent to {details.email}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Package className="w-3 h-3 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Processing
                  </p>
                  <p className="text-xs text-gray-600">1-2 business days</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Truck className="w-3 h-3 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Shipping</p>
                  <p className="text-xs text-gray-600">3-5 business days</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-4">
            <Link href="/orders" className="w-full">
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                Track Your Order
              </Button>
            </Link>
            <Link href="/browse" className="w-full">
              <Button
                variant="outline"
                className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
