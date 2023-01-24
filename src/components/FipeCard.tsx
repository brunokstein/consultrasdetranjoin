import { VStack, Text, Icon, HStack, View, Divider } from "native-base";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

import { VehicleDTO } from "@dtos/VehicleDTO";
import { VehicleGetInDatabaseDTO } from "@dtos/VehicleGetInDatabaseDTO";

type Props = {
  vehicleFipeInfo: VehicleDTO;
  //vehicleFipeInfoFromDatabase: VehicleGetInDatabaseDTO;
};

export function FipeCard({ vehicleFipeInfo }: Props) {
  const newVehicleFipeDate =
    vehicleFipeInfo.fipe.dados[0].mes_referencia.toUpperCase();
  return (
    <VStack>
      <HStack
        bg="white"
        alignItems="center"
        borderRadius={6}
        shadow={4}
        px={2}
        my={2}
      >
        <VStack flex={1}>
          <HStack alignItems="center" p={2}>
            <View bg="green.400" borderRadius={9999} p={1}>
              <Icon
                as={MaterialCommunityIcons}
                name="car-outline"
                size={5}
                color="gray.700"
              />
            </View>
            <Text
              fontFamily="heading"
              fontSize="md"
              color="gray.700"
              flex={1}
              ml={2}
            >
              Valor do veículo pela Fipe
            </Text>
          </HStack>

          <Divider />
          <HStack justifyContent="space-between" alignItems="center">
            <Text fontFamily="heading" fontSize="md" color="blue.700" ml={2}>
              {vehicleFipeInfo.fipe.dados[0].texto_valor}
            </Text>
            <Text
              fontFamily="body"
              fontSize="sm"
              color="gray.600"
              my={2}
              mr={2}
            >
              {newVehicleFipeDate}
            </Text>
          </HStack>
        </VStack>
      </HStack>
    </VStack>
  );
}
