import { type z } from "zod";
import type { GetModelsCarsAndCountResponseSchema } from "../schema/getModelsCarsAndCount";
import type { GetModelsForMarkResponseSchema } from "../schema/getModelsForMark";
import type {
  CarSchema,
  GetCarsFromModelsAndMarksRequestSchema,
  GetCarsFromModelsAndMarksResponseSchema,
} from "../schema/getCarsFromModelsAndMarks";

export type GetModelsCarsAndCountResponse = z.infer<
  typeof GetModelsCarsAndCountResponseSchema
>;

export type GetModelsForMarkResponse = z.infer<
  typeof GetModelsForMarkResponseSchema
>;

export type GetCarsFromModelsAndMarksRequest = z.infer<
  typeof GetCarsFromModelsAndMarksRequestSchema
>;

export type GetCarsFromModelsAndMarksResponse = z.infer<
  typeof GetCarsFromModelsAndMarksResponseSchema
>;
export type Car = z.infer<typeof CarSchema>;
