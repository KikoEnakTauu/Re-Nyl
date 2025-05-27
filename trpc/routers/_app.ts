import { cartRouter } from "@/modules/cart/server/procedures";
import { createTRPCRouter } from "../init";
import { authRouter } from "@/modules/auth/server/procedures";
import { checkoutRouter } from "@/modules/checkout/server/procedures";
import { genresRouter } from "@/modules/genre/server/procedures";
import { productsRouter } from "@/modules/products/server/procedures";
export const appRouter = createTRPCRouter({
  auth: authRouter,
  genres: genresRouter,
  products: productsRouter,
  checkout: checkoutRouter,
  cart: cartRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
