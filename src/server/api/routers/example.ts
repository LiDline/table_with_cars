// import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.collection("jobs").find({}).toArray();
  }),

  test: publicProcedure.mutation(() => {
    console.log("hello!");

    return;
  }),
});
