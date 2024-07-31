import { z } from "zod";
import { GetCountCarsFromModelsAndMarksRequestSchema } from "./getCountCarsFromModelsAndMarks";

export const GetCarsFromModelsAndMarksRequestSchema =
  GetCountCarsFromModelsAndMarksRequestSchema.extend({
    limit: z.number(),
    offset: z.number(),
  });

export const CarSchema = z.object({
  _id: z.string(),
  mark: z.string(),
  model: z.string().or(z.literal(null)),
  engine: z.object({
    power: z.number(),
    volume: z.number(),
    transmission: z.string(),
    fuel: z.string(),
  }),
  drive: z.string().or(z.literal(null)),
  equipmentName: z.string(),
  price: z.number(),
  createdAt: z.date(),
});

export const GetCarsFromModelsAndMarksResponseSchema = z
  .array(CarSchema)
  .default([]);
