import type { Db } from "mongodb";
import type {
  Car,
  GetCarsFromModelsAndMarksRequest,
  GetCarsFromModelsAndMarksResponse,
} from "~/server/validator/interfaces/interfaces.tableCarApi";

export default async function getCarsFromModelsAndMarks(
  input: GetCarsFromModelsAndMarksRequest,
  db: Db
): Promise<GetCarsFromModelsAndMarksResponse> {
  const { limit, offset, mark, models } = input;

  const filter: { mark: string; model?: { $in: string[] } } = { mark };
  if (models) filter.model = { $in: models };

  const cars = await db
    .collection<Car>("stock")
    .find(filter)
    .skip(offset)
    .limit(limit)
    .sort({ createdAt: "desc" })
    .toArray();

  const res = cars.map((c) => {
    return { ...c, _id: c._id.toString() };
  });

  return res;
}
