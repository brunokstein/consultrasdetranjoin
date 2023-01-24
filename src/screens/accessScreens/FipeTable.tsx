/* import {
  HStack,
  VStack,
  Center,
  Text,
  Divider,
  Icon,
  FlatList,
} from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { AppNavigatorRoutesProps } from "@routes/app.routes";

//import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

import { useNavigation } from "@react-navigation/native";
import { BackIconButton } from "@components/BackIconButton";

export function FipeTable() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  //const adUnitIdBanner = __DEV__ ? TestIds.BANNER : "ca-app-pub-3940256099942544/6300978111";

  function handleGoBack() {
    navigation.goBack();
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <VStack flex={1} p={6}>
        <HStack alignItems="center">
          <BackIconButton onPress={handleGoBack} />
          <Center flex={1}>
            <Text fontSize="lg" fontFamily="heading" color="gray.700">
              Tabela Fipe
            </Text>
          </Center>
        </HStack>

        <Center mt={8} mb={2}>
          <Text fontSize="xl" fontFamily="heading" color="gray.700">
            ARGO DRIVE 1.0 6V Flex
          </Text>
          <Text fontSize="md" fontFamily="heading" color="gray.400">
            Fiat, 2019, Gasolina
          </Text>
        </Center>
        <HStack
          justifyContent="space-between"
          borderRadius={6}
          borderColor="gray.400"
          borderWidth={1}
          bg="green.700"
          px={4}
          py={2}
          my={4}
        >
          <Text fontSize="md" fontFamily="body" color="white">
            Valor atual:
          </Text>
          <Text fontSize="md" fontFamily="body" color="white">
            R$ 57.122,00
          </Text>
        </HStack>
        <Divider />
        <HStack alignItems="center" my={4}>
          <Text fontSize="lg" fontFamily="heading" color="gray.500">
            Histórico de preços
          </Text>
          <Icon
            as={MaterialCommunityIcons}
            name="chart-bar"
            size={5}
            color="gray.500"
            ml={2}
          />
        </HStack>
        <Text>Carro e Valor</Text>
        {/*   <BannerAd
                        unitId={adUnitIdBanner}
                        size={BannerAdSize.MEDIUM_RECTANGLE}
                        requestOptions={{
                            requestNonPersonalizedAdsOnly: true,
                        }}
                    /> *
      </VStack>
    </SafeAreaView>
  );
}
 */