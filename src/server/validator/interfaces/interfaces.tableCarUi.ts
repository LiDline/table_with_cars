import type React from "react";

import type {
  GetCarsFromModelsAndMarksResponse,
  GetModelsCarsAndCountResponse,
} from "./interfaces.tableCarApi";

export interface CarsTableContextProps {
  marksAndCount: GetModelsCarsAndCountResponse | undefined;
  models: (string | null)[] | undefined;
  cars: GetCarsFromModelsAndMarksResponse | undefined;

  currentMark: string | undefined;
  selectedModels: (string | null)[] | undefined;
  limit: number;
  offset: number;
  countPage: number;

  setCurrentMark: React.Dispatch<React.SetStateAction<string | undefined>>;
  setSelectedModels: React.Dispatch<React.SetStateAction<(string | null)[]>>;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
}

export interface ChildrenProps {
  children: React.ReactNode;
}
