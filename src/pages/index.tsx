import TableCars from "~/components/TableCars";
import SettingsCard from "../components/SettingsCard";
import { CarsTableProvider } from "../components/context/CarsTableProvider";

export default function Home() {
  return (
    <>
      <CarsTableProvider>
        <SettingsCard />

        <TableCars />
      </CarsTableProvider>
    </>
  );
}
