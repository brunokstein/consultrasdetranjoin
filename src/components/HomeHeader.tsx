import { HStack, Image, Icon, Text, VStack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

type Props = {
  goToProfile: () => void;
};

export function HomeHeader({ goToProfile }: Props) {
  return (
    <HStack justifyContent="space-between" alignItems="center">
      <Image
        resizeMode="contain"
        source={require("../assets/Screenshot_1.png")}
        alt="Logo do aplicativo"
      />
      <HStack>
        <VStack p={2}>
          <TouchableOpacity
            style={{ alignItems: "center" }}
            onPress={goToProfile}
          >
            <Icon as={MaterialIcons} name="person" color="blue.700" size={5} />
            <Text fontFamily="body" fontSize="sm" color="blue.500">
              Perfil
            </Text>
          </TouchableOpacity>
        </VStack>
      </HStack>
    </HStack>
  );
}

/* <VStack p={2} mr={2} >
<TouchableOpacity style={{ alignItems: "center" }} onPress={goToNotifications}>
    <Icon as={MaterialIcons} name="notifications-none" color="gray.300" size={6} />
    <Text
        fontFamily="body"
        fontSize="md"
        color="gray.300"
    >
        Avisos
    </Text>
</TouchableOpacity>
</VStack> */
