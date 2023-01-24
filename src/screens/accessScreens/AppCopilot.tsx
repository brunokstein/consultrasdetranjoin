/* import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HStack, VStack, Center, Text, Switch, Icon, Divider } from 'native-base';

import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import { RootNavigatorRoutesProps } from "@routes/root.routes";

import { BackIconButton } from "@components/BackIconButton";

export function AppCopilot() {

    const navigation = useNavigation<RootNavigatorRoutesProps>();

    function handleGoBack() {
        navigation.goBack();
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
                            Gringo co-piloto
                        </Text>
                    </Center>
                </HStack>
                <Text
                    fontFamily="heading"
                    fontSize="md"
                    color="white"
                    my={4}
                    mt={6}
                >
                    Selecione os avisos que deseja receber
                </Text>
                <VStack mt={2}>
                    <HStack alignItems="center" justifyContent="space-between">
                        <HStack alignItems="center">
                            <Icon
                                as={MaterialCommunityIcons}
                                name="checkbox-blank-badge-outline"
                                color="white"
                                size={6}
                            />
                            <Text
                                fontFamily="heading"
                                fontSize="sm"
                                color="white"
                                mb={2}
                                ml={4}
                            >
                                IPVA, Licenciamento e Multas
                            </Text>
                        </HStack>

                        <Switch isChecked />
                    </HStack>
                    <Text
                        fontFamily="heading"
                        fontSize="xs"
                        color="white"
                        mb={2}
                    >
                        Quando chegar a hora de pagar, eu te aviso!
                    </Text>
                    <Divider mt={1} />
                </VStack>
                <VStack mt={2}>
                    <HStack alignItems="center" justifyContent="space-between">
                        <HStack alignItems="center">
                            <Icon
                                as={MaterialIcons}
                                name="attach-money"
                                color="white"
                                size={6}
                            />
                            <Text
                                fontFamily="heading"
                                fontSize="sm"
                                color="white"
                                mb={2}
                                ml={4}
                            >
                                Tabela Fipe
                            </Text>
                        </HStack>

                        <Switch isChecked />
                    </HStack>
                    <Text
                        fontFamily="heading"
                        fontSize="xs"
                        color="white"
                        mb={2}
                    >
                        Fico de olho nos valores atualizados da Fipe
                    </Text>
                    <Divider mt={1} />
                </VStack>
                <VStack mt={2}>
                    <HStack alignItems="center" justifyContent="space-between">
                        <HStack alignItems="center">
                            <Icon
                                as={MaterialCommunityIcons}
                                name="car-outline"
                                color="white"
                                size={6}
                            />
                            <Text
                                fontFamily="heading"
                                fontSize="sm"
                                color="white"
                                mb={2}
                                ml={4}
                            >
                                Manutenção
                            </Text>
                        </HStack>

                        <Switch />
                    </HStack>
                  
                    <Divider mt={1} />
                </VStack>
                <VStack mt={2}>
                    <HStack alignItems="center" justifyContent="space-between">
                        <HStack alignItems="center">
                            <Icon
                                as={MaterialCommunityIcons}
                                name="card-account-details-outline"
                                color="white"
                                size={6}
                            />
                            <Text
                                fontFamily="heading"
                                fontSize="sm"
                                color="white"
                                mb={2}
                                ml={4}
                            >
                                CNH
                            </Text>
                        </HStack>

                        <Switch />
                    </HStack>
                   
                    <Divider mt={1} />
                </VStack>
            </VStack>
        </SafeAreaView>
    );
} */