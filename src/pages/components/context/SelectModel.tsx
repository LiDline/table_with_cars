import { useCarsTableContext } from "./useCarsTableContext";

export default function SelectModel() {
  const { models, selectedModels, setSelectedModels } = useCarsTableContext();

  const id = "ChoiceModel";

  return (
    <div
      className="dropdown w-full"
      style={{ position: "relative", maxWidth: "400px" }}
    >
      <div className="form-control relative mt-5 w-full">
        <div
          id={id}
          tabIndex={0}
          className={`peer flex items-center justify-between rounded-lg border-2 border-gray-300  bg-transparent p-4 placeholder-transparent  hover:border-gray-500 focus:border-blue-500 focus:outline-none focus:ring-0`}
        >
          {selectedModels && (
            <div className="pr-2">
              {selectedModels.map((m, i) => (
                <span
                  key={i}
                  className="badge mb-1 flex h-full border-none bg-[#223354] bg-opacity-10"
                >
                  <div className="flex flex-row items-center justify-between p-1">
                    <p className="text-black">{m ?? "Не указана модель"}</p>
                    <button
                      id={`${m}_clear`}
                      className="btn-ghost btn-sm btn-circle btn"
                      onClick={() => {
                        setSelectedModels((prev) => {
                          const newData = prev?.filter((p) => p != m);

                          return newData;
                        });
                      }}
                      type="button"
                    >
                      <svg
                        className="h-5 w-5 fill-red-500"
                        viewBox="0 0 24 24"
                        data-testid="CancelIcon"
                      >
                        <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
                      </svg>
                    </button>
                  </div>
                </span>
              ))}
            </div>
          )}

          {selectedModels?.length ? (
            <button
              id={`${id}_clear`}
              className="btn-ghost btn-sm btn"
              onClick={() => {
                setSelectedModels([]);
              }}
              type="button"
            >
              <svg
                className="h-5 w-5 fill-red-500"
                viewBox="0 0 24 24"
                data-testid="CloseIcon"
              >
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </svg>
            </button>
          ) : (
            <button className="btn-ghost btn-sm btn" type="button">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                data-testid="KeyboardArrowDownOutlinedIcon"
                onClick={() => {
                  document.getElementById(`${id}`)?.focus();
                }}
              >
                <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"></path>
              </svg>
            </button>
          )}
        </div>
        {selectedModels?.length ? (
          <label
            htmlFor={id}
            className="absolute start-1 top-1 z-10 origin-[0] -translate-y-3 scale-75 transform bg-slate-100 px-2 text-sm  peer-focus:text-blue-600"
          >
            {"Модели"}
          </label>
        ) : (
          <label
            htmlFor={id}
            className="absolute start-1 top-1/2 z-10 origin-[0] -translate-y-1/2 scale-100 transform bg-transparent px-2 text-lg peer-focus:top-1 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:bg-slate-100 peer-focus:px-2 peer-focus:text-blue-600"
          >
            {"Модели"}
          </label>
        )}
      </div>
      <ul
        className="dropdown-content menu z-[11]  max-h-[200px] w-full flex-row overflow-y-auto rounded-box bg-slate-50 p-2 shadow blur-none"
        style={{ scrollbarWidth: "thin", scrollbarColor: "#4a5568 #edf2f7" }}
      >
        {models?.map((m, i) => (
          <li className="w-full" key={i}>
            <button
              type="button"
              onClick={() => {
                setSelectedModels((prev) => {
                  const newArray = prev.includes(m) ? prev : [...prev, m];

                  return newArray;
                });
                document.getElementById(`${id}`)?.focus();
              }}
            >
              {m ?? "Не указана модель"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
