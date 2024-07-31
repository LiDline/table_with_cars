import { useCarsTableContext } from "./context/useCarsTableContext";
import SelectMark from "./SelectMark";

export default function SettingsCard() {
  const { marksAndCount } = useCarsTableContext();

  return <>{!!marksAndCount && <SelectMark />}</>;
}
