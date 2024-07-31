import type { Models } from "~/server/validator/interfaces/interfaces.tableCarApi";

export default function customFilter(mark: string, models: Models) {
  const filter: { mark: string; model?: { $in: Models } } = { mark };
  if (models?.length) filter.model = { $in: models };

  return filter;
}
