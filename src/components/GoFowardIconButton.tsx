import { View, Icon } from 'native-base';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export function GoFowardIconButton({...rest}: TouchableOpacityProps) {
    return (
        <View p={2} borderRadius={9999} bg="blue.700">
            <TouchableOpacity {...rest}>
                <Icon as={MaterialCommunityIcons} name="arrow-right" size={4} color="white" />
            </TouchableOpacity>
        </View>
    );
}
