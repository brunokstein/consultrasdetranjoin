import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { TabRoutes } from "./tab.routes";
import { Profile } from "@screens/accessScreens/Profile";
import { PlateRegister } from "@screens/accessScreens/PlateRegister";
import { ChangeVehicle } from "@screens/accessScreens/ChangeVehicle";
import { VehiclePreview } from "@screens/accessScreens/VehiclePreview";
import { DriversLicenseNumberRegister } from "@screens/accessScreens/DriversLicenseNumberRegister";
//import { FipeTable } from "@screens/accessScreens/FipeTable";
//import { ShareDataConfirmation } from '@screens/accessScreens/ShareDataConfirmation';
//import { IpvaCalculatorResult } from '@screens/accessScreens/IpvaCalculatorResult';
//import { IpvaCalculatorOptions } from '@screens/accessScreens/IpvaCalculatorOptions';
//import { AppCopilot } from '@screens/accessScreens/AppCopilot';
//import { Notifications } from '@screens/accessScreens/Notifications';
//import { NotificationDetails } from '@screens/accessScreens/NotificationDetails';

type AppRoutes = {
  tabroutes: undefined;
  plateregister: undefined;
  profile: undefined;
  sharedataconfirmation: undefined;
  changevehicle: undefined;
  fipetable: undefined;
  vehiclepreview: undefined;
  driverslicensenumberregister: undefined;
  //ipvacalculatorresult: undefined;
  //ipvacalculatoroptions: undefined;
  /*  notifications: undefined;
     notificationdetails: undefined;
     appcopilot: undefined; */
};

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AppRoutes>();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="tabroutes">
      <Screen name="tabroutes" component={TabRoutes} />

      <Screen name="plateregister" component={PlateRegister} />
      <Screen name="profile" component={Profile} />

      <Screen name="changevehicle" component={ChangeVehicle} />
      <Screen name="vehiclepreview" component={VehiclePreview} />
      
      <Screen name="driverslicensenumberregister" component={DriversLicenseNumberRegister} />
    </Navigator>
  );
}

/*        <Screen
               name="notifications"
               component={Notifications}
           />
           <Screen
               name="notificationdetails"
               component={NotificationDetails}
           />
           <Screen
               name="appcopilot"
               component={AppCopilot}
           /> 
            <Screen
                name="ipvacalculatorresult"
                component={IpvaCalculatorResult}
            />
            <Screen
                name="ipvacalculatoroptions"
                component={IpvaCalculatorOptions}
            />
             <Screen
                name="driverslicenseinfosrequest"
                component={DriversLicenseInfosRequest}
            />
            <Screen
                name="driverslicensestaterequest"
                component={DriversLicenseStateRequest}
            />
             <Screen
                name="sharedataconfirmation"
                component={ShareDataConfirmation}
            />
           */
