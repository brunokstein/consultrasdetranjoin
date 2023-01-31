import { DriversLicenseDTO } from "@dtos/DriversLicenseDTO";
import { VStack, Text, Center, Divider, HStack } from "native-base";

import PersonSVG from "../assets/Personal data-pana.svg";

type Props = {
  driversLicenseData: DriversLicenseDTO;
};

export function DriversLicenseCard({ driversLicenseData }: Props) {
  return (
    <VStack bg="white" borderRadius={6} my={2} shadow={4} p={2}>
      <Center>
        <PersonSVG height={120} width={180} />
      </Center>
      <Divider my={1} />
      <VStack>
        <VStack borderRadius={6} justifyContent="space-between" p={1}>
          <Text fontSize="md" fontFamily="heading" color="blue.700">
            Nome:
          </Text>
          <Text fontSize="sm" fontFamily="body" color="blue.500">
            {driversLicenseData.DadosDoCondutor.Nome}
          </Text>
        </VStack>
        <HStack>
          <VStack borderRadius={6} justifyContent="space-between" p={1}>
            <Text fontSize="md" fontFamily="heading" color="blue.700">
              CNH:
            </Text>
            <Text fontSize="sm" fontFamily="body" color="blue.500">
              {driversLicenseData.DadosDoCondutor.Cnh}
            </Text>
          </VStack>
          <VStack borderRadius={6} justifyContent="space-between" p={1} ml={8}>
            <Text fontSize="md" fontFamily="heading" color="blue.700">
              UF:
            </Text>
            <Text fontSize="sm" fontFamily="body" color="blue.500">
              {driversLicenseData.DadosDoCondutor.Uf}
            </Text>
          </VStack>
        </HStack>
        <HStack>
          <VStack borderRadius={6} justifyContent="space-between" p={1}>
            <Text fontSize="md" fontFamily="heading" color="blue.700">
              Vencimento:
            </Text>
            <Text fontSize="sm" fontFamily="body" color="blue.500">
              {driversLicenseData.DadosDoCondutor.Vencimento}
            </Text>
          </VStack>
          <VStack borderRadius={6} justifyContent="space-between" p={1} ml={8}>
            <Text fontSize="md" fontFamily="heading" color="blue.700">
              Categoria:
            </Text>
            <Text fontSize="sm" fontFamily="body" color="blue.500">
              {driversLicenseData.DadosDoCondutor.Categoria}
            </Text>
          </VStack>
        </HStack>

        <VStack borderRadius={6} justifyContent="space-between" p={1}>
          <Text fontSize="md" fontFamily="heading" color="blue.700">
            Data da Primeira Habilitação:
          </Text>
          <Text fontSize="sm" fontFamily="body" color="blue.500">
            {driversLicenseData.DadosDoCondutor.DataPrimeiraHabilitacao}
          </Text>
        </VStack>
        <VStack borderRadius={6} justifyContent="space-between" p={1}>
          <Text fontSize="md" fontFamily="heading" color="blue.700">
            Habilitado:
          </Text>
          <Text fontSize="sm" fontFamily="body" color="blue.500">
            {driversLicenseData.DadosDoCondutor.Habilitado}
          </Text>
        </VStack>
        <VStack borderRadius={6} justifyContent="space-between" p={1}>
          <Text fontSize="md" fontFamily="heading" color="blue.700">
            Numero do RG:
          </Text>
          <Text fontSize="sm" fontFamily="body" color="blue.500">
            {driversLicenseData.DadosDoCondutor.Rg.RgNumero}
          </Text>
        </VStack>
        <HStack>
          <VStack borderRadius={6} justifyContent="space-between" p={1}>
            <Text fontSize="md" fontFamily="heading" color="blue.700">
              Órgão expeditor:
            </Text>
            <Text fontSize="sm" fontFamily="body" color="blue.500">
              {driversLicenseData.DadosDoCondutor.Rg.RgOrgaoExpeditor}
            </Text>
          </VStack>
          <VStack borderRadius={6} justifyContent="space-between" p={1} ml={8}>
            <Text fontSize="md" fontFamily="heading" color="blue.700">
              Estado do RG:
            </Text>
            <Text fontSize="sm" fontFamily="body" color="blue.500">
              {driversLicenseData.DadosDoCondutor.Rg.RgUf}
            </Text>
          </VStack>
        </HStack>
      </VStack>
    </VStack>
  );
}