import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { VStack, HStack, Text, Divider, Icon } from "native-base";

import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {
  title: string;
  variant?: "red" | "gray";
};

export function TitleIconCard({ title, variant = "gray", ...rest }: Props) {
  return (
    <VStack>
      <TouchableOpacity {...rest}>
        <HStack
          justifyContent="space-between"
          alignItems="center"
          px={2}
          py={1}
          my={2}
        >
          <Text
            fontFamily="body"
            fontSize="md"
            color={variant === "gray" ? "gray.400" : "red.400"}
          >
            {title}
          </Text>
          <Icon
            as={MaterialCommunityIcons}
            name="chevron-right"
            size={6}
            color={variant === "gray" ? "gray.400" : "red.400"}
          />
        </HStack>
      </TouchableOpacity>
      <Divider />
    </VStack>
  );
}
