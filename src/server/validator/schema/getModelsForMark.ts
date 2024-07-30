import { z } from "zod";

export const GetModelsForMarkRequestSchema = z.object({ mark: z.string() });

export const GetModelsForMarkResponseSchema = z.array(z.string());
