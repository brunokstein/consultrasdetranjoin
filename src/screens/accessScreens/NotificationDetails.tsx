/* import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { VStack, HStack, Center, Text, View, Icon } from 'native-base';
import { BackIconButton } from "@components/BackIconButton";
import { RootNavigatorRoutesProps } from "@routes/root.routes";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Button } from "@components/Button";

export function NotificationDetails() {

    const navigation = useNavigation<RootNavigatorRoutesProps>();

    function handleGoBack() {
        navigation.goBack();
    }

    function handleGoFipeTable() {

    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <VStack p={6} flex={1}>
                <HStack alignItems="center">
                    <BackIconButton onPress={handleGoBack} />
                    <Center flex={1}>
                        <Text
                            fontFamily="heading"
                            fontSize="xl"
                            color="white"
                        >
                            Avisos
                        </Text>
                    </Center>
                </HStack>

                <View bg="orange.300" borderRadius={9999} p={1} width={8} mt={8}>
                    <Icon as={MaterialCommunityIcons} name="star-outline" color="orange.600" size={6} />
                </View>

                <VStack flex={1}>
                    <HStack alignItems="center" my={4}>
                        <Icon as={MaterialCommunityIcons} name="calendar-month" color="blue.400" size={4} />
                        <Text
                            fontFamily="body"
                            fontSize="md"
                            color="gray.200"
                            ml={2}
                        >
                            27/12/2022
                        </Text>
                    </HStack>
                    <Text
                        fontFamily="heading"
                        fontSize="md"
                        color="white"
                        mb={2}
                    >
                        Valor atualizado!
                    </Text>
                    <Text
                        fontFamily="body"
                        fontSize="sm"
                        color="gray.500"
                        lineHeight="xs"
                    >
                        O valor do seu veículo placa QPJ9E88 abaixou. Todo mês, a Tabela Fipe é atualizada
                        com os preços médios dos veículos e eu venho te contar do seu!
                        Você pode saber mais conferindo aqui no App.
                    </Text>
                </VStack>

                <Button
                    title="Ver Tabela Fipe"
                    titleColor="white"
                    backGroundVariant="blue"
                />
            </VStack>
        </SafeAreaView>
    );
} */