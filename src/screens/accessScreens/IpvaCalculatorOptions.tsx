/* import { useNavigation } from "@react-navigation/native";
import { VStack, HStack, Icon, Text, Image, FlatList, Divider } from "native-base";
import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { RootNavigatorRoutesProps } from "@routes/app.routes";
import { CloseIconButton } from "@components/CloseIconButton";

export function IpvaCalculatorOptions() {

    const navigation = useNavigation<RootNavigatorRoutesProps>();

    function handleCloseIpvaCalculator() {
        navigation.goBack();
    }

    function handleSelectedOption() {
        navigation.navigate("ipvacalculatorresult");
    }

    const DATA = [
        {
            id: "1",
            type: "ARGO DRIVE 1.0 6V Flex"
        },
        {
            id: "2",
            type: "ARGO DRIVE 1.3 8V Flex"
        },
        {
            id: "3",
            type: "ARGO DRIVE GSR 1.3 8V Flex"
        },
        {
            id: "4",
            type: "UNO DRIVE 1.0 Flex 6V 5p"
        },
        {
            id: "5",
            type: "MOBI DRIVE 1.0 Flex 6V 5p"
        },

    ]

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <VStack bg="white" p={4} height="100%">
                <HStack justifyContent="space-around" alignItems="center">
                    <CloseIconButton onPress={handleCloseIpvaCalculator} />
                    <Text
                        fontFamily="heading"
                        fontSize="xl"
                        color="gray.700"
                        flex={1}
                        textAlign="center"
                    >
                        Calculadora de {"\n"}IPVA
                    </Text>
                </HStack>

                <HStack
                    justifyContent="space-between"
                    alignItems="center"
                    mt={4}
                >
                    <Text
                        fontFamily="heading"
                        fontSize="lg"
                        color="gray.700"
                        lineHeight="xs"
                    >
                        Para calcular o IPVA 2023, {"\n"}confirme as informações do {"\n"}seu veículo.
                    </Text>
                    <Image
                        source={require("../../assets/testecelularipva.png")}
                        resizeMode="contain"
                        alt="Imagem calculadora IPVA"
                    />
                </HStack>

                <FlatList
                    data={DATA}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <VStack>
                            <HStack justifyContent="space-between" py={2}>
                                <Text
                                    fontFamily="body"
                                    fontSize="xl"
                                    color="gray.500"
                                >
                                    {item.type}
                                </Text>
                                <TouchableOpacity onPress={handleSelectedOption}>
                                    <Icon as={MaterialCommunityIcons} name="chevron-right" size={6} color="gray.500" />
                                </TouchableOpacity>
                            </HStack>
                            <Divider bg="gray.300" />
                        </VStack>
                    )}
                    showsVerticalScrollIndicator={false}
                />

            </VStack>

        </SafeAreaView>
    );
} */