import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { VStack, Text, HStack, ScrollView, useToast } from "native-base";

import { databaseApi } from "@services/api";
import { AppError } from "@utils/AppError";

import { useAuth } from "@hooks/useAuth";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
//import { BannerAd, BannerAdSize, TestIds, useInterstitialAd } from 'react-native-google-mobile-ads';

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { BackIconButton } from "@components/BackIconButton";
import { VehicleDTO } from "@dtos/VehicleDTO";

export function ChangeVehicle() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const { vehicle, loadVehicleOwnerData, loadVehicleData, loadVehicleDataFromDatabase, user } = useAuth();

  const toast = useToast();

  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingNewVehicle, setIsLoadingNewVehicle] = useState(false);

  const [vehiclePlate, setVehiclePlate] = useState("");

  /*  const adUnitIdBanner = __DEV__ ? TestIds.BANNER : "ca-app-pub-3940256099942544/6300978111";

    const adUnitIdInterstitial = __DEV__ ? TestIds.INTERSTITIAL : "ca-app-pub-3940256099942544/1033173712";
    const { isLoaded, isClosed, load, show } = useInterstitialAd(adUnitIdInterstitial, {
        requestNonPersonalizedAdsOnly: true,
    }); */

  function handleGoBack() {
    navigation.goBack();
  }

  async function loadVehicleInfoFromDatabase(vehicleId: string) {
    try {
      setIsLoadingNewVehicle(true);
      await loadVehicleDataFromDatabase(vehicleId);
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingNewVehicle(false);
    }
  }

  async function deleteVehicleInfoFromDatabase(oldVehicleId: string) {
    try {

    } catch (error) {
      console.log(error);
    }
  }
  
  async function handleSaveNewVehiclePlate(newVehiclePlate: string) {
    try {
      setIsLoading(true);
      if (vehicle.placa === newVehiclePlate) {
        toast.show({
          title: "Placa já cadastrada",
          placement: "top",
          bgColor: "red.500",
        });
        return;
      }
      await loadVehicleData(newVehiclePlate);
      await loadVehicleOwnerData(newVehiclePlate);
      navigation.navigate("tabroutes");
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Nao foi possivel entrar. Tente novamente mais tarde.";

      setIsLoading(false);

      toast.show({
        title,
        placement: "top",
        bgColor: "red.500",
      });
    } finally {
      setIsLoading(false);
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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <VStack p={6} flex={1}>
          <BackIconButton onPress={handleGoBack} />
          <VStack mt={4}>
            <Text fontFamily="heading" fontSize="xl" color="gray.700" mb={2}>
              Trocar veículo
            </Text>
            <Text fontFamily="body" fontSize="sm" color="gray.400">
              Todas as informações dos seus outros veículos ficarão guardadas
              para você consultar novamente.
            </Text>

            <HStack justifyContent="space-between" my={2}>
              <Text fontFamily="body" fontSize="md" color="gray.500">
                Placa do veículo
              </Text>
              <Text fontFamily="heading" fontSize="md" color="blue.700">
                Veículo atual: {vehicle.placa}
              </Text>
            </HStack>
            <Input
              returnKeyType="send"
              placeholder="XXXXXXX"
              autoCapitalize="characters"
              onChangeText={(text) => setVehiclePlate(text)}
              onSubmitEditing={() => handleSaveNewVehiclePlate}
            />
          </VStack>

          <VStack
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
          </VStack>

          <Button
            title="Salvar"
            variant="blue"
            titleColor="white"
            isLoading={isLoading}
            onPress={() => handleSaveNewVehiclePlate(vehiclePlate)}
          />
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}

/*   <BannerAd
                        unitId={adUnitIdBanner}
                        size={BannerAdSize.MEDIUM_RECTANGLE}
                        requestOptions={{
                            requestNonPersonalizedAdsOnly: true,
                        }}
                    /> */
