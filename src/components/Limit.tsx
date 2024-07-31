import { LIMITS } from "~/CONST";

import React from "react";
import { useCarsTableContext } from "./context/useCarsTableContext";

export default function Limit() {
  const { limit, setLimit } = useCarsTableContext();

  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const handleDeleteFocus = () => {
    const elem = document.activeElement as HTMLElement;
    if (elem) {
      elem?.blur();
    }
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLimitChange = (l: number) => {
    setLimit(l);
    handleDeleteFocus();
    setIsDropdownOpen(false);
  };

  return (
    <div className="join relative flex items-center justify-end">
      <div className="mr-5 flex flex-row items-center">
        <div>{"Записей на странице" + ":"}</div>

        <button
          className="btn-link btn mr-3 bg-transparent text-black no-underline hover:no-underline"
          onClick={handleDropdownToggle}
        >
          {limit}
          <svg
            className={`h-4 w-4 ${
              isDropdownOpen ? "rotate-180 transform" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <image
              x="0"
              y="0"
              height="100%"
              width="100%"
              href="https://cdn.iconscout.com/icon/free/png-512/free-arrow-direction-down-way-download-34-28594.png?f=webp&w=512"
            />
          </svg>
        </button>

        {isDropdownOpen && (
          <ul className="dropdown-content absolute bottom-full right-0 z-[99] w-auto rounded-box bg-slate-100 p-2 shadow-xl">
            {LIMITS.map((l, i) => (
              <li key={i}>
                <button
                  key={l}
                  value={l}
                  onClick={() => handleLimitChange(l)}
                  className="btn-ghost btn h-full w-full content-center bg-transparent text-black no-underline hover:bg-gray-300 hover:no-underline"
                >
                  {l}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
