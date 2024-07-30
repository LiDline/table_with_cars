import { z } from "zod";

export const GetModelsCarsAndCountResponseSchema = z.array(
  z.object({ _id: z.string(), count: z.number() })
);
