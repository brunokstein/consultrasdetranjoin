export type VehicleExtraDTO = {
  combustivel: VehicleFuelDTO;
  marca_modelo: VehicleModelDTO;
  restricao_1: Restriction_1_DTO;
  restricao_2: Restriction_2_DTO;
  restricao_3: Restriction_3_DTO;
  restricao_4: Restriction_4_DTO;
  tipo_veiculo: VehicleTypeDTO;
};

type VehicleModelDTO = {
  modelo: string;
};

type VehicleFuelDTO = {
  combustivel: string;
};

type VehicleTypeDTO = {
  tipo_veiculo: string;
};
type Restriction_1_DTO = {
  id: number;
  restricao: string;
};
type Restriction_2_DTO = {
  id: number;
  restricao: string;
};
type Restriction_3_DTO = {
  id: number;
  restricao: string;
};
type Restriction_4_DTO = {
  id: number;
  restricao: string;
};
