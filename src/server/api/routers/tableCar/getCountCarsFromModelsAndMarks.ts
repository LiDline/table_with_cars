import type { Db } from "mongodb";
import type {
  GetCountCarsFromModelsAndMarks,
  GetCountCarsFromModelsAndMarksResponse,
  Models,
} from "~/server/validator/interfaces/interfaces.tableCarApi";
import customFilter from "./func/customFilter";

export default async function getCountCarsFromModelsAndMarks(
  mark: string,
  models: Models,
  db: Db
): Promise<GetCountCarsFromModelsAndMarksResponse> {
  const filter = customFilter(mark, models);

  const res = (await db
    .collection("stock")
    .aggregate([
      { $match: filter },
      {
        $group: {
          _id: "$mark",
          count: { $sum: 1 },
        },
      },
    ])
    .toArray()) as GetCountCarsFromModelsAndMarks;

  return { count: res[0]?.count };
}
