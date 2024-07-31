import SelectModel from "./context/SelectModel";
import { useCarsTableContext } from "./context/useCarsTableContext";
import { LoadingSymbol } from "./context/utils/Loading";
import SelectMark from "./SelectMark";

export default function SettingsCard() {
  const { marksAndCount, models } = useCarsTableContext();

  return (
    <div className="mt-10 flex justify-center p-6">
      <div className="card w-full bg-white shadow-xl">
        <div className="card-body">
          <div className="card-actions justify-start">
            {!!marksAndCount ? (
              <SelectMark />
            ) : (
              <div>
                Загрузка марок автомобилей... <LoadingSymbol />
              </div>
            )}
          </div>
          {!!models ? (
            <SelectModel />
          ) : (
            <div>
              Загрузка моделей... <LoadingSymbol />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
