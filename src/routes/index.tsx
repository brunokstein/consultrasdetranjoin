import { useEffect, useState } from "react";
import { useTheme, Box, useToast } from "native-base";
import { useAuth } from "@hooks/useAuth";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

import { Loading } from "@components/Loading";

import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";

export function Routes() {
  const { colors } = useTheme();
  const { isLoadingUserStorageData, user } = useAuth();

  const adUnitId = __DEV__
    ? TestIds.BANNER
    : "ca-app-pub-3940256099942544/6300978111";

  const theme = DefaultTheme;
  theme.colors.background = colors.white;
  
  if (isLoadingUserStorageData) {
    return <Loading />;
  }
  return (
    <Box flex={1} bg="white">
      <NavigationContainer>
        {user._id && user.status === 1 ? <AppRoutes /> : <AuthRoutes />}
        <BannerAd
          unitId={adUnitId}
          size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
        />
      </NavigationContainer>
    </Box>
  );
}
