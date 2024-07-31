import SettingsCard from "./components/SettingsCard";
import { CarsTableProvider } from "./components/context/CarsTableProvider";
import TableCars from "./components/context/TableCars";

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
