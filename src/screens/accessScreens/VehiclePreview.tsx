import { useState } from "react";
import { ScrollView, VStack, Text, useToast } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { useAuth } from "@hooks/useAuth";
import { AppError } from "@utils/AppError";

import { FipeCard } from "@components/FipeCard";
import { VehicleDetailsCard } from "@components/VehicleDetailsCard";
import { VehicleOwnerDetailsCard } from "@components/VehicleOwnerDetailsCard";
import { Button } from "@components/Button";

export function VehiclePreview() {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const toast = useToast();
  const { vehicle, vehicleOwner, saveVehicleDataInDatabase } = useAuth();

  async function handleSaveVehicleDataInDatabase() {
    try {
      setIsLoading(true);
      await saveVehicleDataInDatabase();
      navigation.navigate("tabroutes");
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Não foi possível salvar as informações do carro. Tente novamente mais tarde.";

      toast.show({
        title,
        placement: "top",
        bgColor: "red.500",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <VStack>
          <Text>Informações do veículo</Text>
          <VehicleDetailsCard
            vehicleData={vehicle}
            vehicleOwnerData={vehicleOwner}
          />
          <VehicleOwnerDetailsCard vehicleOwnerData={vehicleOwner} />
          <FipeCard vehicleFipeInfo={vehicle} />
          <Button
            title="Salvar as informações do carro"
            titleColor="white"
            variant="blue"
            onPress={handleSaveVehicleDataInDatabase}
            isLoading={isLoading}
          />
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}
