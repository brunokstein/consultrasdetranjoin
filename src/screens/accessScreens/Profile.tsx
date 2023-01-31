import { TouchableOpacity } from "react-native";
import { useCallback, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import {
  ScrollView,
  VStack,
  HStack,
  Text,
  AlertDialog,
  useToast,
  Box,
  Center,
  Icon,
  useSafeArea,
} from "native-base";
import { useAuth } from "@hooks/useAuth";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { AppError } from "@utils/AppError";
import { MaterialCommunityIcons } from "@expo/vector-icons";
//import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

import { AppNavigatorRoutesProps } from "@routes/app.routes";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { BackIconButton } from "@components/BackIconButton";
import { Loading } from "@components/Loading";

//import { DeleteAccountAlert } from "@components/DeleteAccountAlert";

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  confirm_password?: string;
};

const passwordSchema = yup.object({
  password: yup
    .string()
    .min(6, "A senha deve ter pelo menos 6 digitos.")
    .nullable()
    .transform((value) => (!!value ? value : null)),
  confirm_password: yup
    .string()
    .nullable()
    .transform((value) => (!!value ? value : null))
    .oneOf([yup.ref("password"), null], "A confirmacao de senha nao confere.")
    .when("password", {
      is: (Field: any) => Field,
      then: yup.string().nullable().required("Informe a confirmacao da senha."),
    }),
});

export function Profile() {
  const [alerIsOpen, setAlertIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordUpdateIsLoading, setPasswordUpdateIsLoading] = useState(false);
  const [phoneUpdateIsLoading, setPhoneUpdateIsLoading] = useState(false);
  const [isLogginOut, setIsLogginOut] = useState(false);

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const { user, updateUserPhone, signOut, updateUserPassword, userLogout } = useAuth();

  //const adUnitIdBanner = __DEV__ ? TestIds.BANNER : "ca-app-pub-3940256099942544/6300978111";

  const onClose = () => setAlertIsOpen(false);
  const cancelRef = useRef(null);

  const toast = useToast();

  const appNavigation = useNavigation<AppNavigatorRoutesProps>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    values: {
      name: userName,
      email: userEmail,
      password: "*************",
    },
    resolver: yupResolver(passwordSchema),
  });

  function loadUserInfo() {
    setUserName(user.name);
    setUserEmail(user.email);
    setUserPhone(user.phone);
  }

  function handleGoBack() {
    appNavigation.goBack();
  }

  async function handleDeleteAccount() {
    try {
      setIsLoading(true);
      await signOut();
      setAlertIsOpen(false);
      toast.show({
        render: () => {
          return (
            <Box bg="green.500" p={2} rounded="sm" mb={5}>
              <Text fontFamily="heading" fontSize="sm" color="white">
                Conta apagada com sucesso!
              </Text>
            </Box>
          );
        },
      });
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
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

  async function handlePhoneUpdate(newPhoneNumber: string) {
    try {
      setPhoneUpdateIsLoading(true);
      if (newPhoneNumber === "" || null || newPhoneNumber.length !== 11) {
        toast.show({
          title: "Escreva um número de telefone válido",
          placement: "top",
          bgColor: "red.500",
        });
        return
      }
      await updateUserPhone(newPhoneNumber);
      toast.show({
        render: () => {
          return (
            <Box bg="green.500" p={2} rounded="sm" mb={5}>
              <Text fontFamily="heading" fontSize="sm" color="white">
                Telefone atualizado com sucesso!
              </Text>
            </Box>
          );
        },
      });
      appNavigation.navigate("tabroutes");
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Nao foi possivel atualizar o telefone. Tente novamente mais tarde.";
      toast.show({
        title,
        placement: "top",
        bgColor: "red.500",
      });
    } finally {
      setPhoneUpdateIsLoading(false);
    }
  }

  async function handlePasswordUpdate({ password }: FormDataProps) {
    try {
      setPasswordUpdateIsLoading(true);
      await updateUserPassword(password);
      toast.show({
        render: () => {
          return (
            <Box bg="green.500" p={2} rounded="sm" mb={5}>
              <Text fontFamily="heading" fontSize="sm" color="white">
                Senha atualizada com sucesso!
              </Text>
            </Box>
          );
        },
      });
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Nao foi possivel atualizar a senha. Tente novamente mais tarde.";
      toast.show({
        title,
        placement: "top",
        bgColor: "red.500",
      });
    } finally {
      setPasswordUpdateIsLoading(false);
    }
  }

  async function handleLogout() {
    try {
      setIsLogginOut(true);
      await userLogout();
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Nao foi possivel atualizar a senha. Tente novamente mais tarde.";
      toast.show({
        title,
        placement: "top",
        bgColor: "red.500",
      });
    } finally {
      setIsLogginOut(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      loadUserInfo();
    }, [])
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <VStack flex={1} p={4}>
          <HStack py={6} alignItems="center">
            <BackIconButton onPress={handleGoBack} />
            <Center flex={1}>
              <Text fontFamily="heading" fontSize="xl" color="gray.700">
                Perfil
              </Text>
            </Center>
          </HStack>

          {/* <BannerAd
                        unitId={adUnitIdBanner}
                        size={BannerAdSize.MEDIUM_RECTANGLE}
                        requestOptions={{
                            requestNonPersonalizedAdsOnly: true,
                        }}
                    /> */}

          <Controller
            control={control}
            name="name"
            render={({ field: { value, onChange } }) => (
              <Input
                placeholder="Nome"
                isDisabled
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          <Controller
            control={control}
            name="email"
            render={({ field: { value, onChange } }) => (
              <Input
                placeholder="E-mail"
                isDisabled
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          <Input
            placeholder="Telefone"
            onChangeText={(text) => setUserPhone(text)}
            value={userPhone}
            returnKeyType="send"
            onSubmitEditing={() => handlePhoneUpdate(userPhone)}
            InputRightElement={
              phoneUpdateIsLoading ? (
                <Loading />
              ) : (
                <TouchableOpacity onPress={() => handlePhoneUpdate(userPhone)}>
                  <Icon
                    as={MaterialCommunityIcons}
                    name="refresh"
                    size={5}
                    color="blue.700"
                    mr={4}
                  />
                </TouchableOpacity>
              )
            }
          />

          <Text color="gray.500" fontSize="md" my={2} fontFamily="heading">
            Alterar senha
          </Text>

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange } }) => (
              <Input
                placeholder="Nova senha"
                secureTextEntry
                onChangeText={onChange}
                errorMessage={errors.password?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="confirm_password"
            render={({ field: { onChange } }) => (
              <Input
                placeholder="Confirme a nova senha"
                secureTextEntry
                onChangeText={onChange}
                errorMessage={errors.confirm_password?.message}
              />
            )}
          />

          <Button
            title="Atualizar senha"
            titleColor="white"
            variant="blue"
            my={2}
            onPress={handleSubmit(handlePasswordUpdate)}
            isLoading={passwordUpdateIsLoading}
          />
          <Button
            title="Excluir minha conta"
            titleColor="white"
            variant="gray"
            onPress={() => setAlertIsOpen(true)}
            isLoading={isLoading}
          />
          {
            isLogginOut ? <Loading /> :
            <Center mt={2}>
            <TouchableOpacity onPress={handleLogout}>
              <Text fontSize="sm" fontFamily="body" color="red.500">
                Logout
              </Text>
            </TouchableOpacity>
          </Center>
          }
        </VStack>

        <AlertDialog leastDestructiveRef={cancelRef} isOpen={alerIsOpen}>
          <AlertDialog.Content>
            <AlertDialog.CloseButton onPress={onClose} />
            <AlertDialog.Header fontFamily="heading">
              Apagar Conta
            </AlertDialog.Header>
            <AlertDialog.Body>
              <Text
                fontFamily="body"
                fontSize="sm"
                color="gray.400"
                lineHeight="xs"
              >
                Ao apagar sua conta, todas as suas informações dentro do
                aplicativo serão excluídas permanentemente.
              </Text>
              <Text fontFamily="body" fontSize="sm" color="gray.400" my={2}>
                Deseja prosseguir?
              </Text>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <TouchableOpacity onPress={onClose} ref={cancelRef}>
                <Text color="gray.700">Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleDeleteAccount} ref={cancelRef}>
                <Text color="red.500" ml={4}>
                  Deletar
                </Text>
              </TouchableOpacity>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog>
      </ScrollView>
    </SafeAreaView>
  );
}

/* <TitleIconCard title="Compartilhamento de dados" />
<TitleIconCard title="Política de Privacidade" />
<TitleIconCard title="Termos e condições de uso" />
<TitleIconCard title="Termos de consentimento" />
      <VStack p={4}>
      <Text
        fontFamily="heading"
        fontSize="lg"
        color="gray.700"
        mb={2}
        px={1}
      >
        Configurações
      </Text>
      <VStack mb={2}>
      
        <TitleIconCard
          title="Excluir minha conta"
          variant="red"
          onPress={}
        />
      </VStack>
    </VStack> */
