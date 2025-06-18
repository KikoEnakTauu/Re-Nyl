import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface CartState {
  productIds: Record<string, number>;
  addProduct: (productId: string, quantity: number) => void;
  removeProduct: (productId: string) => void;
  clearCart: () => void;
  clearProduct: (productId: string) => void;
  getQuantity: (productId: string) => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      productIds: {},

      addProduct: (productId, quantity) =>
        set((state) => {
          const currentQty = state.productIds[productId] || 0;
          return {
            productIds: {
              ...state.productIds,
              [productId]: currentQty + quantity,
            },
          };
        }),

      removeProduct: (productId) =>
        set((state) => {
          const currentQty = state.productIds[productId] || 0;
          if (currentQty <= 1) {
            const { [productId]: _, ...rest } = state.productIds;
            return { productIds: rest };
          } else {
            return {
              productIds: {
                ...state.productIds,
                [productId]: currentQty - 1,
              },
            };
          }
        }),

      clearProduct: (productId) =>
        set((state) => {
          const newCart = { ...state.productIds };
          delete newCart[productId];
          return { productIds: newCart };
        }),

      clearCart: () => {
        set({
          productIds: {},
        });
      },

      getQuantity: (productId) => {
        const qty = get().productIds[productId];
        return qty ?? 0;
      },
    }),
    {
      name: "renyl-cart",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

// ==================================================

// import { create } from "zustand";
// import { caller } from "@/trpc/server";

// interface CartState {
//   productIds: Record<string, number>;
//   fetchCart: (userId: string) => Promise<void>;
//   addProduct: (userId: string, productId: string, quantity: number) => void;
//   removeProduct: (userId: string, productId: string) => void;
//   clearCart: (userId: string) => void;
//   getQuantity: (productId: string) => number;
// }

// export const useCartStore = create<CartState>((set, get) => ({
//   productIds: {},

//   // Load cart from server
//   fetchCart: async (userId) => {
//     const res = await caller.cart.getCart({
//       userId,
//     });

//     if (res?.items && Array.isArray(res.items)) {
//       const productMap = res.items.reduce<Record<string, number>>(
//         (acc, item) => {
//           const id =
//             typeof item.product === "string" ? item.product : item.product?.id;
//           if (id) acc[id] = item.quantity;
//           return acc;
//         },
//         {}
//       );

//       set({ productIds: productMap });
//     } else {
//       set({ productIds: {} }); // fallback to empty cart
//     }
//   },

//   addProduct: (userId, productId, quantity) => {
//     const state = get();
//     const currentQty = state.productIds[productId] || 0;
//     const newCart = {
//       ...state.productIds,
//       [productId]: currentQty + quantity,
//     };

//     set({ productIds: newCart });

//     caller.cart.updateCart({
//       userId: userId,
//       items: Object.entries(newCart).map(([product, quantity]) => ({
//         product,
//         quantity,
//       })),
//     }); // Sync with server
//   },

//   removeProduct: (userId, productId) => {
//     const state = get();
//     const currentQty = state.productIds[productId] || 0;
//     let newCart = { ...state.productIds };

//     if (currentQty <= 1) {
//       delete newCart[productId];
//     } else {
//       newCart[productId] = currentQty - 1;
//     }

//     set({ productIds: newCart });
//     caller.cart.updateCart({
//       userId: userId,
//       items: Object.entries(newCart).map(([product, quantity]) => ({
//         product,
//         quantity,
//       })),
//     }); // Sync with server
//   },

//   clearCart: (userId) => {
//     set({ productIds: {} });
//     caller.cart.clearCart({ userId }); // Server-side clear
//   },

//   getQuantity: (productId) => {
//     const qty = get().productIds[productId];
//     return qty ?? 0;
//   },
// }));
