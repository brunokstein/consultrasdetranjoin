import { useTheme, Icon } from 'native-base';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Home } from '@screens/tabScreens/Home';
import { Vehicle } from '@screens/tabScreens/Vehicle';
import { DriversLicense } from '@screens/tabScreens/DriversLicense';
//import { Requests } from '@screens/appScreens/Requests';

type AppRoutes = {
    home: undefined;
    vehicle: undefined;
    driverslicense: undefined;
    //requests: undefined;
}

export type TabNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function TabRoutes() {

    const { sizes, colors } = useTheme();

    const iconSize = 6;

    return (
        <Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: colors.white,
            tabBarInactiveTintColor: colors.gray[500],
            tabBarStyle: {
                paddingBottom: sizes[1],
                backgroundColor: colors.blue[700]
            }
        }}>

            <Screen
                name="home"
                component={Home}
                options={{
                    tabBarLabel: "Início",
                    tabBarIcon: ({ color }) => (
                        <Icon as={MaterialCommunityIcons} name="home-outline" color={color} size={iconSize} />
                    )
                }}
            />
            <Screen
                name="vehicle"
                component={Vehicle}
                options={{
                    tabBarLabel: "Veículo",
                    tabBarIcon: ({ color }) => (
                        <Icon as={MaterialCommunityIcons} name="car-outline" color={color} size={iconSize} />
                    )
                }}
            />
            <Screen
                name="driverslicense"
                component={DriversLicense}
                options={{
                    tabBarLabel: "CNH",
                    tabBarIcon: ({ color }) => (
                        <Icon as={MaterialCommunityIcons} name="card-account-details-outline" color={color} size={iconSize} />
                    )
                }}
            />
        </Navigator>
    );
}

// arrow-left, arrow-right, car-outline, card-account-details-outline, help-circle-outline = MaterialCommunityIcons
// attach-money = MaterialIcons
/* <Screen
                name="requests"
                component={Requests}
                options={{
                    tabBarLabel: "Pedidos",
                    tabBarIcon: ({ color }) => (
                        <Icon as={MaterialIcons} name="attach-money" color={color} size={iconSize} />
                    )
                }}
            /> */
