import { Text, Icon, HStack, View, Divider } from "native-base";
import { VehiclesListDTO } from "@dtos/VehiclesListDTO";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
    vehicleList: VehiclesListDTO;
    deleteVehicle: (id:string) => Promise<void>;
    loadSelectedVehicle: (id:string) => Promise<void>;
}

export function VehicleListCard({ vehicleList, deleteVehicle, loadSelectedVehicle }: Props) {
    return (
        <HStack
            bg="white"
            alignItems="center"
            borderRadius={6}
            shadow={4}
            px={2}
            m={1}
        >
            <TouchableOpacity onPress={() => loadSelectedVehicle(vehicleList._id)}>
                <HStack alignItems="center" p={2} flex={1}>
                    <View bg="blue.500" borderRadius={9999} p={1}>
                        <Icon
                            as={MaterialCommunityIcons}
                            name="car-outline"
                            size={5}
                            color="gray.700"
                        />
                    </View>
                    <Text
                        fontFamily="heading"
                        fontSize="sm"
                        color="gray.700"
                        mx="2"
                    >
                        {vehicleList.modelo}
                    </Text>
                    <Text fontFamily="heading" fontSize="sm" color="blue.700">
                        {vehicleList.placa}
                    </Text>
                </HStack>
            </TouchableOpacity>
            <Divider orientation="vertical" mx={2} />
            <TouchableOpacity onPress={() => deleteVehicle(vehicleList._id)}>
                <Icon
                    as={MaterialCommunityIcons}
                    name="delete-outline"
                    size={5}
                    color="gray.700"
                />
            </TouchableOpacity>
        </HStack>
    );
}

