import { toast } from "sonner";
import { useCartStore } from "../store/use-cart-store";

export const useCart = () => {
  // Access productIds from the store
  const productIds = useCartStore((state) => state.productIds);
  const addProduct = useCartStore((state) => state.addProduct);
  const removeProduct = useCartStore((state) => state.removeProduct);
  const clearCart = useCartStore((state) => state.clearCart);

  // Toggle product presence in cart (add if not present, remove if quantity is 1)
  const toggleProduct = (
    userId: string,
    productId: string,
    quantity: number
  ) => {
    if (productIds[productId]) {
      // If quantity is 1, remove it, otherwise decrease quantity
      // removeProduct(userId, productId);
      removeProduct(productId);
      toast.success("Successfully removed products from cart");
    } else {
      // addProduct(userId, productId, quantity);
      addProduct(productId, quantity);
      toast.success("Successfully add products from cart");
    }
  };

  // Check if product is in cart (quantity > 0)
  const isProductInCart = (productId: string) => {
    return (productIds[productId] ?? 0) > 0;
  };

  // Get total items in cart (sum of all quantities)
  const totalItems = Object.values(productIds).reduce(
    (total, qty) => total + qty,
    0
  );

  // Get quantity of a specific product
  const getQuantity = (productId: string) => {
    return productIds[productId] ?? 0;
  };

  return {
    productIds,
    addProduct,
    removeProduct,
    clearCart,
    toggleProduct,
    isProductInCart,
    totalItems,
    getQuantity,
  };
};
