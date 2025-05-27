import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import z from "zod";
import { Media } from "@/payload-types";
import { Tenant } from "@/payload-types";
import { TRPCError } from "@trpc/server";

export const checkoutRouter = createTRPCRouter({
  getProducts: baseProcedure
    .input(
      z.object({
        productId: z.record(z.string(), z.number().int().min(1)),
      })
    )
    .query(async ({ ctx, input }) => {
      const ids = Object.keys(input.productId);

      const data = await ctx.db.find({
        collection: "products",
        depth: 2, // populate "genre" & "image"
        where: {
          id: {
            in: ids,
          },
        },
      });

      if (data.totalDocs !== ids.length) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Products not found!",
        });
      }

      return {
        ...data,
        docs: data.docs.map((doc) => ({
          ...doc,
          quantity: input.productId[doc.id],
          image: doc.image as Media,
          tenant: doc.tenant as Tenant,
        })),
      };
    }),
});
