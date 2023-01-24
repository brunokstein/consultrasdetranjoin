/* import { VStack, Text, HStack, Icon, View } from 'native-base';

import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

type Props = {
    delayed?: boolean;
}

export function VehicleStatus({ delayed = false }: Props) {
    return (
        <VStack>
            <HStack
                justifyContent="space-between"
                bg={delayed ? "red.400" : "green.400"}
                px={4}
                py={2}
                borderRadius={6}
                alignItems="center"
                my={4}
            >
                <Text
                    fontFamily="body"
                    fontSize="sm"
                    color="gray.700"
                >
                    {delayed ? "Licenciamento atrasado" : "Está tudo certo com seu veículo"}
                </Text>

                {
                    delayed ?
                        <View
                            borderWidth={1}
                            borderColor="gray.700"
                            borderRadius={9999}
                            alignItems="center"
                            p={1}
                        >
                            <Icon
                                as={Ionicons}
                                name="warning-outline"
                                size={3}
                                color="gray.700"
                            />
                        </View>
                        :
                        <Icon
                            as={MaterialCommunityIcons}
                            name="checkbox-marked-circle-outline"
                            size={5}
                            color="gray.700"
                        />
                }
            </HStack>

            <HStack justifyContent="space-between" alignItems="center">
                <Text
                    fontFamily="heading"
                    fontSize="md"
                    color="gray.700"
                >
                    Licenciamento
                </Text>

                <View
                    bg={delayed ? "red.200" : "green.200"}
                    borderRadius={6}
                >
                    <Text
                        fontFamily="heading"
                        fontSize="sm"
                        color={delayed ? "red.700" : "green.700"}
                        p={1}
                    >
                        {delayed ? "Atrasado" : "Em dia"}
                    </Text>
                </View>
            </HStack>
            <VStack mt={4}>
                <HStack justifyContent="space-between" alignItems="center">
                    <Text
                        fontFamily="body"
                        fontSize="xs"
                        color="gray.400"
                    >
                        Último pagamento
                    </Text>

                    <Text
                        fontFamily="heading"
                        fontSize="sm"
                        color="gray.700"
                    >
                        {delayed ? "----" : "2022"}
                    </Text>
                </HStack>
                <HStack justifyContent="space-between" alignItems="center">
                    <Text
                        fontFamily="body"
                        fontSize="xs"
                        color="gray.400"
                    >
                        Vencimento
                    </Text>
                    <Text
                        fontFamily="heading"
                        fontSize="sm"
                        color="gray.700"
                    >
                        {delayed ? "Atrasado" : "Outubro de 2023"}
                    </Text>
                </HStack>
            </VStack>
        </VStack>
    );
}
 */
/* 
<VStack
py={4}
px={2}
bg="yellow.100"
borderRadius={6}
borderWidth={1}
borderColor="yellow.500"
mt={4}
>
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
    lineHeight="xs"
>
    Estamos carregando as informações do seu veículo. Te avisamos quando estiver tudo pronto, ok?
</Text>
</VStack> */