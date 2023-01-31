import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import {
    VStack,
    Text,
    ScrollView,
} from "native-base";

import { AppNavigatorRoutesProps } from "@routes/app.routes";
import PersonSVG from "../../assets/Personal data-pana.svg";

//import { useInterstitialAd, TestIds } from 'react-native-google-mobile-ads';

import { Button } from "@components/Button";
import { useAuth } from "@hooks/useAuth";
import { DriversLicenseCard } from "@components/DriversLicenseCard";

export function DriversLicense() {
    const navigation = useNavigation<AppNavigatorRoutesProps>();

    const { hasDriversLicense, driversLicenseData } = useAuth();
    async function handleLoadDriversLicenseData() {
        navigation.navigate('driverslicensenumberregister');
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
            >
                <VStack flex={1} p={6} justifyContent="center">
                    {
                        hasDriversLicense ?
                        <DriversLicenseCard driversLicenseData={driversLicenseData} />
                            :
                            <VStack
                                alignItems="center"
                                bg="white"
                                borderRadius={6}
                                shadow={3}
                                p={4}
                            >
                                <PersonSVG height={120} width={180} />
                                <Text fontFamily="heading" fontSize="md" color="gray.700">
                                    Nenhuma CNH cadastrada
                                </Text>
                                <Text
                                    fontFamily="body"
                                    fontSize="sm"
                                    color="gray.400"
                                    p={2}
                                    textAlign="center"
                                    lineHeight="xs"
                                >
                                    Para visualizar informações da sua CNH, adicione sua
                                    carteira de motorista!
                                </Text>
                                <Button
                                    title="Cadastre sua CNH"
                                    variant="gray"
                                    titleColor="white"
                                    mt={2}
                                    onPress={handleLoadDriversLicenseData}
                                />
                            </VStack>
                    }
                </VStack>
            </ScrollView>
        </SafeAreaView>
    );
}
/* 
    const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : "ca-app-pub-3940256099942544/1033173712";
    const { isLoaded, isClosed, load, show } = useInterstitialAd(adUnitId, {
        requestNonPersonalizedAdsOnly: true,
    });  */

/*   function handleAddDriversLicense() {
        navigation.navigate("driverslicenseinfosrequest");
        if (isLoaded) {
            show();
        } else {
           
        } 
    } */

/*    useEffect(() => {
        load();
    }, [load]);

    useEffect(() => {
        if (isClosed) {
            navigation.navigate("tabroutes");
        }
    }, [isClosed, navigation]);  */

/*
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
            >
                <VStack
                    flex={1}
                    p={6}
                    justifyContent="center"
                >
                    {
                        hasDriverLicense ?
                            <VStack flex={1}>
                                <HStack alignItems="center">
                                    <Icon
                                        as={MaterialCommunityIcons}
                                        name="card-account-details-outline"
                                        size={5}
                                        color="gray.700"
                                    />
                                    <Text
                                        fontSize="xl"
                                        fontFamily="heading"
                                        color="gray.700"
                                        ml={2}
                                    >
                                        Minha CNH
                                    </Text>
                                </HStack>
                                <HStack
                                    alignItems="center"
                                    justifyContent="space-between"
                                    borderRadius={6}
                                    borderWidth={1}
                                    borderColor="gray.400"
                                    px={4}
                                    py={2}
                                    mt={8}
                                >
                                    <VStack alignItems="center">
                                        <Text
                                            fontSize="sm"
                                            fontFamily="body"
                                            color="gray.400"
                                        >
                                            Nº da CNH
                                        </Text>
                                        <Text
                                            fontSize="sm"
                                            fontFamily="body"
                                            color="gray.700"
                                        >
                                            06551954376
                                        </Text>
                                    </VStack>
                                    <VStack alignItems="center">
                                        <Text
                                            fontSize="sm"
                                            fontFamily="body"
                                            color="gray.400"
                                        >
                                            CPF
                                        </Text>
                                        <Text
                                            fontSize="sm"
                                            fontFamily="body"
                                            color="gray.700"
                                        >
                                            345.656.657-68
                                        </Text>
                                    </VStack>
                                </HStack>
                                <VStack
                                    borderRadius={6}
                                    borderWidth={1}
                                    borderColor="gray.400"
                                    mt={4}
                                    p={4}
                                >
                                    <HStack alignItems="center">
                                        <Icon
                                            as={MaterialCommunityIcons}
                                            name="card-account-details-outline"
                                            color="gray.700"
                                            size={5}
                                        />
                                        <Text
                                            fontFamily="heading"
                                            fontSize="md"
                                            color="gray.700"
                                            ml={2}
                                        >
                                            Situação da CNH
                                        </Text>
                                    </HStack>
                                    <Text
                                        fontFamily="body"
                                        fontSize="sm"
                                        color="gray.400"
                                    >
                                        Consulta realizada no Detran dia: 04/01/2023
                                    </Text>
                                    <DriversLicenseStatus variant="danger" />
                                </VStack>
                            </VStack>

                            :

                            <VStack
                                alignItems="center"
                                bg="white"
                                borderRadius={6}
                                my={4}
                                p={4}
                            >
                                <Image
                                    source={require("../../assets/cnhnaocadastrada.png")}
                                    resizeMode="contain"
                                    alt="Imagem alternativa"
                                />
                                <Text
                                    fontFamily="heading"
                                    fontSize="md"
                                    color="gray.700"
                                >
                                    Nenhuma CNH cadastrada
                                </Text>
                                <Text
                                    fontFamily="body"
                                    fontSize="sm"
                                    color="gray.400"
                                    p={2}
                                    textAlign="center"
                                    lineHeight="xs"
                                >
                                    Para consultar seus pontos e detalhes das multas, adicione a sua CNH
                                </Text>
                                <Button
                                    title="Adicionar CNH"
                                    variant="gray"
                                    titleColor="white"
                                    mt={2}
                                    onPress={handleAddDriversLicense}
                                />
                            </VStack>
                    }
                </VStack>
            </ScrollView>
        </SafeAreaView>
    );
} 

 <VStack p={4} mt={6} bg="white" borderRadius={6}>
<View bg="yellow.400" borderRadius={6} alignItems="center">
    <Text
        fontFamily="body"
        fontSize="sm"
        color="gray.700"
        lineHeight="xs"
        py={4}
        px={2}
    >
        Encontramos a sua CNH, mas para visualizar a situação e pontos, você precisa autenticar os seus dados.
    </Text>
</View>
<Button
    variant="gray"
    borderWidth={1}
    borderColor="blue.300"
    title="Autenticar dados"
    titleColor="white"
    mt={4}
/>
</VStack> 

 hasDriverLicense ?
<VStack flex={1}>
    <HStack alignItems="center">
        <Icon
            as={MaterialCommunityIcons}
            name="card-account-details-outline"
            size={5}
            color="gray.700"
        />
        <Text
            fontSize="xl"
            fontFamily="heading"
            color="gray.700"
            ml={2}
        >
            Minha CNH
        </Text>
    </HStack>
    <VStack
        borderRadius={6}
        borderWidth={1}
        borderColor="gray.400"
        mt={4}
        p={4}
    >
        <HStack alignItems="center">
            <Icon
                as={MaterialCommunityIcons}
                name="card-account-details-outline"
                color="gray.700"
                size={5}
            />
            <Text
                fontFamily="heading"
                fontSize="md"
                color="gray.700"
                ml={2}
            >
                Situação da CNH
            </Text>
        </HStack>
        <Text
            fontFamily="body"
            fontSize="sm"
            color="gray.400"
        >
            Consulta realizada no Detran dia --/--/----
        </Text>

        <View
            bg="yellow.400"
            height={30}
            width="100%"
            borderRadius={6}
            my={2}
            p={4}
            justifyContent="center"
        >
            <View
                bg="white"
                height={3}
                width="100%"
                borderRadius={6}
            />
        </View>

        <Text
            fontFamily="heading"
            fontSize="xl"
            color="gray.700"
        >
            Pontos da CNH
        </Text>

        <Text
            fontFamily="body"
            fontSize="sm"
            color="gray.400"
        >
            Veja a situação dos pontos da sua CNH
        </Text>
        <HStack
            justifyContent="center"
            mt={4}
            mb={2}
        >
            <View
                justifyContent="center"
                bg="yellow.100"
                borderRadius={9999}
                px={4}
            >
                <Text
                    fontFamily="heading"
                    fontSize="xl"
                    color="yellow.500"
                >
                    - -
                </Text>
            </View>
            <VStack ml={4}>
                <Text
                    fontFamily="body"
                    fontSize="md"
                    color="gray.400"
                >
                    Pontos na
                </Text>
                <Text
                    fontFamily="heading"
                    fontSize="xl"
                    color="gray.600"
                >
                    Carteira
                </Text>
            </VStack>
        </HStack>
    </VStack>
</VStack> */
