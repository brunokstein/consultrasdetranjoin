/* import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { VStack, Text, Icon, HStack, View } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { RootNavigatorRoutesProps } from '@routes/app.routes';

export function IPVACalculatorCard({...rest}: TouchableOpacityProps) {
    
    const navigation = useNavigation<RootNavigatorRoutesProps>();

    function handleIpvaCalculator() {
        navigation.navigate("ipvacalculatoroptions");
    }
    
    return (
        <VStack>
            <VStack bg="white" p={4} borderTopRadius={6} mt={4}>
                <HStack alignItems="center">
                    <View bg="blue.100" borderRadius={9999} p={1}>
                        <Icon as={MaterialCommunityIcons} name="calculator" size={4} color="orange.500" />
                    </View>
                    <Text
                        fontFamily="heading"
                        fontSize="md"
                        color="blue.400"
                        ml={2}
                    >
                        Calculadora de IPVA
                    </Text>
                </HStack>
                <Text
                    fontFamily="body"
                    fontSize="xs"
                    color="gray.300"
                    my={2}
                >
                    Seu IPVA está chegando!
                </Text>
                <Text
                    fontFamily="heading"
                    fontSize="md"
                    color="gray.700"
                >
                    Em breve, você poderá pagar aqui
                </Text>
            </VStack>
            <HStack justifyContent="space-between" bg="black" px={4} py={2} borderBottomRadius={6} alignItems="center">
                <Text
                    fontFamily="body"
                    fontSize="sm"
                    color="white"
                >
                    Calcular estimativa IPVA 2023
                </Text>
                <TouchableOpacity {...rest} onPress={handleIpvaCalculator}>
                    <Icon as={MaterialCommunityIcons} name="chevron-right" size={6} color="white" />
                </TouchableOpacity>
            </HStack>
        </VStack>
    );
} */