import { type z } from "zod";
import type {
  GetModelsCarsAndCountResponseSchema,
  ModelsCarsAndCountSchema,
} from "../schema/getModelsCarsAndCount";
import type { GetModelsForMarkResponseSchema } from "../schema/getModelsForMark";
import type {
  CarSchema,
  GetCarsFromModelsAndMarksRequestSchema,
  GetCarsFromModelsAndMarksResponseSchema,
} from "../schema/getCarsFromModelsAndMarks";
import type {
  GetCountCarsFromModelsAndMarksResponseSchema,
  ModelsSchema,
} from "../schema/getCountCarsFromModelsAndMarks";

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

export type ModelsCarsAndCount = z.infer<typeof ModelsCarsAndCountSchema>;

export type GetCountCarsFromModelsAndMarksResponse = z.infer<
  typeof GetCountCarsFromModelsAndMarksResponseSchema
>;

export type GetCountCarsFromModelsAndMarks = { _id: string; count: number }[];

export type Models = z.infer<typeof ModelsSchema>;
