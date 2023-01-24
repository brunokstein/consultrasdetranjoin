/* import { VStack, Text, HStack, Icon, View, Center } from "native-base";

import {
  MaterialCommunityIcons,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";

type Props = {
  variant: "ok" | "warning" | "danger";
};

export function HomeDriversLicenseStatus({ variant }: Props) {
  return (
    <VStack
      borderRadius={6}
      borderWidth={1}
      borderColor="gray.400"
      p={4}
      mt={2}
    >
      <HStack alignItems="center">
        <Icon
          as={MaterialCommunityIcons}
          name="card-account-details-outline"
          color="gray.700"
          size={5}
        />
        <Text fontFamily="heading" fontSize="md" color="gray.700" ml={2}>
          Situação da CNH
        </Text>
      </HStack>
      <Center>
        <HStack alignItems="center" mt={2}>
          <View
            justifyContent="center"
            bg={
              variant === "ok"
                ? "green.100"
                : variant === "warning"
                ? "yellow.100"
                : "red.100"
            }
            borderRadius={9999}
            px={2}
          >
            <Text
              fontFamily="heading"
              fontSize="xl"
              color={
                variant === "ok"
                  ? "green.500"
                  : variant === "warning"
                  ? "yellow.500"
                  : "red.500"
              }
            >
              {variant === "ok" ? "0" : variant === "warning" ? "31" : "41"}
            </Text>
          </View>
          <Text fontFamily="heading" fontSize="md" color="gray.500" ml={2}>
            Pontos na Carteira
          </Text>
        </HStack>
      </Center>

      <HStack
        justifyContent="space-between"
        bg={
          variant === "ok"
            ? "green.400"
            : variant === "warning"
            ? "yellow.400"
            : "red.400"
        }
        px={4}
        py={2}
        borderRadius={6}
        alignItems="center"
        marginTop={2}
      >
        <Text fontFamily="body" fontSize="sm" color="gray.700">
          {variant === "ok"
            ? "Esta tudo OK com a sua CNH"
            : variant === "warning"
            ? "Cuidado com o limite de pontos"
            : "Limite de pontos ultrapassado"}
        </Text>

        {variant === "ok" ? (
          <Icon
            as={MaterialCommunityIcons}
            name="checkbox-marked-circle-outline"
            size={5}
            color="gray.700"
          />
        ) : variant === "warning" ? (
          <Icon
            as={Ionicons}
            name="warning-outline"
            size={5}
            color="gray.700"
          />
        ) : (
          <Icon as={MaterialIcons} name="dangerous" size={5} color="gray.700" />
        )}
      </HStack>
    </VStack>
  );
}
 */