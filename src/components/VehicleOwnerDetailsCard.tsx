import { VehicleOwnerDTO } from "@dtos/VehicleOwnerDTO";
import { VStack, HStack, Text, Center, Divider } from "native-base";

import PersonSVG from "../assets/Personal data-pana.svg";

type Props = {
  vehicleOwnerData: VehicleOwnerDTO;
};

export function VehicleOwnerDetailsCard({
  vehicleOwnerData,
}: Props) {
  return (
    <VStack bg="white" borderRadius={6} my={2} shadow={4} p={2}>
      <Center>
        <PersonSVG height={120} width={180} />
      </Center>
      <Divider my={1} />
      <VStack>
        <VStack
          borderRadius={6}
          justifyContent="space-between"
          p={1}
        >
          <Text fontSize="md" fontFamily="heading" color="blue.700">
            Nome do proprietário:
          </Text>
          <Text fontSize="sm" fontFamily="body" color="blue.500" >
            {vehicleOwnerData.Response.nomeProprietario}
          </Text>
        </VStack>
        <VStack
          borderRadius={6}
          justifyContent="space-between"
          p={1}
        >
          <Text fontSize="md" fontFamily="heading" color="blue.700">
            Situação do Veículo:
          </Text>
          <Text fontSize="sm" fontFamily="body" color="blue.500">
            {vehicleOwnerData.Response.situacaoVeiculo}
          </Text>
        </VStack>
        <VStack
          borderRadius={6}
          justifyContent="space-between"
          p={1}
        >
          <Text fontSize="md" fontFamily="heading" color="blue.700">
            Categoria:
          </Text>
          <Text fontSize="sm" fontFamily="body" color="blue.500">
            {vehicleOwnerData.Response.categoria}
          </Text>
        </VStack>
      </VStack>

      <VStack>
        <VStack
          borderRadius={6}
          justifyContent="space-between"
          p={1}
        >
          <Text fontSize="md" fontFamily="heading" color="blue.700">
            Tipo do Documento:
          </Text>
          <Text fontSize="sm" fontFamily="body" color="blue.500">
            {vehicleOwnerData.Response.proprietario.tipoDocumentoProprietario}
          </Text>
        </VStack>
        <VStack
          borderRadius={6}
          justifyContent="space-between"
          p={1}
        >
          <Text fontSize="md" fontFamily="heading" color="blue.700">
            Número do Documento:
          </Text>
          <Text fontSize="sm" fontFamily="body" color="blue.500">
            {vehicleOwnerData.Response.proprietario.numeroDocumentoProprietario}
          </Text>
        </VStack>
        <VStack
          borderRadius={6}
          justifyContent="space-between"
          p={1}
        >
          <Text fontSize="md" fontFamily="heading" color="blue.700">
            Endereço:
          </Text>
          <Text fontSize="sm" fontFamily="body" color="blue.500">
            {vehicleOwnerData.Response.proprietario.enderecoProprietario}
          </Text>
        </VStack>
      </VStack>
    </VStack>
  );
}
