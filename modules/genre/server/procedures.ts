import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import configPromise from "@payload-config";
import { getPayload } from "payload";

export const genresRouter = createTRPCRouter({
  getMany: baseProcedure.query(async ({ ctx }) => {
    const data = await ctx.db.find({
      collection: "Genre",
      pagination: false,
      sort: "name",
    });

    return data.docs;
  }),
});
