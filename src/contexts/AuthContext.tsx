import { createContext, ReactNode, useState, useEffect } from "react";
import { databaseApi, vehicleDataApi } from "@services/api";
import { UserDTO } from "@dtos/UserDTO";
import { VehicleDTO } from "@dtos/VehicleDTO";
import { VehicleOwnerDTO } from "@dtos/VehicleOwnerDTO";
import { DriversLicenseDTO } from "@dtos/DriversLicenseDTO";
import { VehicleGetInDatabaseDTO } from "@dtos/VehicleGetInDatabaseDTO";
import { VehicleSaveInDatabaseDTO } from "@dtos/VehicleSaveInDatabaseDTO";
import axios from "axios";
import {
  storageUserGet,
  storageUserSave,
  storageUserRemove,
} from "@storage/storageUser";
import {
  storageAuthTokenGet,
  storageAuthTokenSave,
} from "@storage/storageAuthToken";
import { storageVehicleId, storageVehicleIdGet, storageVehicleIdRemove } from "@storage/storageVehicle";

export type AppContextDataProps = {
  user: UserDTO;
  updateUserPhone: (phone: string) => Promise<void>;
  updateUserPassword: (password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  userLogout: () => Promise<void>;
  isLoadingUserStorageData: boolean;
  vehicleOwner: VehicleOwnerDTO;
  vehicle: VehicleDTO;
  vehicleDatabase: VehicleGetInDatabaseDTO;
  getVehicleData: (vehiclePlate: string) => Promise<void>;
  vehicleId: string;
  saveVehicleDataInDatabase: () => Promise<void>;
  deleteVehicle: (id: string) => Promise<void>;
  loadVehicleDataFromDatabase: (newVehicleId: string) => Promise<void>;
  isLoadingVehicleData: boolean;
  getCnhData: (driversLicenseNumber: string) => Promise<void>;
  hasDriversLicense: boolean;
  driversLicenseData: DriversLicenseDTO;
};

type AppContextProviderProps = {
  children: ReactNode;
};

export const AppContext = createContext<AppContextDataProps>(
  {} as AppContextDataProps
);

export function AuthContextProvider({ children }: AppContextProviderProps) {
  const [vehicle, setVehicle] = useState<VehicleDTO>({} as VehicleDTO);
  const [vehicleOwner, setVehicleOwner] = useState<VehicleOwnerDTO>(
    {} as VehicleOwnerDTO
  );
  const [vehicleId, setVehicleId] = useState("");
  const [isLoadingVehicleData, setIsLoadingVehicleData] = useState(false);
  const [vehicleDatabase, setVehicleDatabase] =
    useState<VehicleGetInDatabaseDTO>({} as VehicleGetInDatabaseDTO);

  const [user, setUser] = useState<UserDTO>({} as UserDTO);
  const [userStatus, setUserStatus] = useState<number>();

  const [isLoadingUserStorageData, setIsLoadingUserStorageData] =
    useState(true);

  const [driversLicenseData, setDriversLicenseData] = useState<DriversLicenseDTO>({} as DriversLicenseDTO); 
  const [hasDriversLicense, setHasDriversLicense] = useState(false);

  async function getCnhData(driversLicenseNumber: string) {
    try {
      const response = await axios.get("https://crew-apis-rest.tech/", {
        params: {
          token: "5d5dab57b8d0c6a129267e22a523fa798598b308",
          name: "CnhSids",
          documento: driversLicenseNumber,
        },
      });
      setDriversLicenseData(response.data.Response);
      setHasDriversLicense(true);
    } catch (error) {
      throw error;
    }
  }  

  async function getVehicleData(vehiclePlate: string) {
    try {
      const { data } = await vehicleDataApi.post("/api", {
        placa: vehiclePlate,
      });
      const response = await axios.get("https://crew-apis-rest.tech/", {
        params: {
          token: "5d5dab57b8d0c6a129267e22a523fa798598b308",
          name: "PlacaSegSeg",
          documento: vehiclePlate,
        },
      });
      setVehicleOwner(response.data);
      setVehicle(data);
    } catch (error) {
      throw error;
    }
  }

  async function saveVehicleDataInDatabase() {
    try {
      const mergedVehicleData: VehicleSaveInDatabaseDTO = {
        user_id: user._id,
        placa: vehicle.placa,
        modelo: vehicle.extra.marca_modelo.modelo,
        ano: vehicle.ano,
        anoModelo: vehicle.anoModelo,
        cor: vehicle.cor,
        combustivel: vehicle.extra.combustivel.combustivel,
        tipo_veiculo: vehicle.extra.tipo_veiculo.tipo_veiculo,
        renavam: vehicleOwner.Response.renavam,
        dataEmissaoUltimoCRV: vehicleOwner.Response.dataEmissaoUltimoCRV,
        restricoes: {
          restricao_1: vehicle.extra.restricao_1.restricao,
          restricao_2: vehicle.extra.restricao_2.restricao,
          restricao_3: vehicle.extra.restricao_3.restricao,
          restricao_4: vehicle.extra.restricao_4.restricao,
        },
        nomeProprietario: vehicleOwner.Response.nomeProprietario,
        situacaoVeiculo: vehicleOwner.Response.situacaoVeiculo,
        categoria: vehicleOwner.Response.categoria,
        tipoDocumentoProprietario:
          vehicleOwner.Response.proprietario.tipoDocumentoProprietario,
        numeroDocumentoProprietario:
          vehicleOwner.Response.proprietario.numeroDocumentoProprietario,
        enderecoProprietario:
          vehicleOwner.Response.proprietario.enderecoProprietario,
        texto_valor: vehicle.fipe.dados[0].texto_valor,
        mes_referencia: vehicle.fipe.dados[0].mes_referencia,
      };
      const { data } = await databaseApi.post(
        "/vehicle/create",
        mergedVehicleData
      );
      await storageVehicleId(data);
      setVehicleId(data);
      loadVehicleData();
    } catch (error) {
      throw error;
    }
  }

  async function loadVehicleData() {
    try {
      setIsLoadingVehicleData(true);
      const hasVehicleId = await storageVehicleIdGet();
      if (hasVehicleId.token) {
        setVehicleId(hasVehicleId)
        const { data } = await databaseApi.get(`/vehicle/info/${hasVehicleId.token}`);
        setVehicleDatabase(data);
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingVehicleData(false);
    }
  }

  async function deleteVehicle(id: string) {
    try {
      await databaseApi.get(`/vehicle/delete/${id}`);
      if (vehicleDatabase.data._id === id) {
        await storageVehicleIdRemove();
        setVehicleDatabase({} as VehicleGetInDatabaseDTO);
        setVehicleId("");
      }
    } catch (error) {
      throw error;
    }
  }

  async function loadVehicleDataFromDatabase(newVehicleId: string) {
    try {
      const { data } = await databaseApi.get(`/vehicle/info/${newVehicleId}`);
      await storageVehicleId(newVehicleId);
      setVehicleDatabase(data);
      setVehicleId(newVehicleId);
    } catch (error) {
      throw error;
    }
  }

  async function userLogout() {
    try {
      await storageUserRemove();
      await storageVehicleIdRemove();
      setUser({} as UserDTO);
    } catch (error) {
      throw error;
    }
  }

  async function userAndTokenUpdate(userData: UserDTO, token: string) {
    databaseApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    setUser(userData);
  }

  async function getUserInfo(token: string) {
    try {
      const { data } = await databaseApi.get(`/user/info/${token}`);
      await storageUserSave(data.data[0]);
      setUser(data.data[0]);
    } catch (error) {
      throw error;
    }
  }

  async function signIn(email: string, password: string) {
    try {
      const { data } = await databaseApi.post("/user/login", {
        email,
        password,
      });
      if (data.token) {
        getUserInfo(data.token);
        await storageAuthTokenSave(data.token);
      }
    } catch (error) {
      throw error;
    }
  }

  async function signOut() {
    try {
      setUserStatus(0);
      setIsLoadingUserStorageData(true);
      await storageUserRemove();
      await storageVehicleIdRemove();
      await databaseApi.put(`/user/update/${user._id}`, { status: userStatus });
      setUser({} as UserDTO);
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingUserStorageData(false);
    }
  }

  async function updateUserPhone(phone: string) {
    try {
      getUserInfo(user._id);
      await databaseApi.put(`/user/update/${user._id}`, { phone });
    } catch (error) {
      throw error;
    }
  }

  async function updateUserPassword(password: string) {
    try {
      getUserInfo(user._id);
      await databaseApi.put(`/user/update/${user._id}`, { password });
    } catch (error) {
      throw error;
    }
  }

  async function loadUserData() {
    try {
      setIsLoadingUserStorageData(true);
      const userLogged = await storageUserGet();
      const token = await storageAuthTokenGet();
      if (token && userLogged) {
        userAndTokenUpdate(userLogged, token);
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingUserStorageData(false);
    }
  }

  useEffect(() => {
    loadUserData();
    loadVehicleData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        user,
        vehicleDatabase,
        isLoadingUserStorageData,
        vehicleOwner,
        vehicle,
        vehicleId,
        isLoadingVehicleData,
        hasDriversLicense,
        driversLicenseData,
        updateUserPhone,
        updateUserPassword,
        signIn,
        getVehicleData,
        signOut,
        saveVehicleDataInDatabase,
        deleteVehicle,
        loadVehicleDataFromDatabase,
        userLogout,
        getCnhData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
