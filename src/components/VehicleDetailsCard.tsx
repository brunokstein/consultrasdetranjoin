import { TouchableOpacity } from "react-native";
import { VStack, HStack, Text, Center, Icon, Divider } from "native-base";
import { VehicleGetInDatabaseDTO } from "@dtos/VehicleGetInDatabaseDTO";

import VehicleSVG from "../assets/Car driving-cuate.svg";
import { format } from "date-fns";

import { Ionicons } from "@expo/vector-icons";

type Props = {
  vehicleData: VehicleGetInDatabaseDTO;
  changeVehicle?: () => void;
};

export function VehicleDetailsCard({
  vehicleData,
  changeVehicle,
}: Props) {
  const crvDate = new Date(vehicleData.data.dataEmissaoUltimoCRV);
  const formattedCrvDate = format(crvDate, "dd/MM/yyyy");
    return (
      <VStack>
        <VStack bg="white" borderRadius={6} my={2} shadow={4} p={2}>
          <Center mb={2}>
            <VehicleSVG height={120} width={180} />
            <TouchableOpacity onPress={changeVehicle}>
              <HStack alignItems="center">
                <Text fontFamily="heading" fontSize="md" color="blue.700" px={2}>
                  Trocar Veículo
                </Text>
                <Icon
                  as={Ionicons}
                  name="swap-horizontal-sharp"
                  size={5}
                  color="blue.700"
                />
              </HStack>
            </TouchableOpacity>
          </Center>
          <Divider my={1} />
          <HStack p={1} alignItems="center" justifyContent="space-between">
            <Text fontSize="md" fontFamily="heading" color="blue.700">
              Placa:
            </Text>
            <Text fontSize="sm" fontFamily="body" color="blue.500" ml={2}>
              {vehicleData.data.placa}
            </Text>
          </HStack>
          <HStack p={1} alignItems="center" justifyContent="space-between">
            <Text fontSize="md" fontFamily="heading" color="blue.700">
              Modelo:
            </Text>
            <Text fontSize="sm" fontFamily="body" color="blue.500" ml={2}>
              {vehicleData.data.modelo}
            </Text>
          </HStack>
          <HStack p={1} alignItems="center" justifyContent="space-between">
            <Text fontSize="lg" fontFamily="heading" color="blue.700">
              Ano:
            </Text>
            <Text fontSize="md" fontFamily="body" color="blue.500" ml={2}>
              {vehicleData.data.ano}
            </Text>
          </HStack>
          <HStack p={1} alignItems="center" justifyContent="space-between">
            <Text fontSize="lg" fontFamily="heading" color="blue.700">
              Ano-Modelo:
            </Text>
            <Text fontSize="md" fontFamily="body" color="blue.500" ml={2}>
              {vehicleData.data.anoModelo}
            </Text>
          </HStack>
          <HStack p={1} alignItems="center" justifyContent="space-between">
            <Text fontSize="lg" fontFamily="heading" color="blue.700">
              Cor:
            </Text>
            <Text fontSize="md" fontFamily="body" color="blue.500" ml={2}>
              {vehicleData.data.cor}
            </Text>
          </HStack>
          <VStack bg="white" borderRadius={6} my={2}>
            <HStack p={1} alignItems="center" justifyContent="space-between">
              <Text fontSize="lg" fontFamily="heading" color="blue.700">
                Combustível:
              </Text>
              <Text fontSize="md" fontFamily="body" color="blue.500" ml={2}>
                {vehicleData.data.combustivel}
              </Text>
            </HStack>
            <HStack p={1} alignItems="center" justifyContent="space-between">
              <Text fontSize="lg" fontFamily="heading" color="blue.700">
                Tipo do veículo:
              </Text>
              <Text fontSize="md" fontFamily="body" color="blue.500" ml={2}>
                {vehicleData.data.tipo_veiculo}
              </Text>
            </HStack>
            <HStack p={1} alignItems="center" justifyContent="space-between">
              <Text fontSize="lg" fontFamily="heading" color="blue.700">
                Renavam:
              </Text>
              <Text fontSize="md" fontFamily="body" color="blue.500" ml={2}>
                {vehicleData.data.renavam}
              </Text>
            </HStack>
            <HStack p={1} alignItems="center" justifyContent="space-between">
              <Text fontSize="lg" fontFamily="heading" color="blue.700">
                Último CRV:
              </Text>
              <Text fontSize="md" fontFamily="body" color="blue.500" ml={2}>
                {formattedCrvDate}
              </Text>
            </HStack>
            <HStack p={1} alignItems="center" justifyContent="space-between">
              <Text fontSize="lg" fontFamily="heading" color="blue.700">
                Restricões:
              </Text>
              <Text fontSize="md" fontFamily="body" color="blue.500" ml={2}>
                {vehicleData.data.restricoes.restricao_1 &&
                  vehicleData.data.restricoes.restricao_2 &&
                  vehicleData.data.restricoes.restricao_3 &&
                  vehicleData.data.restricoes.restricao_4}
              </Text>
            </HStack>
          </VStack>
        </VStack>
      </VStack>
    );
}

/* bg={{
    linearGradient: {
      colors: ["blue.100", "blue.500"],
      start: [0, 0],
      end: [1, 0],
    },
  }} */
