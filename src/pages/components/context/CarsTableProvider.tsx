import React from "react";

import type { CarsTableContextProps } from "~/server/validator/interfaces/interfaces.tableCarUi";

import { CarsTableContext } from "./useCarsTableContext";

interface CarsTableProps {
  children: React.ReactNode;
}

export const CarsTableProvider: React.FC<CarsTableProps> = ({ children }) => {
  //---------------------const---------------------

  //---------------------useState---------------------

  //---------------------Context---------------------

  const contextValue: CarsTableContextProps = {};

  return (
    <CarsTableContext.Provider value={contextValue}>
      {children}
    </CarsTableContext.Provider>
  );
};
