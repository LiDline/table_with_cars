import type { Db } from "mongodb";
import type {
  GetModelsForMarkResponse,
  Mark,
} from "~/server/validator/interfaces/interfaces.tableCarApi";

export default async function getModelsForMark(
  mark: Mark,
  db: Db
): Promise<GetModelsForMarkResponse> {
  const models = (await db
    .collection("stock")
    .aggregate([{ $match: { mark } }, { $group: { _id: "$model" } }])
    .toArray()) as { _id: string }[];

  const res = models.map((m) => m._id);

  return res;
}