import React from "react";

import type { CarsTableContextProps } from "~/server/validator/interfaces/interfaces.tableCarUi";

import { CarsTableContext } from "./useCarsTableContext";
import { api } from "~/utils/api";
import { LIMITS } from "~/CONST";

interface CarsTableProps {
  children: React.ReactNode;
}

export const CarsTableProvider: React.FC<CarsTableProps> = ({ children }) => {
  //---------------------Marks-------------------

  const marksAndCount = api.carTable.getMarksCarsAndCount.useQuery().data;

  const [currentMark, setCurrentMark] = React.useState<string | undefined>(
    marksAndCount?.[0]?._id ?? undefined
  );

  React.useEffect(() => {
    if (marksAndCount?.length) {
      setCurrentMark(marksAndCount[0]?._id);
    }
  }, [marksAndCount]);

  //---------------------Models------------------

  const models = api.carTable.getModelsForMark.useQuery(
    {
      mark: currentMark!,
    },
    { enabled: !!currentMark }
  ).data;

  const [selectedModels, setSelectedModels] = React.useState<(string | null)[]>(
    []
  );

  //---------------------Cars--------------------

  const [limit, setLimit] = React.useState<number>(LIMITS[0] ?? 20);
  const [offset, setOffset] = React.useState<number>(0);
  const countPage = Math.ceil(
    marksAndCount?.filter((v) => v._id === currentMark)[0]?.count ?? 0
  );

  const cars = api.carTable.getCarsFromModelsAndMarks.useQuery(
    {
      models: selectedModels,
      limit,
      offset,
      mark: currentMark!,
    },
    { enabled: !!currentMark }
  ).data;

  //---------------------------------------------

  const contextValue: CarsTableContextProps = {
    marksAndCount,
    models,
    cars,

    currentMark,
    selectedModels,
    limit,
    offset,
    countPage,

    setCurrentMark,
    setSelectedModels,
    setLimit,
    setOffset,
  };

  return (
    <CarsTableContext.Provider value={contextValue}>
      {children}
    </CarsTableContext.Provider>
  );
};
