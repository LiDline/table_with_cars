import { TABLE_HEADERS } from "~/CONST";
import { useCarsTableContext } from "./useCarsTableContext";
import { LoadingSymbol } from "./utils/Loading";
import modification from "./func/modification";
import formatDate from "./func/formatDate";
import Card from "./utils/Card";
import Limit from "./Limit";

export default function TableCars() {
  const { cars } = useCarsTableContext();

  return (
    <Card InnerPosition="center">
      {!!cars ? (
        <div className="justify-center overflow-x-auto">
          <table className="table  text-lg">
            <thead className="text-lg">
              <tr>
                {TABLE_HEADERS.map((h, id) => (
                  <th key={id}>{h}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {cars?.map((c) => {
                return (
                  <tr key={c._id}>
                    <th>{c._id}</th>

                    <th>
                      {c.mark} {c.model ?? ""}
                    </th>

                    <th>{modification(c)}</th>

                    <th>{c.equipmentName ?? ""}</th>

                    <th>
                      {c.price
                        ? `${c.price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽`
                        : "-"}
                    </th>

                    <th>{formatDate(c.createdAt)}</th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          Загрузка таблицы... <LoadingSymbol />
        </div>
      )}

      <Limit />
    </Card>
  );
}
