import { z } from "zod";
import { MarkSchema } from "./getModelsCarsAndCount";

export const GetModelsForMarkRequestSchema = z.object({ mark: MarkSchema });

export const GetModelsForMarkResponseSchema = z.array(z.string());
