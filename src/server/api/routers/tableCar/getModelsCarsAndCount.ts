import type { Db } from "mongodb";
import { type GetModelsCarsAndCountResponse } from "~/server/validator/interfaces/interfaces.tableCarApi";

export default async function getModelsCarsAndCount(
  db: Db
): Promise<GetModelsCarsAndCountResponse> {
  const aggregationPipeline = [
    {
      $group: {
        _id: "$mark",
        count: { $sum: 1 },
      },
    },
    {
      $sort: { _id: 1 },
    },
  ];

  const res = (await db
    .collection("stock")
    .aggregate(aggregationPipeline)
    .toArray()) as GetModelsCarsAndCountResponse;

  return res;
}
