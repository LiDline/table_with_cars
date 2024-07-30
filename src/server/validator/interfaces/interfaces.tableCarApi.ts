import { type z } from "zod";
import type {
  MarkSchema,
  GetModelsCarsAndCountResponseSchema,
} from "../schema/getModelsCarsAndCount";
import type { GetModelsForMarkResponseSchema } from "../schema/getModelsForMark";

export type GetModelsCarsAndCountResponse = z.infer<
  typeof GetModelsCarsAndCountResponseSchema
>;

export type Mark = z.infer<typeof MarkSchema>;

export type GetModelsForMarkResponse = z.infer<
  typeof GetModelsForMarkResponseSchema
>;
