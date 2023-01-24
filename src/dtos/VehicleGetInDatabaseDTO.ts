export type VehicleGetInDatabaseDTO = {
  data: VehicleDatabaseDTO;
};

type VehicleDatabaseDTO = {
  _id: string;
  placa: string;
  modelo: string;
  ano: string;
  anoModelo: string;
  cor: string;
  combustivel: string;
  tipo_veiculo: string;
  renavam: string;
  restricoes: RestrictionsDTO;
  nomeProprietario: string;
  situacaoVeiculo: string;
  categoria: string;
  tipoDocumentoProprietario: string;
  numeroDocumentoProprietario: string;
  enderecoProprietario: string;
  texto_valor: string;
  mes_referencia: string;
};

type RestrictionsDTO = {
  restricao_1: string;
  restricao_2: string;
  restricao_3: string;
  restricao_4: string;
};
