import { TABLE_HEADERS } from "~/CONST";
import { useCarsTableContext } from "./useCarsTableContext";
import { LoadingSymbol } from "./utils/Loading";
import modification from "./func/modification";
import formatDate from "./func/formatDate";
import Card from "./utils/Card";
import Limit from "./Limit";
import Pagination from "./Pagination";

export default function TableCars() {
  const { cars } = useCarsTableContext();

  return (
    <Card InnerPosition="center">
      {!!cars ? (
        <div>
          <div
            className="justify-center overflow-x-auto"
            style={{ maxHeight: "600px" }}
          >
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

          <div className="join relative flex items-center justify-end ">
            <div className="mr-8">
              <Pagination />
            </div>

            <Limit />
          </div>
        </div>
      ) : (
        <div>
          Загрузка таблицы... <LoadingSymbol />
        </div>
      )}
    </Card>
  );
}
