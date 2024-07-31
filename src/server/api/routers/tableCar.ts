import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import getModelsCarsAndCount from "./tableCar/getModelsCarsAndCount";
import { GetModelsCarsAndCountResponseSchema } from "~/server/validator/schema/getModelsCarsAndCount";
import {
  GetModelsForMarkRequestSchema,
  GetModelsForMarkResponseSchema,
} from "~/server/validator/schema/getModelsForMark";
import getModelsForMark from "./tableCar/getModelsForMark";
import {
  GetCarsFromModelsAndMarksRequestSchema,
  GetCarsFromModelsAndMarksResponseSchema,
} from "~/server/validator/schema/getCarsFromModelsAndMarks";
import getCarsFromModelsAndMarks from "./tableCar/getCarsFromModelsAndMarks";
import {
  GetCountCarsFromModelsAndMarksRequestSchema,
  GetCountCarsFromModelsAndMarksResponseSchema,
} from "~/server/validator/schema/getCountCarsFromModelsAndMarks";
import getCountCarsFromModelsAndMarks from "./tableCar/getCountCarsFromModelsAndMarks";

export const tableCarRouter = createTRPCRouter({
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

      const res = await getModelsForMark(input.mark, db);

      return res;
    }),

  getCountCarsFromModelsAndMarks: publicProcedure
    .input(GetCountCarsFromModelsAndMarksRequestSchema)
    .output(GetCountCarsFromModelsAndMarksResponseSchema)
    .query(async ({ ctx, input }) => {
      const db = ctx.db;

      const res = await getCountCarsFromModelsAndMarks(
        input.mark,
        input.models,
        db
      );

      return res;
    }),

  getCarsFromModelsAndMarks: publicProcedure
    .input(GetCarsFromModelsAndMarksRequestSchema)
    .output(GetCarsFromModelsAndMarksResponseSchema)
    .query(async ({ ctx, input }) => {
      const db = ctx.db;

      const res = await getCarsFromModelsAndMarks(input, db);

      return res;
    }),
});
