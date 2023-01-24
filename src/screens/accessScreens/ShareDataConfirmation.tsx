/* import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { VStack, Image, Text, Radio, ScrollView, HStack, Icon, Link, Box } from 'native-base';

//import { BannerAd, BannerAdSize, TestIds, useInterstitialAd } from 'react-native-google-mobile-ads';

import { AppNavigatorRoutesProps } from '@routes/app.routes';

import { MaterialIcons } from '@expo/vector-icons';

import { Button } from '@components/Button';

export function ShareDataConfirmation() {

    const [agreed, setAgreed] = useState("");

     const adUnitIdBanner = __DEV__ ? TestIds.BANNER : "ca-app-pub-3940256099942544/6300978111";

    const adUnitIdInterstitial = __DEV__ ? TestIds.INTERSTITIAL : "ca-app-pub-3940256099942544/1033173712";
    const { isLoaded, isClosed, load, show } = useInterstitialAd(adUnitIdInterstitial, {
        requestNonPersonalizedAdsOnly: true,
    }); 
    const navigation = useNavigation<AppNavigatorRoutesProps>();

    function handleConfirmSharedData() {
        navigation.navigate("tabroutes");
       /*  if (isLoaded) {
            show();
        } else {
            
        } 
    }
     useEffect(() => {
        load();
    }, [load]);

    useEffect(() => {
        if (isClosed) {
            navigation.navigate("tabroutes");
        }
    }, [isClosed, navigation]);
 
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
            >
                <VStack
                    p={6}
                    bg="white"
                    flex={1}
                >
                    <VStack
                        alignItems="center"
                        justifyContent="center"
                        flex={1}
                    >
                       <BannerAd
                            unitId={adUnitIdBanner}
                            size={BannerAdSize.MEDIUM_RECTANGLE}
                            requestOptions={{
                                requestNonPersonalizedAdsOnly: true,
                            }}
                        />
                         
                        <Image
                            source={require("../../assets/cnhnaocadastrada.png")}
                            resizeMode="contain"
                            alt="Imagem alternativa"
                        />
                        <Text
                            fontFamily="heading"
                            fontSize="2xl"
                            color="gray.700"
                            lineHeight="sm"
                            my={4}
                        >
                            Concorda em compartilhar seus dados com a JoinAds consultas?
                        </Text>
                        <Text
                            fontFamily="body"
                            fontSize="md"
                            color="gray.400"
                            textAlign="center"
                            mb={2}
                        >
                            Precisamos do seu consentimento para acessar informações sobre a sua CNH em bases de dados de órgãos públicos.
                        </Text>
                        <Box alignItems="baseline">
                            <Text
                                fontFamily="body"
                                fontSize="md"
                                color="gray.400"
                                textAlign="center"
                                mb={4}
                                mt={2}
                            >
                                Nós seguimos a {" "}
                                <Link
                                    _text={{
                                        fontFamily: "body",
                                        fontSize: "md",
                                        color: "gray.700"

                                    }}
                                >
                                    Política de Privacidade
                                </Link> {""}, os {" "}
                                <Link
                                    _text={{
                                        fontFamily: "body",
                                        fontSize: "md",
                                        color: "gray.700"
                                    }}
                                >
                                    Termos e condições de uso
                                </Link>
                                {" "} e os {" "}
                                <Link
                                    _text={{
                                        fontFamily: "body",
                                        fontSize: "md",
                                        color: "gray.700"
                                    }}
                                >
                                    Termos de consentimento.
                                </Link>
                            </Text>
                        </Box>
                      
                        <Radio.Group
                            name="agreedGroup"
                            accessibilityLabel="Concorda ou não concorda?"
                            defaultValue={agreed}
                            onChange={value => {
                                setAgreed(value || "");
                            }}
                        >
                            <Radio value="1" my="1">
                                Concordo
                            </Radio>
                            <Radio value="2" my="1">
                                Não concordo
                            </Radio>
                        </Radio.Group>
                    </VStack>

                    <Button
                        title="Confirmar"
                        variant="green"
                        titleColor="white"
                        mb={2}
                        onPress={handleConfirmSharedData}
                    />
                    <HStack
                        alignItems="center"
                        justifyContent="flex-start"
                        mt={2}
                    >
                        <Icon
                            as={MaterialIcons}
                            name="info-outline"
                            size={6}
                            color="gray.700"
                        />
                        <Text
                            fontFamily="body"
                            fontSize="sm"
                            color="gray.400"
                            lineHeight="xs"
                            ml={2}
                        >
                            Você poderá revogar o consentimento a qualquer momento.
                        </Text>
                    </HStack>
                </VStack>
            </ScrollView>
        </SafeAreaView>
    );
} */