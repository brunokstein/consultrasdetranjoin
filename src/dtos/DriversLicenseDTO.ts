export type DriversLicenseDTO = {
    DadosDoCondutor: UserDriversLicenseDTO;
}

type UserDriversLicenseDTO = {
    Cnh: string;
    Uf: string;
    Categoria: string;
    Nome: string;
    Rg: UserRegisterDTO;
    Vencimento: string;
    DataPrimeiraHabilitacao: string;
    Habilitado: string;
}

type UserRegisterDTO ={
    RgNumero: string
    RgOrgaoExpeditor: string;
    RgUf: string;
}

