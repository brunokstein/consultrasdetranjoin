import { useEffect } from "react";
import { StatusBar } from "react-native";
import { NativeBaseProvider } from "native-base";
import { LinearGradient } from "react-native-svg";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
//import { TestIds, useAppOpenAd } from "react-native-google-mobile-ads";

import { Routes } from "./src/routes";

import { THEME } from "./src/theme";

import { Loading } from "@components/Loading";
import { AuthContextProvider } from "@contexts/AuthContext";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  const config = {
    dependencies: {
      "linear-gradient": LinearGradient,
    },
  };
  
  /*  const adUnitId = __DEV__ ? TestIds.APP_OPEN : "ca-app-pub-3940256099942544/3419835294";

  const { load, show, isLoaded, isClosed } = useAppOpenAd(adUnitId, {
    requestNonPersonalizedAdsOnly: true,
  }); */

  /*   useEffect(() => {
    load();
  }, [load]); */

  /* if (isLoaded) {
    return show();
  } else { */
  return (
    <NativeBaseProvider theme={THEME} config={config}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <AuthContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </AuthContextProvider>
    </NativeBaseProvider>
  );
}

// && isClosed
