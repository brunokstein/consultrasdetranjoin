import { useCallback, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { ScrollView, TouchableOpacity } from "react-native";
import { VStack, Text, HStack, Image, Icon } from "native-base";

import { useAuth } from "@hooks/useAuth";

import VehicleSVG from "../../assets/Car driving-cuate.svg";

import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { TabNavigatorRoutesProps } from "@routes/tab.routes";

//import { useInterstitialAd, TestIds } from 'react-native-google-mobile-ads';

import { Button } from "@components/Button";
import { HomeHeader } from "@components/HomeHeader";

export function Home() {
  /*   const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : "ca-app-pub-3940256099942544/1033173712";
    const { isLoaded, isClosed, load, show } = useInterstitialAd(adUnitId, {
        requestNonPersonalizedAdsOnly: true,
    }); */

  const [userName, setUserName] = useState("");
  const { hasVehiclePlate, user } = useAuth();

  const appNavigation = useNavigation<AppNavigatorRoutesProps>();
  const tabNavigation = useNavigation<TabNavigatorRoutesProps>();

  function handleGoToProfileScreen() {
    appNavigation.navigate("profile");
  }

  function handleGoToVehicleScreen() {
    tabNavigation.navigate("vehicle");
  }

  function handleRegisterVehiclePlate() {
    appNavigation.navigate("plateregister");
  }

  function handleChangeVehicle() {
    appNavigation.navigate("changevehicle");
  }

  /* function handleRegisterDriversLicense() {
        navigation.navigate("driverslicenseinfosrequest");
         if (isLoaded) {
            show();
        } else {
            
        } 
    }
 */

  /*   useEffect(() => {
        if (isClosed) {
            navigation.navigate("tabroutes");
        }
    }, [isClosed, navigation]); */

  /*   useFocusEffect(useCallback(() => {
      
    }))
 */
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <VStack flex={1} p={6}>
          <HomeHeader goToProfile={handleGoToProfileScreen} />

          <VStack py={2}>
            <Text
              fontFamily="heading"
              color="gray.700"
              fontSize="2xl"
              letterSpacing="xl"
              lineHeight="xs"
            >
              Oi, {user.name}! {"\n"}Tudo certo?
            </Text>
            <Text
              fontFamily="body"
              color="gray.400"
              fontSize="md"
              mt={4}
              letterSpacing="sm"
              lineHeight="sm"
            >
              Consulte informações de seus veículos.
            </Text>
          </VStack>

          {hasVehiclePlate ? (
            <VStack
              alignItems="center"
              bg="white"
              shadow={4}
              my={4}
              p={4}
              borderRadius={6}
            >
              <VehicleSVG height={120} width={180} />
              <Text fontFamily="heading" fontSize="lg" color="gray.700">
                Veículo cadastrado!
              </Text>
              <Button
                title="Veja os detalhes!"
                variant="blue"
                titleColor="white"
                mt={2}
                onPress={handleGoToVehicleScreen}
              />
            </VStack>
          ) : (
            <VStack
              alignItems="center"
              bg="white"
              shadow={4}
              my={4}
              p={4}
              borderRadius={6}
            >
              <VehicleSVG height={120} width={180} />
              <Text fontFamily="heading" fontSize="md" color="gray.700">
                Cadastre seu veículo
              </Text>
              <Text
                fontFamily="body"
                fontSize="sm"
                color="gray.400"
                p={2}
                textAlign="center"
                lineHeight="xs"
              >
                Para visualizar as informações, adicione a placa do seu veículo!
              </Text>
              <TouchableOpacity onPress={handleRegisterVehiclePlate}>
                <Text
                  fontFamily="heading"
                  fontSize="md"
                  color="blue.500"
                  my={2}
                >
                  Adicionar veículo
                </Text>
              </TouchableOpacity>
            </VStack>
          )}
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}

/* {
    hasCNH ?
        <HomeDriversLicenseStatus variant="ok" />

        :

        <TouchableOpacity onPress={handleRegisterDriversLicense}>
            <HStack
                px={2}
                py={4}
                mt={4}
                bg="white"
                borderRadius={6}
                borderWidth={1}
                borderColor="gray.400"
                alignItems="center"
            >
                <HStack
                    flex={1}
                    alignItems="center"
                >
                    <View
                        p={2}
                        borderRadius="9999"
                        bg="green.400"
                        mr={2}
                    >
                        <Icon
                            as={MaterialCommunityIcons}
                            name="card-account-details-outline"
                            size={4}
                            color="gray.700"
                        />
                    </View>
                    <Text
                        color="gray.700"
                        fontSize="md"
                        fontFamily="heading"
                        letterSpacing="xs"
                    >
                        Adicione a sua CNH
                    </Text>
                </HStack>

                <Icon
                    as={MaterialCommunityIcons}
                    name="chevron-right"
                    size={6}
                />
            </HStack>
        </TouchableOpacity>
} */
