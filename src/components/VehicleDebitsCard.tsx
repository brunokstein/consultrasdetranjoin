/* import { useState } from 'react';
import { VStack, Text, Icon, HStack, View } from 'native-base';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

export function VehicleDebitsCard() {

    //const [available, setAvailable] = useState(false);

    const available = true;

    return (
        <VStack bg="white" p={4} borderRadius={6} mt={2}>
            <HStack alignItems="center">
                <View borderWidth={1} borderRadius={9999}>
                    <Icon as={MaterialIcons} name="attach-money" size={4} color="gray.700" />
                </View>
                <Text
                    fontFamily="heading"
                    fontSize="md"
                    color="gray.700"
                    ml={2}
                >
                    Débitos do veículo
                </Text>
            </HStack>
            <Text
                fontFamily="body"
                fontSize="xs"
                color="gray.400"
            >
                Débitos disponíveis para pagamento
            </Text>

            {
                available ?
                    <View bg="green.600" px={2} py={1} borderRadius={6} alignItems="center" mt={4}>
                        <Text
                            fontFamily="body"
                            fontSize="sm"
                            color="white"
                        >
                            Nenhuma multa nem imposto para pagar!
                        </Text>
                    </View>

                    :

                    <VStack py={4} px={2} bg="yellow.100" borderRadius={6} borderWidth={1} borderColor="yellow.500" mt={2}>
                        <Icon
                            as={MaterialCommunityIcons}
                            name="information-outline"
                            size={6}
                            color="yellow.500"
                            mb={2}
                        />

                        <Text
                            fontFamily="body"
                            fontSize="sm"
                            color="gray.600"
                        >
                            As informações de débitos do seu veículo estão sendo carregadas. {"\n"}
                            Informaremos quando estiver disponível
                        </Text>
                    </VStack>
            }

        </VStack>
    );
}



 */