import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import type { Sort, Where } from "payload";
import z from "zod";
import { sortValues } from "../hooks/search-params";

export const productsRouter = createTRPCRouter({
  getMany: baseProcedure
    .input(
      z.object({
        genre: z.string().nullable().optional(),
        minPrice: z.string().nullable().optional(),
        maxPrice: z.string().nullable().optional(),
        sort: z.enum(sortValues).nullable().optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      const where: Where = {};
      let sort: Sort = "-createdAt";

      if (input.sort === "curated") {
        sort = "-createdAt";
      }
      if (input.sort === "hot_and_new") {
        sort = "+createdAt";
      }
      if (input.sort === "trending") {
        sort = "-createdAt";
      }

      if (input.minPrice) {
        where.price = {
          greater_than_equal: input.minPrice,
        };
      }

      if (input.maxPrice) {
        where.price = {
          less_than_equal: input.maxPrice,
        };
      }

      if (input.genre) {
        const genreData = await ctx.db.find({
          collection: "Genre",
          limit: 1,
          depth: 1,
          pagination: false,
          where: {
            slug: {
              equals: input.genre,
            },
          },
        });

        const genre = genreData.docs[0];

        if (genre) {
          where["genre.slug"] = {
            equals: genre.slug,
          };
        }
      }

      const data = await ctx.db.find({
        collection: "products",
        depth: 1, // populate "genre" & "image"
        where,
        sort,
      });

      return data;
    }),
});
