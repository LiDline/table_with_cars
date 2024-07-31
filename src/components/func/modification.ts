import type { Car } from "~/server/validator/interfaces/interfaces.tableCarApi";

export default function modification(c: Car) {
  const volume = c.engine.volume
    ? `${
        Number.isInteger(c.engine.volume)
          ? c.engine.volume + ".0"
          : c.engine.volume
      }`
    : "";

  const transmission = c.engine.transmission ? `${c.engine.transmission}` : "";

  const power = c.engine.power ? `(${c.engine.power} л.с.)` : "";

  const res = `${volume} ${transmission} ${power}`;

  return res;
}
