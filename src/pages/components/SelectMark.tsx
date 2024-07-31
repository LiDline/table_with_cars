import { useCarsTableContext } from "./context/useCarsTableContext";

export default function SelectMark() {
  const { marksAndCount, currentMark, setCurrentMark } = useCarsTableContext();

  return (
    <ul className="menu menu-vertical rounded-box lg:menu-horizontal bg-white">
      {marksAndCount?.map((val) => {
        return (
          <li key={val._id}>
            <button
              onClick={() => {
                setCurrentMark(val._id);
              }}
              className={val._id === currentMark ? "active" : ""}
            >
              {val._id}: {val.count}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
