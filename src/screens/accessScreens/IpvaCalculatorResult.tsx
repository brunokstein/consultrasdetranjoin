/* import { useState } from 'react';
import { HStack, ScrollView, VStack, Icon, Text, View, Checkbox, Image } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { RootNavigatorRoutesProps } from '@routes/app.routes';

import { Button } from "@components/Button";
import { TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { CloseIconButton } from '@components/CloseIconButton';

export function IpvaCalculatorResult() {    
    
    const navigation = useNavigation<RootNavigatorRoutesProps>();

    function handleCloseIpvaResult() {
        navigation.goBack();
    }
   
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
            >

                <VStack bg="white" p={6} height="100%">
                    <HStack justifyContent="space-around" alignItems="center">
                        <CloseIconButton onPress={handleCloseIpvaResult}/>

                        <Text
                            fontFamily="heading"
                            fontSize="xl"
                            color="gray.700"
                            flex={1}
                            pl={6}
                            textAlign="center"
                        >
                            Calculadora de {"\n"}IPVA
                        </Text>

                        <TouchableOpacity>
                            <HStack alignItems="center">
                                <Text
                                    fontFamily="heading"
                                    fontSize="sm"
                                    color="blue.300"
                                    mr={1}
                                >
                                    Ajuda
                                </Text>
                                <Icon
                                    as={MaterialCommunityIcons}
                                    name="help-circle-outline"
                                    size={6}
                                    color="blue.300"
                                />
                            </HStack>
                        </TouchableOpacity>
                    </HStack>

                    <HStack
                        justifyContent="space-between"
                        alignItems="center"
                        mt={4}
                    >
                        <Text
                            fontFamily="heading"
                            fontSize="2xl"
                            color="gray.700"
                            lineHeight="xs"
                        >
                            Quer se preparar {"\n"}para o IPVA 2023? {"\n"}O Gringo te ajuda
                        </Text>
                        <Image
                            source={require("../../assets/testecelularipva.png")}
                            resizeMode="contain"
                            alt="Imagem calculadora IPVA"
                        />
                    </HStack>

                    <HStack alignItems="center">
                        <View bg="blue.200" borderRadius={9999} p={2}>
                            <Icon as={MaterialCommunityIcons} name="car-outline" />
                        </View>
                        <VStack ml={2}>
                            <Text
                                fontFamily="body"
                                fontSize="sm"
                                color="gray.400"
                            >
                                Meu veículo
                            </Text>
                            <Text
                                fontFamily="heading"
                                fontSize="md"
                                color="gray.600"
                            >
                                FIAT/ARGO DRIVE 1.0
                            </Text>
                        </VStack>
                    </HStack>

                    <HStack
                        justifyContent="space-between"
                        alignItems="center"
                        borderRadius={6}
                        borderWidth={1}
                        borderColor="gray.200"
                        p={4}
                        my={4}
                    >
                        <VStack alignItems="center">
                            <Text
                                fontFamily="heading"
                                color="gray.400"
                            >
                                Valor da Tabela Fipe
                            </Text>
                            <Text
                                fontFamily="heading"
                                color="gray.700"
                            >
                                R$ 57.241,00
                            </Text>
                        </VStack>
                        <VStack alignItems="center">
                            <Text
                                fontFamily="heading"
                                color="gray.400"
                            >
                                Alíquota do Estado
                            </Text>
                            <Text
                                fontFamily="heading"
                                color="gray.700"
                            >
                                3.5%
                            </Text>
                        </VStack>
                    </HStack>

                    <VStack alignItems="center" mb={6}>
                        <Text
                            fontFamily="body"
                            color="gray.700"
                        >
                            Valor aproximado do IPVA 2023
                        </Text>

                        <Text
                            fontFamily="heading"
                            fontSize="2xl"
                            color="gray.700"
                        >
                            R$ 2.003,00
                        </Text>
                    </VStack>


                    <View bg="yellow.300" borderWidth={1} borderRadius={6} borderColor="yellow.500" p={2}>
                        <Text
                            fontFamily="heading"
                            fontSize="xs"
                            color="gray.700"
                        >
                            Esse valor é uma estimativa e deve mudar até a data de pagamento do IPVA.
                        </Text>
                    </View>

                    <Text
                        fontFamily="heading"
                        fontSize="lg"
                        color="gray.700"
                        lineHeight="xs"
                        textAlign="center"
                        mt={4}
                    >
                        Quando o governo divulgar o valor oficial, você poderá pagar aqui no Gringo. Fique de olho!
                    </Text>

                    <HStack p={4} alignItems="center">
                        <Checkbox value="test" accessibilityLabel="CheckBox para aceitar o pagamento na Gringo" />

                        <Text
                            fontFamily="body"
                            color="gray.700"
                            ml={2}
                        >
                            Gringo, me lembre de pagar aqui
                        </Text>
                    </HStack>

                    <Button
                        backGroundVariant="blue"
                        title="Indique para seus amigos"
                        titleColor="white"
                    />
                </VStack>
            </ScrollView>
        </SafeAreaView>
    );
} */