import { createContext, ReactNode, useState, useEffect } from "react";
import { databaseApi, vehicleDataApi } from "@services/api";
import { UserDTO } from "@dtos/UserDTO";
import { VehicleDTO } from "@dtos/VehicleDTO";
import { VehicleOwnerDTO } from "@dtos/VehicleOwnerDTO";
import { VehicleSaveInDatabaseDTO } from "@dtos/VehicleDatabaseDTO";
import { VehicleGetInDatabaseDTO } from "@dtos/VehicleGetInDatabaseDTO";
import {
  storageUserGet,
  storageUserSave,
  storageUserRemove,
} from "@storage/storageUser";
import {
  storageAuthTokenGet,
  storageAuthTokenSave,
} from "@storage/storageAuthToken";
import axios from "axios";

export type AppContextDataProps = {
  user: UserDTO;
  updateUserPhone: (phone: string) => Promise<void>;
  updateUserPassword: (password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  isLoadingUserStorageData: boolean;
  vehicleOwner: VehicleOwnerDTO;
  vehicle: VehicleDTO;
  loadVehicleData: (vehiclePlate: string) => Promise<void>;
  loadVehicleDataFromDatabase: (newVehicleId: string) => Promise<void>;
  hasVehiclePlate: boolean;
  vehicleId: string;
  vehicleDatabase: VehicleGetInDatabaseDTO;
  saveVehicleDataInDatabase: () => Promise<void>;
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
  const [vehicleDatabase, setVehicleDatabase] = useState<VehicleGetInDatabaseDTO>(
    {} as VehicleGetInDatabaseDTO
  );
  const [user, setUser] = useState<UserDTO>({} as UserDTO);

  const [allVehicles, setAllVehicles] = useState([]);

  const [vehicleId, setVehicleId] = useState("");
  const [hasVehiclePlate, setHasVehiclePlate] = useState(false);
  //const [userId, setUserId] = useState("");
  const [userStatus, setUserStatus] = useState<number>();

  const [isLoadingUserStorageData, setIsLoadingUserStorageData] =
    useState(true);

  async function loadVehicleData(vehiclePlate: string) {
    try {
      const { data } = await vehicleDataApi.post("/api", {
        placa: vehiclePlate,
      });
      const response = await axios.get("https://crew-apis-rest.tech/", {
        params: {
          token: "Isdg8j1k07ixehs0fhjjdxje0d8fxjs358f0hu521jxkxfjx",
          name: "PlacaSegSeg",
          documento: vehiclePlate,
        },
      });
      setVehicleOwner(response.data);
      setVehicle(data);
      setHasVehiclePlate(true);
      /*  const mergedVehicleData: VehicleDatabaseDTO = {...data, ...response};
      saveVehicleDataInDatabase(mergedVehicleData); */
    } catch (error) {
      setHasVehiclePlate(false);
      throw error;
    }
  }

  async function saveVehicleDataInDatabase() {
    try {
      const mergedVehicleData: VehicleSaveInDatabaseDTO = {
        placa: vehicle.placa,
        modelo: vehicle.extra.marca_modelo.modelo,
        ano: vehicle.ano,
        anoModelo: vehicle.anoModelo,
        cor: vehicle.cor,
        combustivel: vehicle.extra.combustivel.combustivel,
        tipo_veiculo: vehicle.extra.tipo_veiculo.tipo_veiculo,
        renavam: vehicleOwner.Response.renavam,
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
      setVehicleId(data);
    } catch (error) {
      throw error;
    }
  }

  async function loadVehicleDataFromDatabase(newVehicleId: string) {
    try {
      console.log(newVehicleId)
      const { data } = await databaseApi.get(`/vehicle/info/${newVehicleId}`);
      console.log(data);
      //setVehicleDatabase(data);
    } catch (error) {
      console.log(error);
      //throw error;
    }
  }

  async function loadAllVehiclesFromDatabase(userID: string) {
    try {
      const { data } = await databaseApi.get(`/vehicle/list/${userID}`);
      setAllVehicles(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteVehicleFromDatabase(oldVehicleId: string) {
    try {
      await databaseApi.get(`/vehicle/delete/${oldVehicleId}`);
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
      console.log(error);
      throw error;
    } finally {
      setIsLoadingUserStorageData(false);
    }
  }

  useEffect(() => {
    loadUserData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        user,
        updateUserPhone,
        updateUserPassword,
        signIn,
        isLoadingUserStorageData,
        vehicleOwner,
        vehicle,
        vehicleId,
        loadVehicleData,
        hasVehiclePlate,
        signOut,
        loadVehicleDataFromDatabase,
        saveVehicleDataInDatabase,
        vehicleDatabase,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
