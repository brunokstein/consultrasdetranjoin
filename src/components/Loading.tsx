import { Spinner, Center } from 'native-base';

export function Loading() {
    return (
        <Center flex={1} bg="white">
            <Spinner color="blue.700" />
        </Center>
    );
}