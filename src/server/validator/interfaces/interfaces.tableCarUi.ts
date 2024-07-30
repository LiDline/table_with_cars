import type {
  GetCarsFromModelsAndMarksResponse,
  GetModelsCarsAndCountResponse,
} from "./interfaces.tableCarApi";

export interface CarsTableContextProps {
  marksAndCount: GetModelsCarsAndCountResponse | undefined;
  models: string[] | undefined;
  cars: GetCarsFromModelsAndMarksResponse | undefined;

  currentMark: string | undefined;
  selectedModels: string[] | undefined;
  limit: number;
  offset: number;
  countPage: number;

  setCurrentMark: React.Dispatch<React.SetStateAction<string | undefined>>;
  setSelectedModels: React.Dispatch<React.SetStateAction<string[] | undefined>>;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
}
