import { z } from "zod";

export const ModelsSchema = z.array(z.string().or(z.literal(null))).default([]);

export const GetCountCarsFromModelsAndMarksRequestSchema = z.object({
  mark: z.string(),
  models: ModelsSchema,
});

export const GetCountCarsFromModelsAndMarksResponseSchema = z.object({
  count: z.number().optional(),
});
