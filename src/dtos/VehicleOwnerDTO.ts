export type VehicleOwnerDTO = {
    Response: VehicleOwnerResponseDTO;
}

type VehicleOwnerResponseDTO = {
    categoria: string;
    dataEmissaoUltimoCRV: string;
    renavam: string;
    nomeProprietario: string;
    situacaoVeiculo: string;
    proprietario: OwnerDTO;  
}

type OwnerDTO = {
    enderecoProprietario: string;
	numeroDocumentoProprietario: string;
    tipoDocumentoProprietario: string;
}
// "2021-04-13"

