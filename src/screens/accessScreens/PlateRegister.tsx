import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { VStack, Text, useToast } from "native-base";

import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { useAuth } from "@hooks/useAuth";
import { AppError } from "@utils/AppError";
//import { BannerAd, BannerAdSize, TestIds, useInterstitialAd } from 'react-native-google-mobile-ads';

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { BackIconButton } from "@components/BackIconButton";

export function PlateRegister() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const toast = useToast();
  const { getVehicleData } = useAuth();

  const [vehiclePlate, setVehiclePlate] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  /* const adUnitIdBanner = __DEV__ ? TestIds.BANNER : "ca-app-pub-3940256099942544/6300978111";

    const adUnitIdInterstitial = __DEV__ ? TestIds.INTERSTITIAL : "ca-app-pub-3940256099942544/1033173712";
    const { isLoaded, isClosed, load, show } = useInterstitialAd(adUnitIdInterstitial, {
        requestNonPersonalizedAdsOnly: true,
    }); */

  function handleGoBack() {
    navigation.goBack();
  }
 // erro 
  async function handleRegisteredVehiclePlate() {
    try {
      setIsLoading(true);
      await getVehicleData(vehiclePlate);
      navigation.navigate("vehiclepreview");
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Não foi possível verificar a placa. Tente novamente mais tarde.";

      toast.show({
        title,
        placement: "top",
        bgColor: "red.500",
      });
    } finally {
      setIsLoading(false);
    }

    /*   if (isLoaded) {
            show();
        } else {
          
        } */
  }

  /*  useEffect(() => {
        load();
    }, [load]);

    useEffect(() => {
        if (isClosed) {
            navigation.navigate("tabroutes");
        }
    }, [isClosed, navigation]);
 */
  return (
    <SafeAreaView style={{ flex: 1, padding: 24 }}>
      <BackIconButton onPress={handleGoBack} />
      <VStack flex={1}>
        <Text
          fontFamily="heading"
          fontSize="xl"
          color="gray.700"
          lineHeight="sm"
          mt={4}
        >
          Você pode me dizer qual a {"\n"}placa do veículo?
        </Text>
        <Text
          fontFamily="body"
          fontSize="md"
          color="gray.400"
          lineHeight="xs"
          mt={4}
          mb={2}
        >
          Assim conseguimos mostrar a situação do seu veículo para você dirigir
          tranquilo.
        </Text>
        <Text fontFamily="heading" fontSize="md" color="gray.700" mb={2}>
          Placa do veículo
        </Text>
        <Input
          returnKeyType="send"
          placeholder="XXXXXXX"
          autoCapitalize="characters"
          onChangeText={(text) => setVehiclePlate(text)}
          onSubmitEditing={handleRegisteredVehiclePlate}
        />
        {/* <BannerAd
                    unitId={adUnitIdBanner}
                    size={BannerAdSize.MEDIUM_RECTANGLE}
                    requestOptions={{
                        requestNonPersonalizedAdsOnly: true,
                    }}
                /> */}
      </VStack>
      <VStack>
        <Button
          variant="blue"
          title="Procurar"
          titleColor="white"
          isLoading={isLoading}
          onPress={handleRegisteredVehiclePlate}
        />
      </VStack>
    </SafeAreaView>
  );
}
