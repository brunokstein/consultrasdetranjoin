/* import { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { VStack, Text, FlatList, HStack, Radio, Divider } from 'native-base';

import { AppNavigatorRoutesProps } from '@routes/app.routes';

//import { BannerAd, BannerAdSize, TestIds, useInterstitialAd } from 'react-native-google-mobile-ads';

import { Button } from '@components/Button';
import { BackIconButton } from '@components/BackIconButton';

export function DriversLicenseStateRequest() {

    const [state, setState] = useState("");

    const navigation = useNavigation<AppNavigatorRoutesProps>();

    /* const adUnitIdBanner = __DEV__ ? TestIds.BANNER : "ca-app-pub-3940256099942544/6300978111";

    const adUnitIdInterstitial = __DEV__ ? TestIds.INTERSTITIAL : "ca-app-pub-3940256099942544/1033173712";
    const { isLoaded, isClosed, load, show } = useInterstitialAd(adUnitIdInterstitial, {
        requestNonPersonalizedAdsOnly: true,
    }); 

    function handleGoBack() {
        navigation.goBack();
    }

    function handleGoToConfirmation() {
        navigation.navigate("sharedataconfirmation");
        /* if (isLoaded) {
            show();
        } else {
            
        } 
    }

   /*  useEffect(() => {
        load();
    }, [load]);

    useEffect(() => {
        if (isClosed) {
            navigation.navigate("sharedataconfirmation");
        }
    }, [isClosed, navigation]); 

    const DATA = [
        {
            id: "1",
            state: "Paraná"
        },
        {
            id: "2",
            state: "São Paulo"
        },
        {
            id: "3",
            state: "Santa Catarina"
        },
        {
            id: "4",
            state: "Rio Grande do Sul"
        },
        {
            id: "5",
            state: "Rio de Janeiro"
        },
        {
            id: "6",
            state: "Minas Gerais"
        },
        {
            id: "7",
            state: "Espírito Santo"
        },
        {
            id: "8",
            state: "Mato Grosso do Sul"
        },
        {
            id: "9",
            state: "Fortaleza"
        },
        {
            id: "10",
            state: "Mato Grosso"
        },
        {
            id: "11",
            state: "Distrito Federal"
        },
        {
            id: "12",
            state: "Bahia"
        },
        {
            id: "13",
            state: "Amazonas"
        },
        {
            id: "14",
            state: "Rio Grande do Norte"
        },
        {
            id: "15",
            state: "Pernambuco"
        },
    ]

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <VStack p={6} flex={1}>
                <BackIconButton onPress={handleGoBack} />

                <Text
                    fontFamily="heading"
                    fontSize="2xl"
                    color="gray.700"
                    mt={4}
                >
                    De qual estado é a sua CNH?
                </Text>
                <Text
                    fontFamily="body"
                    fontSize="sm"
                    color="gray.400"
                    mt={2}
                    mb={4}
                >
                    Assim conseguimos confirmar as suas informações com o Detran.
                </Text>

                <FlatList
                    data={DATA}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <VStack>
                            <HStack p={2} bg="white">
                                <Radio.Group
                                    name="SelectState"
                                    accessibilityLabel="Selecione um estado"
                                    value={state} onChange={value => {
                                        setState(value || "");
                                    }}>
                                    <Radio value={item.id} my={1}>
                                        {item.state}
                                    </Radio>
                                </Radio.Group>
                            </HStack>
                            <Divider />
                        </VStack>
                    )}
                    showsVerticalScrollIndicator={false}
                    mb={2}
                />
                {/* <BannerAd
                    unitId={adUnitIdBanner}
                    size={BannerAdSize.MEDIUM_RECTANGLE}
                    requestOptions={{
                        requestNonPersonalizedAdsOnly: true,
                    }}
                />
 
                <Button
                    variant="gray"
                    title="Próximo"
                    titleColor="white"
                    mt={2}
                    onPress={handleGoToConfirmation}
                />
            </VStack>
        </SafeAreaView >
    )
} */