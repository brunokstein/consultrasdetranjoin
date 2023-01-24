/* import { VStack, Text, HStack, Icon, View } from 'native-base';

import { MaterialCommunityIcons, Ionicons, MaterialIcons } from '@expo/vector-icons';

type Props = {
    variant: "ok" | "warning" | "danger";
}

export function DriversLicenseStatus({ variant }: Props) {
    return (
        <VStack>
            <HStack
                justifyContent="space-between"
                bg={variant === "ok" ? "green.400" : (variant === "warning" ? "yellow.400" : "red.400")}
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
                    {variant === "ok" ? "Esta tudo OK com a sua CNH" : (variant === "warning" ? "Cuidado com o limite de pontos" : "Limite de pontos ultrapassado")}
                </Text>

                {
                    variant === "ok" ?
                        <Icon
                            as={MaterialCommunityIcons}
                            name="checkbox-marked-circle-outline"
                            size={5}
                            color="gray.700"
                        />

                        :

                        (
                            variant === "warning" ?
                                <Icon
                                    as={Ionicons}
                                    name="warning-outline"
                                    size={5}
                                    color="gray.700"
                                />

                                :

                                <Icon
                                    as={MaterialIcons}
                                    name="dangerous"
                                    size={5}
                                    color="gray.700"
                                />
                        )
                }
            </HStack>

            <Text
                fontFamily="heading"
                fontSize="xl"
                color="gray.700"
            >
                Pontos da CNH
            </Text>

            <Text
                fontFamily="body"
                fontSize="sm"
                color="gray.400"
            >
                Veja a situação dos pontos da sua CNH
            </Text>
            <HStack
                justifyContent="center"
                mt={4}
                mb={2}
            >
                <View
                    justifyContent="center"
                    bg={variant === "ok" ? "green.100" : (variant === "warning" ? "yellow.100" : "red.100")}
                    borderRadius={9999}
                    px={4}
                >
                    <Text
                        fontFamily="heading"
                        fontSize="xl"
                        color={variant === "ok" ? "green.500" : (variant === "warning" ? "yellow.500" : "red.500")}
                    >
                        {variant === "ok" ? "0" : (variant === "warning" ? "31" : "41")}
                    </Text>
                </View>
                <VStack ml={4}>
                    <Text
                        fontFamily="body"
                        fontSize="md"
                        color="gray.400"
                    >
                        Pontos na
                    </Text>
                    <Text
                        fontFamily="heading"
                        fontSize="xl"
                        color="gray.600"
                    >
                        Carteira
                    </Text>
                </VStack>
            </HStack>
        </VStack>
    );
}
 */