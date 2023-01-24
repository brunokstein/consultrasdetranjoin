/* import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { VStack, Text, Icon, HStack, View } from 'native-base';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import { AuthNavigatorRoutesProps } from '@routes/auth.routes';

import { BackIconButton } from '@components/BackIconButton';
import { GoFowardIconButton } from '@components/GoFowardIconButton';

export function AppGuide() {

    const navigation = useNavigation<AuthNavigatorRoutesProps>();

    function handleGoBack() {
        navigation.navigate("openapp");
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <VStack flex={1} p={6}>
                <BackIconButton
                    onPress={handleGoBack}
                />
                <VStack flex={8} mt={4}>
                    <VStack mb={2}>
                        <Text color="white" fontSize="xl" fontFamily="heading">
                            O que você está buscando?
                        </Text>
                        <Text color="gray.200" fontSize="xs" fontFamily="body">
                            Que informação você gostaria de ver primeiro?
                        </Text>
                    </VStack>


                    <HStack p={4} bg="blue.200" borderRadius={6} mt={4} alignItems="center">
                        <View p={2} borderRadius="9999" bg="yellow.500" mr={2} >
                            <Icon as={MaterialIcons} name="attach-money" size={6} color="gray.700" />
                        </View>
                        <VStack flex={1} p={2} >
                            <Text color="gray.700" fontSize="xl" fontFamily="heading" letterSpacing="xs" lineHeight="xs">
                                Consultar e pagar débitos
                            </Text>
                            <Text color="gray.500" fontSize="xs" fontFamily="body" letterSpacing="xs" lineHeight="xs" mt={2}>
                                Pague seu licenciamento, multas e IPVA
                            </Text>
                        </VStack>
                        <GoFowardIconButton />
                    </HStack>

                    <HStack p={4} bg="blue.300" borderRadius={6} mt={4} alignItems="center">
                        <View p={2} borderRadius="9999" bg="lightBlue.500" mr={2} >
                            <Icon as={MaterialCommunityIcons} name="car-outline" size={6} color="white" />
                        </View>
                        <VStack flex={1} p={2} >
                            <Text color="gray.700" fontSize="xl" fontFamily="heading" letterSpacing="xs" lineHeight="xs">
                                Situação do veículo
                            </Text>
                            <Text color="gray.500" fontSize="xs" fontFamily="body" letterSpacing="xs" lineHeight="xs" mt={2}>
                                Veja as informações do seu veículo, tabela FIPE e mais
                            </Text>
                        </VStack>
                        <GoFowardIconButton />
                    </HStack>

                    <HStack p={4} bg="blue.400" borderRadius={6} mt={4} alignItems="center">
                        <View p={2} borderRadius="9999" bg="lightBlue.200" mr={2} >
                            <Icon as={MaterialCommunityIcons} name="card-account-details-outline" size={6} color="gray.700" />
                        </View>
                        <VStack flex={1} p={2} >
                            <Text color="white" fontSize="xl" fontFamily="heading" letterSpacing="xs" lineHeight="xs">
                                CNH
                            </Text>
                            <Text color="white" fontSize="xs" fontFamily="body" letterSpacing="xs" lineHeight="xs" mt={2}>
                                Limite de pontos e situação da sua CNH
                            </Text>
                        </VStack>
                        <GoFowardIconButton />
                    </HStack>

                </VStack>
            </VStack>
        </SafeAreaView>
    );
}
 */