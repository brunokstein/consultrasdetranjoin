import { VehicleExtraDTO } from "./VehicleExtraDTO";
import { VehicleFipeDTO } from "./VehicleFipeDTO";

export type VehicleDTO = {
  placa: string;
  ano: string;
  anoModelo: string;
  cor: string;
  extra: VehicleExtraDTO;
  fipe: VehicleFipeDTO;
};
