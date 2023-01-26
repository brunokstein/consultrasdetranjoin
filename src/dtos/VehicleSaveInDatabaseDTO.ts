export type VehicleSaveInDatabaseDTO = {
    user_id: string;
    placa: string;
    ano: string;
    anoModelo: string;
    modelo: string;
    combustivel: string;
    tipo_veiculo: string;
    renavam: string;
    dataEmissaoUltimoCRV: string;
    nomeProprietario: string;
    situacaoVeiculo: string;
    tipoDocumentoProprietario: string;
    numeroDocumentoProprietario: string;
    enderecoProprietario: string;
    categoria: string;
    texto_valor: string;
    mes_referencia: string;
    restricoes: RestrictionsDTO;
    cor: string;
}

type RestrictionsDTO = {
    restricao_1: string;
    restricao_2: string;
    restricao_3: string;
    restricao_4: string;
}