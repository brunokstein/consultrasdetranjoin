/* import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { VStack, Text, Icon, HStack, View } from 'native-base';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export function LoanCard({ ...rest }: TouchableOpacityProps) {
    return (
        <VStack bg="white" p={4} borderTopRadius={6} mt={4}>
            <HStack alignItems="center" justifyContent="space-between">
                <HStack>
                    <View bg="green.300" borderRadius={9999} p={1}>
                        <Icon as={MaterialIcons} name="attach-money" size={4} color="white" />
                    </View>
                    <Text
                        fontFamily="heading"
                        fontSize="md"
                        color="gray.700"
                        ml={2}
                    >
                        Empréstimo com garantia
                    </Text>
                </HStack>
                <HStack>
                    <TouchableOpacity {...rest}>
                        <Icon as={MaterialCommunityIcons} name="chevron-right" size={6} color="gray.700" />
                    </TouchableOpacity>
                </HStack>
            </HStack>
            <VStack shadow="3" borderRadius={6} bg="white" mt={4} px={4} py={2}>
                <HStack alignItems="center">
                    <View bg="blue.300" borderRadius={9999} p={1}>
                        <Icon as={MaterialCommunityIcons} name="gift-outline" size={4} color="gray.700" />
                    </View>
                    <Text
                        fontFamily="heading"
                        fontSize="sm"
                        color="gray.700"
                        my={2}
                        ml={2}
                    >
                        Pague após o carnaval!
                    </Text>
                </HStack>
                <Text
                    fontFamily="heading"
                    fontSize="xs"
                    color="gray.400"
                >
                    Dinheiro na conta agora e 60 dias para começar a pagar.
                </Text>
            </VStack>
        </VStack>
    );
} */