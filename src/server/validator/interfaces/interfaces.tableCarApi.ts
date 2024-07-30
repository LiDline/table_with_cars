import { type z } from "zod";
import { type GetModelsCarsAndCountResponseSchema } from "../schema/getModelsCarsAndCount";

export type GetModelsCarsAndCountResponse = z.infer<
  typeof GetModelsCarsAndCountResponseSchema
>;
