import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { VStack, Icon } from 'native-base'
import { MaterialCommunityIcons } from '@expo/vector-icons';


export function BackIconButton({ ...rest }: TouchableOpacityProps) {
    return (
        <VStack>
            <TouchableOpacity
                {...rest}
            >
                <Icon
                    as={MaterialCommunityIcons}
                    name="arrow-left"
                    size={6}
                    color="gray.700"
                />
            </TouchableOpacity>
        </VStack>
    );
}