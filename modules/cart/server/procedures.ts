import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import z from "zod";
import { Media } from "@/payload-types";
import { Tenant } from "@/payload-types";
import { TRPCError } from "@trpc/server";

export const cartRouter = createTRPCRouter({
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

  getCart: baseProcedure
    .input(
      z.object({
        userId: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const cart = await ctx.db.find({
        collection: "cart",
        where: {
          user: {
            equals: input.userId,
          },
        },
        depth: 2,
      });

      return cart.docs[0] ?? null;
    }),

  updateCart: baseProcedure
    .input(
      z.object({
        userId: z.string(),
        items: z.array(
          z.object({
            product: z.string(),
            quantity: z.number().min(1),
          })
        ),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const existing = await ctx.db.find({
        collection: "cart",
        where: {
          user: {
            equals: input.userId,
          },
        },
      });

      if (existing.totalDocs > 0) {
        return ctx.db.update({
          collection: "cart",
          id: existing.docs[0]!.id,
          data: { items: input.items },
        });
      }

      return ctx.db.create({
        collection: "cart",
        data: {
          user: input.userId,
          items: input.items,
        },
      });
    }),

  clearCart: baseProcedure
    .input(
      z.object({
        userId: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const existing = await ctx.db.find({
        collection: "cart",
        where: {
          user: {
            equals: input.userId,
          },
        },
      });

      if (existing.totalDocs > 0) {
        await ctx.db.delete({
          collection: "cart",
          id: existing.docs[0]!.id,
        });
      }

      return true;
    }),
});
