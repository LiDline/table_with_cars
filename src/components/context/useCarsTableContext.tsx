import React from "react";
import type { CarsTableContextProps } from "~/server/validator/interfaces/interfaces.tableCarUi";

export const CarsTableContext = React.createContext<
  CarsTableContextProps | undefined
>(undefined);

export const useCarsTableContext = () => {
  const context = React.useContext(CarsTableContext);

  if (!context) {
    throw new Error("useCarsTableContext не должен здесь находится!");
  }

  return context;
};
