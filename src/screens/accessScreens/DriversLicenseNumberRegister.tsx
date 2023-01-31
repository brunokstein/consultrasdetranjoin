import { useEffect, useState } from 'react';
import { useAuth } from '@hooks/useAuth';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { VStack, Text, ScrollView, useToast } from 'native-base';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';

import { AppNavigatorRoutesProps } from '@routes/app.routes';
import { AppError } from '@utils/AppError';
//import { BannerAd, BannerAdSize, TestIds, useInterstitialAd } from 'react-native-google-mobile-ads';

import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { BackIconButton } from '@components/BackIconButton';

type FormDataProps = {
    driversLicenseNumber: string;
}

const RegisterSchema = yup.object({
    driversLicenseNumber: yup.string().required('Informe o número da CNH.').length(11, 'CNH Inválida'),
});

export function DriversLicenseNumberRegister() {

    const navigation = useNavigation<AppNavigatorRoutesProps>();

    const [isLoading, setIsLoading] = useState(false);
    const { getCnhData } = useAuth();

    const toast = useToast();

    //const adUnitIdBanner = __DEV__ ? TestIds.BANNER : "ca-app-pub-3940256099942544/6300978111";

    /* const adUnitIdInterstitial = __DEV__ ? TestIds.INTERSTITIAL : "ca-app-pub-3940256099942544/1033173712";
    const { isLoaded, isClosed, load, show } = useInterstitialAd(adUnitIdInterstitial, {
        requestNonPersonalizedAdsOnly: true,
    });  */

    const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
        resolver: yupResolver(RegisterSchema)
    });

    function handleGoBack() {
        navigation.goBack();
    }

    async function handleRegisterDriversLicenseNumber({ driversLicenseNumber }: FormDataProps) {
        try {
            setIsLoading(true);
            await getCnhData(driversLicenseNumber);
            navigation.navigate('tabroutes');
        } catch (error) {
            const isAppError = error instanceof AppError;
            const title = isAppError
                ? error.message
                : "Não foi possível verificar a CNH. Tente novamente mais tarde.";

            toast.show({
                title,
                placement: "top",
                bgColor: "red.500",
            });
        } finally {
            setIsLoading(false);
        }
        /* if (isLoaded) {
             show();
         } else {
             
         }  */
    }
    /* 
         useEffect(() => {
            load();
        }, [load]);
    
        useEffect(() => {
            if (isClosed) {
                navigation.navigate("driverslicensestaterequest");
            }
        }, [isClosed, navigation]); */

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
            >
                <VStack p={6} flex={1}>
                    <BackIconButton onPress={handleGoBack} />
                    <Text
                        fontFamily="heading"
                        fontSize="2xl"
                        color="gray.700"
                        lineHeight="sm"
                        mt={4}
                    >
                        Precisamos do {"\n"}número da sua CNH.
                    </Text>
                    <Text
                        fontFamily="body"
                        fontSize="sm"
                        color="gray.400"
                        mt={2}
                        mb={4}
                    >
                        Assim conseguimos te mostrar as informações da CNH para consultar quando quiser.
                    </Text>

                    <VStack flex={1}>
                        <Controller
                            control={control}
                            name="driversLicenseNumber"
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    placeholder="Número da CNH (Nº registro)"
                                    keyboardType="number-pad"
                                    onChangeText={onChange}
                                    value={value}
                                    errorMessage={errors.driversLicenseNumber?.message}
                                />
                            )}
                        />
                    </VStack>

                    {/* <BannerAd
                        unitId={adUnitIdBanner}
                        size={BannerAdSize.MEDIUM_RECTANGLE}
                        requestOptions={{
                            requestNonPersonalizedAdsOnly: true,
                        }}
                    />  */}

                    <Button
                        variant="gray"
                        title="Cadastrar"
                        titleColor="white"
                        isLoading={isLoading}
                        onPress={handleSubmit(handleRegisterDriversLicenseNumber)}
                    />
                </VStack>
            </ScrollView>
        </SafeAreaView>
    );
} 