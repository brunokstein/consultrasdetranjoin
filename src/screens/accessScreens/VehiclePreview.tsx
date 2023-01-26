import { useState } from "react";
import { ScrollView, VStack, useToast } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { useAuth } from "@hooks/useAuth";
import { AppError } from "@utils/AppError";

import { Button } from "@components/Button";
import { VehiclePreviewCard } from "@components/VehiclePreviewCard";

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
        <VStack p={6}>
          <VehiclePreviewCard
            vehicleData={vehicle}
            vehicleOwnerData={vehicleOwner}
          />
          <Button
            title="Salvar"
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
