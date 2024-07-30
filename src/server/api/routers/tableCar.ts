// import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import getModelsCarsAndCount from "./tableCar/getModelsCarsAndCount";
import { GetModelsCarsAndCountResponseSchema } from "~/server/validator/schema/getModelsCarsAndCount";
import {
  GetModelsForMarkRequestSchema,
  GetModelsForMarkResponseSchema,
} from "~/server/validator/schema/getModelsForMark";
import getModelsForMark from "./tableCar/getModelsForMark";

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

  getModelsForMark: publicProcedure
    .input(GetModelsForMarkRequestSchema)
    .output(GetModelsForMarkResponseSchema)
    .query(async ({ ctx, input }) => {
      const db = ctx.db;

      const res = await getModelsForMark(input.model, db);

      return res;
    }),
});
