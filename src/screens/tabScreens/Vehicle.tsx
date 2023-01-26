import { useCallback, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { VStack, Text, useToast } from "native-base";
import { useAuth } from "@hooks/useAuth";

import VehicleSVG from "../../assets/Car driving-cuate.svg";

import { AppError } from "@utils/AppError";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
//import { useInterstitialAd, TestIds } from 'react-native-google-mobile-ads';

import { Button } from "@components/Button";
import { Loading } from "@components/Loading";
import { FipeCard } from "@components/FipeCard";
import { VehicleDetailsCard } from "@components/VehicleDetailsCard";
import { VehicleOwnerDetailsCard } from "@components/VehicleOwnerDetailsCard";

export function Vehicle() {
  /* const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : "ca-app-pub-3940256099942544/1033173712";
    const { isLoaded, isClosed, load, show } = useInterstitialAd(adUnitId, {
        requestNonPersonalizedAdsOnly: true,
    }); */

  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const {
    vehicleDatabase,
    vehicleId
  } = useAuth();

  function handleChangeVehicle() {
    navigation.navigate("changevehicle");
  }

  function handleRegisterVehicle() {
    navigation.navigate("plateregister");
  }
  /* 
    useEffect(() => {
        load();
    }, [load]);

    useEffect(() => {
        if (isClosed) {
            navigation.navigate("tabroutes");
        }
    }, [isClosed, navigation]); */

  /* useFocusEffect(
    useCallback(() => {
      fetchVehicle();
    }, [])
  ); 
 */
  /*   useEffect(() => {
      fetchVehicle();
    }, []); */

  if (isLoading) {
    return <Loading />
  } else {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <VStack flex={1} p={6} justifyContent="center">
            {(vehicleId.token || vehicleId) && vehicleDatabase.data ? (
              <VStack>
                <Text fontSize="lg" fontFamily="heading" color="gray.700" py={2}>
                  Detalhes do seu veículo
                </Text>
                <VehicleDetailsCard
                  vehicleData={vehicleDatabase}
                  changeVehicle={handleChangeVehicle}
                />
                <VehicleOwnerDetailsCard vehicleData={vehicleDatabase} />
                <FipeCard vehicleFipeInfo={vehicleDatabase} />
              </VStack>
            ) : (
              <VStack>
                <VStack
                  alignItems="center"
                  bg="white"
                  borderRadius={6}
                  shadow={3}
                  p={4}
                >
                  <VehicleSVG height={120} width={180} />
                  <Text fontFamily="heading" fontSize="md" color="gray.700">
                    Nenhum veículo cadastrado
                  </Text>
                  <Text
                    fontFamily="body"
                    fontSize="sm"
                    color="gray.400"
                    p={2}
                    textAlign="center"
                    lineHeight="xs"
                  >
                    Para visualizar informações do seu veículo, adicione sua
                    placa!
                  </Text>
                  <Button
                    title="Cadastre seu veículo"
                    variant="gray"
                    titleColor="white"
                    mt={2}
                    onPress={handleRegisterVehicle}
                  />
                </VStack>
              </VStack>
            )}
          </VStack>
        </ScrollView>
      </SafeAreaView>
    );
  }


}

{
  /* <HStack
bg="white"
borderRadius={6}
shadow={3}
px={4}
pt={4}
pb={2}
alignItems="center"
>
<VStack flex={1}>
  <HStack alignItems="center">
    <View bg="blue.300" borderRadius={9999} p={1}>
      <Icon
        as={MaterialCommunityIcons}
        name="chart-line"
        size={5}
        color="gray.700"
      />
    </View>
    <Text
      fontFamily="heading"
      fontSize="md"
      color="gray.700"
      ml={2}
    >
      Valor do veículo pela Fipe
    </Text>
  </HStack>
  <Text
    fontFamily="body"
    fontSize="xs"
    color="gray.400"
    lineHeight="xs"
    my={2}
    mr={2}
  >
    Vem saber como a tabela Fipe está avaliando seu veículo
  </Text>
</VStack>
<GoFowardIconButton onPress={handleRegisterVehicle} />
</HStack> */
}
