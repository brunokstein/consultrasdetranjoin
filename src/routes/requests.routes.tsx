/* import { useTheme } from 'native-base';
import { createMaterialTopTabNavigator, MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs';

import { OnGoing } from '@screens/requestsScreens/OnGoing';
import { Cancelled } from '@screens/requestsScreens/Cancelled';
import { Concluded } from '@screens/requestsScreens/Concluded';

type RequestsRoutes = {
    ongoing: undefined;
    concluded: undefined;
    cancelled: undefined;
}

export type RequestsNavigatorRoutesProps = MaterialTopTabNavigationProp<RequestsRoutes>;

const { Navigator, Screen } = createMaterialTopTabNavigator<RequestsRoutes>();

export function RequestsRoutes() {

    const { colors, fontSizes, fonts } = useTheme();

    return (
        <Navigator screenOptions={{
            tabBarActiveTintColor: colors.white,
            tabBarInactiveTintColor: colors.gray[400],
            tabBarStyle: {
                backgroundColor: colors.gray[700],
            },
        }}
        >
            <Screen
                name="ongoing"
                component={OnGoing}
                options={{
                    tabBarLabel: "Em andamento",   
                    tabBarLabelStyle: {
                        textTransform: 'none',
                        fontFamily: fonts.heading,
                        fontSize: fontSizes.sm,
                        textAlign: "left"
                    }
                }}
            />

            <Screen
                name="concluded"
                component={Concluded}
                options={{
                    tabBarLabel: "Concluídos",   
                    tabBarLabelStyle: {
                        textTransform: 'none',
                        fontFamily: fonts.heading,
                        fontSize: fontSizes.sm,
                    }
                }}
            />

            <Screen
                name="cancelled"
                component={Cancelled}
                options={{
                    tabBarLabel: "Cancelados",   
                    tabBarLabelStyle: {
                        textTransform: 'none',
                        fontFamily: fonts.heading,
                        fontSize: fontSizes.sm,
                    }
                }}    
            />

        </Navigator>
    );
} */