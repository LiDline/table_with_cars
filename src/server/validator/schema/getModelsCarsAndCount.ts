import { z } from "zod";

export const ModelsCarsAndCountSchema = z.object({
  _id: z.string(),
  count: z.number(),
});

export const GetModelsCarsAndCountResponseSchema = z.array(
  ModelsCarsAndCountSchema
);
