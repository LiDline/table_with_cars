import { z } from "zod";

export const MarkSchema = z.enum([
  "Audi",
  "Chery",
  "Chery Exeed",
  "Geely",
  "Haval",
  "Honda",
  "Hyundai",
  "JAC",
  "Kia",
  "Mitsubishi",
  "Omoda",
  "Sollers",
  "Volkswagen",
  "Volkswagen NFZ",
]);

export const GetModelsCarsAndCountResponseSchema = z.array(
  z.object({ _id: MarkSchema, count: z.number() })
);
