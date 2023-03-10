import { VehicleGetInDatabaseDTO } from "@dtos/VehicleGetInDatabaseDTO";
import { VStack, Text, Center, Divider } from "native-base";

import PersonSVG from "../assets/Personal data-pana.svg";

type Props = {
  vehicleData: VehicleGetInDatabaseDTO;
};

export function VehicleOwnerDetailsCard({ vehicleData }: Props) {
    return (
      <VStack bg="white" borderRadius={6} my={2} shadow={4} p={2}>
        <VStack>
          <VStack borderRadius={6} justifyContent="space-between" p={1}>
            <Text fontSize="md" fontFamily="heading" color="blue.700">
              Nome do proprietário:
            </Text>
            <Text fontSize="sm" fontFamily="body" color="blue.500">
              {vehicleData.data.nomeProprietario}
            </Text>
          </VStack>
          <VStack borderRadius={6} justifyContent="space-between" p={1}>
            <Text fontSize="md" fontFamily="heading" color="blue.700">
              Situação do Veículo:
            </Text>
            <Text fontSize="sm" fontFamily="body" color="blue.500">
              {vehicleData.data.situacaoVeiculo}
            </Text>
          </VStack>
          <VStack borderRadius={6} justifyContent="space-between" p={1}>
            <Text fontSize="md" fontFamily="heading" color="blue.700">
              Categoria:
            </Text>
            <Text fontSize="sm" fontFamily="body" color="blue.500">
              {vehicleData.data.categoria}
            </Text>
          </VStack>
        </VStack>
  
        <VStack>
          <VStack borderRadius={6} justifyContent="space-between" p={1}>
            <Text fontSize="md" fontFamily="heading" color="blue.700">
              Tipo do Documento:
            </Text>
            <Text fontSize="sm" fontFamily="body" color="blue.500">
              {vehicleData.data.tipoDocumentoProprietario}
            </Text>
          </VStack>
          <VStack borderRadius={6} justifyContent="space-between" p={1}>
            <Text fontSize="md" fontFamily="heading" color="blue.700">
              Número do Documento:
            </Text>
            <Text fontSize="sm" fontFamily="body" color="blue.500">
              {vehicleData.data.numeroDocumentoProprietario}
            </Text>
          </VStack>
          <VStack borderRadius={6} justifyContent="space-between" p={1}>
            <Text fontSize="md" fontFamily="heading" color="blue.700">
              Endereço:
            </Text>
            <Text fontSize="sm" fontFamily="body" color="blue.500">
              {vehicleData.data.enderecoProprietario}
            </Text>
          </VStack>
        </VStack>
      </VStack>
    );
}
