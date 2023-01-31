import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { VStack, Text, ScrollView, Image, Center, useToast } from "native-base";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { databaseApi } from "@services/api";
//import { useInterstitialAd, TestIds } from 'react-native-google-mobile-ads';

import * as yup from "yup";
import { AppError } from "@utils/AppError";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

type FormDataProps = {
  name: string;
  email: string;
  phone: string;
  password: string;
  password_confirm: string;
  status: number;
};

const RegisterSchema = yup.object({
  name: yup.string().required("Informe o nome."),
  email: yup.string().required("Informe o e-mail.").email("E-mail invalido."),
  phone: yup
    .string()
    .required("Informe o número de celular.")
    .length(11, "Número inexistente."),
  password: yup
    .string()
    .required("Informe a senha.")
    .min(6, "A senha deve ter pelo menos 6 digitos."),
  password_confirm: yup
    .string()
    .required("Confirme a senha.")
    .oneOf([yup.ref("password"), null], "A confirmacao da senha nao confere."),
});

export function SignUp() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState("");

  const toast = useToast();
  /*  const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : "ca-app-pub-3940256099942544/1033173712";
    const { isLoaded, isClosed, load, show } = useInterstitialAd(adUnitId, {
        requestNonPersonalizedAdsOnly: true,
    }); */
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(RegisterSchema),
  });

  function handleGoBack() {
    navigation.goBack();
  }

  async function handleSignUp({
    name,
    email,
    phone,
    password,
    status = 1,
  }: FormDataProps) {
    try {
      setIsLoading(true);
      await databaseApi.post("/user/create", {
        name,
        email,
        phone,
        password,
        status,
      });
      navigation.navigate("signin");
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Nao foi possivel criar a conta. Tente novamente mais tarde.";

      toast.show({
        title,
        placement: "top",
        bgColor: "red.500",
      });
    } finally {
      setIsLoading(false);
    }
    /*  if (isLoaded) {
            show();
        } else {
            
        }*/
  }

  /*     useEffect(() => {
        load();
    }, [load]);

    useEffect(() => {
        if (isClosed) {
            navigation.navigate("tabroutes");
        }
    }, [isClosed, navigation]); */

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <VStack flex={1} p={6}>
          <Text fontSize="xl" fontFamily="heading" color="gray.700">
            Bem vindo!
          </Text>
          <Text fontSize="md" fontFamily="body" color="gray.500">
            Para maior segurança, realize o seu cadastro!
          </Text>
          <Center mt={2}>
            <Image
              source={require("../../assets/Screenshot_1.png")}
              resizeMode="contain"
              alt="Logo do aplicativo"
            />
          </Center>
          <VStack flex={1} mt={6}>
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Nome"
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.name?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="E-mail"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.email?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="phone"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Celular"
                  keyboardType="numeric"
                  autoCapitalize="none"
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.phone?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Senha"
                  secureTextEntry
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.password?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="password_confirm"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Confirme a senha"
                  secureTextEntry
                  onChangeText={onChange}
                  value={value}
                  onSubmitEditing={handleSubmit(handleSignUp)}
                  returnKeyType="send"
                  errorMessage={errors.password_confirm?.message}
                />
              )}
            />
          </VStack>

          <Button
            title="Cadastrar"
            variant="blue"
            titleColor="white"
            isLoading={isLoading}
            onPress={handleSubmit(handleSignUp)}
          />
          <Button
            title="Voltar para o login"
            variant="gray"
            titleColor="white"
            mt={2}
            onPress={handleGoBack}
          />
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}
