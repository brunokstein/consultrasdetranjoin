import { useReducer, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { VStack, Text, Image, Center, useToast } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";

import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { AppError } from "@utils/AppError";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useAuth } from "@hooks/useAuth";

type FormData = {
  email: string;
  password: string;
};

export function SignIn() {
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const toast = useToast();
  const { signIn, user } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  function handleNewAccount() {
    navigation.navigate("signup");
  }

  async function handleLogin({ email, password }: FormData) {
    try {
      setIsLoading(true);
      await signIn(email, password);
      if (user.status === 0) {
        toast.show({
          title: "Usuário não existente. Realize o seu cadastro!",
          placement: "top",
          bgColor: "red.500",
        });
      } else {
        toast.show({
          title: "Sucesso ao logar!",
          placement: "top",
          bgColor: "green.500",
        });
      }
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? "Usuario ou senha incorretos!"
        : "Nao foi possivel entrar. Tente novamente mais tarde.";

      setIsLoading(false);

      toast.show({
        title,
        placement: "top",
        bgColor: "red.500",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <VStack flex={1} p={6}>
        <Center flex={1}>
          <Image
            source={require("../../assets/Screenshot_1.png")}
            resizeMode="contain"
            alt="Logo do aplicativo"
          />
          <Text fontSize="xl" fontFamily="heading" color="gray.700" mt={4}>
            JoinAds Consultas
          </Text>
          <Text
            fontSize="md"
            fontFamily="body"
            color="gray.400"
            textAlign="center"
            mt={2}
          >
            Consulte a situação da sua CNH e do seu veículo!
          </Text>
        </Center>

        <Controller
          control={control}
          name="email"
          rules={{ required: "Informe o e-mail" }}
          render={({ field: { onChange } }) => (
            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              onChangeText={onChange}
              errorMessage={errors.email?.message}
              autoCapitalize="none"
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          rules={{ required: "Informe a senha" }}
          render={({ field: { onChange } }) => (
            <Input
              secureTextEntry
              autoCapitalize="none"
              placeholder="Senha"
              onChangeText={onChange}
              errorMessage={errors.password?.message}
            />
          )}
        />

        <VStack alignItems="center">
          <Button
            variant="blue"
            title="Acessar"
            titleColor="white"
            isLoading={isLoading}
            onPress={handleSubmit(handleLogin)}
          />

          <Button
            variant="gray"
            title="Criar conta"
            titleColor="white"
            my={2}
            onPress={handleNewAccount}
          />
        </VStack>
      </VStack>
    </SafeAreaView>
  );
}
