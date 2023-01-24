import { Button as ButtonNativeBase, IButtonProps, Text, HStack, Center } from 'native-base';

type Props = IButtonProps & {
    title: string;
    titleColor: "gray" | "white";
    variant: "blue" | "gray";
}

export function Button({ title, variant, titleColor, ...rest }: Props) {
    return (
        <ButtonNativeBase
            w="full"
            h={12}
            bg={variant === "blue" ? "blue.700" : "gray.700"}
            rounded="lg"
            _pressed={{
                bg: variant === "blue" ? "blue.500" : "gray.600"
            }}
            {...rest}
        >
            <HStack>
                <Center>
                    <Text
                        color={titleColor === "gray" ? "gray.700" : "white"}
                        fontFamily="heading"
                        fontSize="md"
                    >
                        {title}
                    </Text>

                </Center>
            </HStack>
        </ButtonNativeBase>
    );
}