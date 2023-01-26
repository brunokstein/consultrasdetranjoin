import { VStack, HStack, Text, Center, Icon, Divider, View } from "native-base";
import { VehicleDTO } from "@dtos/VehicleDTO";
import { VehicleOwnerDTO } from "@dtos/VehicleOwnerDTO";

import VehicleSVG from "../assets/Car driving-cuate.svg";
import { format } from "date-fns";

import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
    vehicleData: VehicleDTO;
    vehicleOwnerData: VehicleOwnerDTO;
};

export function VehiclePreviewCard({
    vehicleData,
    vehicleOwnerData,
}: Props) {
    const crvDate = new Date(vehicleOwnerData.Response.dataEmissaoUltimoCRV);
    const formattedCrvDate = format(crvDate, "dd/MM/yyyy");
    const newVehicleFipeDate =
        vehicleData.fipe.dados[0].mes_referencia.toUpperCase();
    return (
        <VStack bg="white" borderRadius={6} my={2} shadow={4}>
            <VStack p={2}>
                <Center mb={2}>
                    <VehicleSVG height={120} width={180} />
                    <Text
                        fontFamily="heading"
                        fontSize="lg"
                        color="gray.700"
                    >
                        Os baguiu do carro
                    </Text>
                </Center>
                <Divider my={1} />
                <HStack p={1} alignItems="center" justifyContent="space-between">
                    <Text fontSize="md" fontFamily="heading" color="blue.700">
                        Placa:
                    </Text>
                    <Text fontSize="sm" fontFamily="body" color="blue.500" ml={2}>
                        {vehicleData.placa}
                    </Text>
                </HStack>
                <HStack p={1} alignItems="center" justifyContent="space-between">
                    <Text fontSize="md" fontFamily="heading" color="blue.700">
                        Modelo:
                    </Text>
                    <Text fontSize="sm" fontFamily="body" color="blue.500" ml={2}>
                        {vehicleData.extra.marca_modelo.modelo}
                    </Text>
                </HStack>
                <HStack p={1} alignItems="center" justifyContent="space-between">
                    <Text fontSize="md" fontFamily="heading" color="blue.700">
                        Ano:
                    </Text>
                    <Text fontSize="sm" fontFamily="body" color="blue.500" ml={2}>
                        {vehicleData.ano}
                    </Text>
                </HStack>
                <HStack p={1} alignItems="center" justifyContent="space-between">
                    <Text fontSize="md" fontFamily="heading" color="blue.700">
                        Ano-Modelo:
                    </Text>
                    <Text fontSize="sm" fontFamily="body" color="blue.500" ml={2}>
                        {vehicleData.anoModelo}
                    </Text>
                </HStack>
                <HStack p={1} alignItems="center" justifyContent="space-between">
                    <Text fontSize="md" fontFamily="heading" color="blue.700">
                        Cor:
                    </Text>
                    <Text fontSize="sm" fontFamily="body" color="blue.500" ml={2}>
                        {vehicleData.cor}
                    </Text>
                </HStack>
                <HStack p={1} alignItems="center" justifyContent="space-between">
                    <Text fontSize="md" fontFamily="heading" color="blue.700">
                        Combustível:
                    </Text>
                    <Text fontSize="sm" fontFamily="body" color="blue.500" ml={2}>
                        {vehicleData.extra.combustivel.combustivel}
                    </Text>
                </HStack>
                <HStack p={1} alignItems="center" justifyContent="space-between">
                    <Text fontSize="md" fontFamily="heading" color="blue.700">
                        Tipo do veículo:
                    </Text>
                    <Text fontSize="sm" fontFamily="body" color="blue.500" ml={2}>
                        {vehicleData.extra.tipo_veiculo.tipo_veiculo}
                    </Text>
                </HStack>
                <HStack p={1} alignItems="center" justifyContent="space-between">
                    <Text fontSize="md" fontFamily="heading" color="blue.700">
                        Renavam:
                    </Text>
                    <Text fontSize="sm" fontFamily="body" color="blue.500" ml={2}>
                        {vehicleOwnerData.Response.renavam}
                    </Text>
                </HStack>
                <HStack p={1} alignItems="center" justifyContent="space-between">
                    <Text fontSize="md" fontFamily="heading" color="blue.700">
                        Último CRV:
                    </Text>
                    <Text fontSize="sm" fontFamily="body" color="blue.500" ml={2}>
                        {formattedCrvDate}
                    </Text>
                </HStack>
                <HStack p={1} alignItems="center" justifyContent="space-between">
                    <Text fontSize="md" fontFamily="heading" color="blue.700">
                        Restricões:
                    </Text>
                    <Text fontSize="sm" fontFamily="body" color="blue.500" ml={2}>
                        {vehicleData.extra.restricao_1.restricao &&
                            vehicleData.extra.restricao_2.restricao &&
                            vehicleData.extra.restricao_3.restricao &&
                            vehicleData.extra.restricao_4.restricao}
                    </Text>
                </HStack>
                <Divider />
                <VStack>
                    <VStack borderRadius={6} justifyContent="space-between" p={1}>
                        <Text fontSize="md" fontFamily="heading" color="blue.700">
                            Nome do proprietário:
                        </Text>
                        <Text fontSize="sm" fontFamily="body" color="blue.500">
                            {vehicleOwnerData.Response.nomeProprietario}
                        </Text>
                    </VStack>
                    <VStack borderRadius={6} justifyContent="space-between" p={1}>
                        <Text fontSize="md" fontFamily="heading" color="blue.700">
                            Situação do Veículo:
                        </Text>
                        <Text fontSize="sm" fontFamily="body" color="blue.500">
                            {vehicleOwnerData.Response.situacaoVeiculo}
                        </Text>
                    </VStack>
                    <VStack borderRadius={6} justifyContent="space-between" p={1}>
                        <Text fontSize="md" fontFamily="heading" color="blue.700">
                            Categoria:
                        </Text>
                        <Text fontSize="sm" fontFamily="body" color="blue.500">
                            {vehicleOwnerData.Response.categoria}
                        </Text>
                    </VStack>
                </VStack>

                <VStack>
                    <VStack borderRadius={6} justifyContent="space-between" p={1}>
                        <Text fontSize="md" fontFamily="heading" color="blue.700">
                            Tipo do Documento:
                        </Text>
                        <Text fontSize="sm" fontFamily="body" color="blue.500">
                            {vehicleOwnerData.Response.proprietario.tipoDocumentoProprietario}
                        </Text>
                    </VStack>
                    <VStack borderRadius={6} justifyContent="space-between" p={1}>
                        <Text fontSize="md" fontFamily="heading" color="blue.700">
                            Número do Documento:
                        </Text>
                        <Text fontSize="sm" fontFamily="body" color="blue.500">
                            {vehicleOwnerData.Response.proprietario.numeroDocumentoProprietario}
                        </Text>
                    </VStack>
                    <VStack borderRadius={6} justifyContent="space-between" p={1}>
                        <Text fontSize="md" fontFamily="heading" color="blue.700">
                            Endereço:
                        </Text>
                        <Text fontSize="sm" fontFamily="body" color="blue.500">
                            {vehicleOwnerData.Response.proprietario.enderecoProprietario}
                        </Text>
                    </VStack>
                </VStack>
            </VStack>
            <HStack
                bg="white"
                alignItems="center"
                px={2}
                mb={2}
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
                            {vehicleData.fipe.dados[0].texto_valor}
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

/* bg={{
    linearGradient: {
      colors: ["blue.100", "blue.500"],
      start: [0, 0],
      end: [1, 0],
    },
  }} */
