// import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import getModelsCarsAndCount from "./tableCar/getModelsCarsAndCount";
import { GetModelsCarsAndCountResponseSchema } from "~/server/validator/schema/getModelsCarsAndCount";

export const tableCarRouter = createTRPCRouter({
  test: publicProcedure.mutation(() => {
    console.log("hello!");

    return;
  }),

  getMarksCarsAndCount: publicProcedure
    .output(GetModelsCarsAndCountResponseSchema)
    .query(async ({ ctx }) => {
      const db = ctx.db;

      const res = await getModelsCarsAndCount(db);

      return res;
    }),
});
