import { useCallback, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {  useNavigation } from "@react-navigation/native";
import { VStack, Text, useToast, FlatList } from "native-base";

import { AppError } from "@utils/AppError";
import { databaseApi } from "@services/api";
import { VehiclesListDTO } from "@dtos/VehiclesListDTO";

import { useAuth } from "@hooks/useAuth";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
//import { BannerAd, BannerAdSize, TestIds, useInterstitialAd } from 'react-native-google-mobile-ads';

import { Button } from "@components/Button";
import { Loading } from "@components/Loading";
import { BackIconButton } from "@components/BackIconButton";
import { VehicleListCard } from "@components/VehicleListCard";

export function ChangeVehicle() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const { vehicleDatabase, user, deleteVehicle, vehicleId, loadVehicleDataFromDatabase } = useAuth();

  const toast = useToast();

  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingNewVehicle, setIsLoadingNewVehicle] = useState(false);
  const [allVehiclesList, setAllVehiclesList] = useState<VehiclesListDTO[]>([]);
  /*  const adUnitIdBanner = __DEV__ ? TestIds.BANNER : "ca-app-pub-3940256099942544/6300978111";

  const adUnitIdInterstitial = __DEV__ ? TestIds.INTERSTITIAL : "ca-app-pub-3940256099942544/1033173712";
  const { isLoaded, isClosed, load, show } = useInterstitialAd(adUnitIdInterstitial, {
      requestNonPersonalizedAdsOnly: true,
  }); */

  function handleGoBack() {
    navigation.goBack();
  }

  function handleNewVehiclePlateRegister() {
    navigation.navigate("plateregister");
  }

  async function loadVehiclesFromDatabase() {
    try {
      setIsLoading(true);
      const { data } = await databaseApi.get(`/vehicle/list/${user._id}`)
      setAllVehiclesList(data.data);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Não foi possível carregar os veiculos. Tente novamente mais tarde.";

      toast.show({
        title,
        placement: "top",
        bgColor: "red.500",
      });
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteVehicleInfoFromDatabase(oldVehicleId: string) {
    try {
      setIsLoading(true);
      await deleteVehicle(oldVehicleId);
      toast.show({
        title: "Veiculo removido com sucesso!",
        placement: "top",
        bgColor: "green.500"
      })
      await loadVehiclesFromDatabase();
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Não foi possível deletar o veiculo. Tente novamente mais tarde.";

      toast.show({
        title,
        placement: "bottom",
        bgColor: "red.500",
      });
    } finally {
      setIsLoading(false)
    }
  }

  async function loadSelectedVehicle(selectedVehicleId: string) {
    try {
      setIsLoadingNewVehicle(true);
      await loadVehicleDataFromDatabase(selectedVehicleId);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Não foi possível selecionar o veiculo. Tente novamente mais tarde.";

      toast.show({
        title,
        placement: "bottom",
        bgColor: "red.500",
      }); 
    } finally {
      setIsLoadingNewVehicle(false);
    }
  }
  /* useEffect(() => {
        load();
    }, [load]);

    useEffect(() => {
        if (isClosed) {
            navigation.navigate("tabroutes");
        }
    }, [isClosed, navigation]); */
  useEffect(() => {
    loadVehiclesFromDatabase();
  }, []);

  if (isLoading || isLoadingNewVehicle) {
    return <Loading />
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <VStack p={6} flex={1}>
        <BackIconButton onPress={handleGoBack} />
        <VStack mt={4} flex={1}>
          {
            (vehicleId.token || vehicleId) && vehicleDatabase.data ?
              <VStack>
                <Text fontFamily="heading" fontSize="xl" color="gray.700" mb={2}>
                  Trocar veículo
                </Text>
                <Text fontFamily="body" fontSize="sm" color="gray.400">
                  Todas as informações dos seus outros veículos ficarão guardadas
                  para você consultar novamente.
                </Text>
                <Text fontFamily="heading" fontSize="md" color="blue.700" mt={2}>
                  Veículo atual: {vehicleDatabase.data.placa}
                </Text>
                <FlatList
                  data={allVehiclesList}
                  keyExtractor={item => item._id}
                  renderItem={({ item }) => (
                    <VehicleListCard
                      vehicleList={item}
                      deleteVehicle={() => deleteVehicleInfoFromDatabase(item._id)}
                      loadSelectedVehicle={() => loadSelectedVehicle(item._id)}
                    />
                  )}
                  showsVerticalScrollIndicator={false}
                  my={4}
                />
              </VStack>
              :
              <Text>
                Nao ha nenhum veiculo cadastrado ainda, {'\n'}Vamos cadastrar?
              </Text>
          }
        </VStack>
        <Button
          title="Registrar nova placa"
          titleColor="white"
          variant="blue"
          onPress={handleNewVehiclePlateRegister}
        />
      </VStack>
    </SafeAreaView>
  );
}

/* <VStack
bg="white"
borderRadius={6}
borderWidth={1}
borderColor="gray.700"
px={4}
py={2}
mb={12}
flex={1}
>
<Text fontFamily="heading" fontSize="xl" color="gray.700" mb={2}>
  Consultas recentes
</Text>
<Text fontFamily="body" fontSize="sm" color="gray.400">
  Acesse rapidamente seus veículos clicando na placa.
</Text>
</VStack> */