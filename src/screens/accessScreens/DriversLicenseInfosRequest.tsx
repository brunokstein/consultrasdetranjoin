/* import { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { VStack, Text, ScrollView } from 'native-base';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';

import { AppNavigatorRoutesProps } from '@routes/app.routes';

//import { BannerAd, BannerAdSize, TestIds, useInterstitialAd } from 'react-native-google-mobile-ads';

import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { BackIconButton } from '@components/BackIconButton';

type FormDataProps = {
    cpf: string;
    driversLicenseNumber: string;
    driversLicenseDate: string;
}

const RegisterSchema = yup.object({
    cpf: yup.string().required('Informe o CPF.').length(11, 'CPF Inválido'),
    driversLicenseNumber: yup.string().required('Informe o número da CNH.').length(11, 'CNH Inválida'),
    driversLicenseDate: yup.date().typeError('Formato inválido. DDMMYYYY').required('Informe a data de validade da CNH'),
});

export function DriversLicenseInfosRequest() {

    const navigation = useNavigation<AppNavigatorRoutesProps>();

    /* const adUnitIdBanner = __DEV__ ? TestIds.BANNER : "ca-app-pub-3940256099942544/6300978111";

    const adUnitIdInterstitial = __DEV__ ? TestIds.INTERSTITIAL : "ca-app-pub-3940256099942544/1033173712";
    const { isLoaded, isClosed, load, show } = useInterstitialAd(adUnitIdInterstitial, {
        requestNonPersonalizedAdsOnly: true,
    }); 

    const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
        resolver: yupResolver(RegisterSchema)
    });

    function handleGoBack() {
        navigation.goBack();
    }

    function handleRegisterDriversLicenseState() {
        navigation.navigate("driverslicensestaterequest");
       /*  if (isLoaded) {
            show();
        } else {
            
        } 
    }

     useEffect(() => {
        load();
    }, [load]);

    useEffect(() => {
        if (isClosed) {
            navigation.navigate("driverslicensestaterequest");
        }
    }, [isClosed, navigation]);

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
                        Precisamos de algumas {"\n"}informações da sua CNH!
                    </Text>
                    <Text
                        fontFamily="body"
                        fontSize="sm"
                        color="gray.400"
                        mt={2}
                        mb={4}
                    >
                        Assim conseguimos te mostrar a pontuação da sua CNH para você consultar quando quiser
                    </Text>
                
                    <VStack flex={1}>
                        <Controller
                            control={control}
                            name="cpf"
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    placeholder="Número de CPF"
                                    keyboardType="number-pad"
                                    onChangeText={onChange}
                                    value={value}
                                    errorMessage={errors.cpf?.message}
                                />
                            )}
                        />

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

                        <Controller
                            control={control}
                            name="driversLicenseDate"
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    placeholder="Data de validade da CNH"
                                    onChangeText={onChange}
                                    value={value}
                                    returnKeyType="send"
                                    errorMessage={errors.driversLicenseDate?.message}
                                />
                            )}
                        />
                    </VStack>

               {/*      <BannerAd
                        unitId={adUnitIdBanner}
                        size={BannerAdSize.MEDIUM_RECTANGLE}
                        requestOptions={{
                            requestNonPersonalizedAdsOnly: true,
                        }}
                    /> 

                    <Button
                        variant="gray"
                        title="Próximo"
                        titleColor="white"
                        onPress={handleRegisterDriversLicenseState}
                    />
                </VStack>
            </ScrollView>
        </SafeAreaView>
    );
} */