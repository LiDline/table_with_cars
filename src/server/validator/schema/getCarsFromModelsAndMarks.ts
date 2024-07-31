import { z } from "zod";

export const GetCarsFromModelsAndMarksRequestSchema = z.object({
  limit: z.number(),
  offset: z.number(),
  mark: z.string(),
  models: z.array(z.string()).default([]).optional(),
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
