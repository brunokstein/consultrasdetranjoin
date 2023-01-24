/* import { SafeAreaView } from "react-native-safe-area-context";
import { VStack, HStack, Text, Icon, View, Center, Divider } from 'native-base';
import { CloseIconButton } from "@components/CloseIconButton";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { RootNavigatorRoutesProps } from "@routes/root.routes";

export function Notifications() {

    const navigation = useNavigation<RootNavigatorRoutesProps>();

    function handleCloseScreen() {
        navigation.goBack();
    }

    function handleNotificationDetails() {
        navigation.navigate("notificationdetails");
    }

    function handleCoPilot() {
        navigation.navigate("appcopilot");
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <VStack p={6} flex={1}>
                <HStack alignItems="center">
                    <CloseIconButton onPress={handleCloseScreen} />
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
                <HStack alignItems="center" mt={4}>
                    <View bg="gray.300" borderRadius={9999} p={2}>
                        <Icon as={MaterialCommunityIcons} name="car-outline" color="gray.700" size={4} />
                    </View>
                    <VStack ml={4}>
                        <Text
                            fontFamily="heading"
                            fontSize="md"
                            color="gray.400"
                        >
                            QPJ 9E88
                        </Text>
                        <Text
                            fontFamily="heading"
                            fontSize="sm"
                            color="white"
                        >
                            FIAT/ARGO DRIVE 1.0
                        </Text>
                    </VStack>
                </HStack>

                <HStack alignItems="center" mt={8}>
                    <HStack flex={1}>
                        <Text
                            fontFamily="heading"
                            fontSize="md"
                            color="gray.400"
                        >
                            Gringo co-piloto
                        </Text>
                        <View bg="gray.100" borderRadius={6} ml={2}>
                            <Text
                                fontFamily="heading"
                                fontSize="sm"
                                color="green.400"
                                p={1}
                            >
                                Ativo
                            </Text>
                        </View>
                    </HStack>
                    <TouchableOpacity onPress={handleCoPilot}>
                        <Icon as={MaterialCommunityIcons} name="chevron-right" size={6} color="gray.400" />
                    </TouchableOpacity>
                </HStack>
                <Text
                    fontFamily="body"
                    fontSize="xs"
                    color="gray.400"
                    mb={2}
                >
                    Estamos monitorando seu veículo e sua CNH
                </Text>
                <Divider bg="gray.400" />
                <Text
                    fontFamily="heading"
                    fontSize="xl"
                    color="white"
                    my={4}
                >
                    Últimas mensagens
                </Text>

                <HStack alignItems="center" px={4} py={4} bg="gray.200" borderRadius={6}>
                    <View bg="orange.300" borderRadius={9999} p={1}>
                        <Icon as={MaterialCommunityIcons} name="star-outline" color="orange.600" size={6} />
                    </View>
                    <HStack alignItems="center" flex={1} ml={4}>
                        <VStack>
                            <Text
                                fontFamily="heading"
                                fontSize="md"
                                color="gray.700"
                            >
                                Valor atualizado!
                            </Text>
                            <Text
                                fontFamily="body"
                                fontSize="sm"
                                color="gray.500"
                            >
                                Vem ver na Tabela Fipe
                            </Text>
                        </VStack>
                        <View bg="gray.100" borderRadius={6} ml={2}>
                            <Text
                                fontFamily="heading"
                                fontSize="sm"
                                color="green.400"
                                p={1}
                            >
                                Novo
                            </Text>
                        </View>
                    </HStack>
                    <TouchableOpacity onPress={handleNotificationDetails}>
                        <Icon as={MaterialCommunityIcons} name="chevron-right" size={6} color="gray.400" />
                    </TouchableOpacity>
                </HStack>

            </VStack>
        </SafeAreaView>
    );
} */