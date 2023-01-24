/* import { HStack, Text, Center, Icon } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

 type Props = {
    data: FipeDTO
} 

type Props = {
    month: string;
    value: string;
    devalued: boolean;
}

export function FipeValueByMonth({ month, value, devalued }: Props) {
    return (
        <HStack
            alignItems="center"
            borderWidth={1}
            borderRadius={6}
            borderColor="gray.300"
            p={2}
            my={1}
        >
            <Text
                fontSize="sm"
                fontFamily="body"
                color="gray.700"
            >
                {month}
            </Text>
            <Center flex={1}>
                <Text
                    fontSize="md"
                    fontFamily="body"
                    color="gray.400"
                >
                    {value}
                </Text>
            </Center>
            <Icon
                as={Ionicons}
                name={devalued === true ? "trending-down-outline" : "trending-up"}
                size={6}
                color={devalued === true ? "red.500" : "green.500"}
                mr={2}
            />
        </HStack>
    );
} */