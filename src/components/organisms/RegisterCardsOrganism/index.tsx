import React, {useEffect, useState} from 'react';
import BackgroundScreen from '~/components/atoms/backgroundScreen';
import {StyleSheet, Text, View} from 'react-native';
import CenterContainer from '~/components/atoms/centerContainer';
import ButtonWallet from '@atoms/buttonWallet';
import InputText from '~/components/atoms/inputText';
import Header from '@atoms/header';
import {TypeInput, TypeMask, TypeIcon} from '@enums/index';
import zod from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {Controller, useForm} from 'react-hook-form';
import {useAuth} from '@contexts/index';
import Card from '~/components/atoms/card';

export default function RegisterCardsOrganism() {
  const [enabled, setEnabled] = useState(false);
  const [isCardRegistered, setIsCardRegistered] = useState(false);
  const {setData, data} = useAuth();

  const schema = zod.object({
    cardNumber: zod.string().min(19, 'Numero do cartão deve ter 19 digitos'),
    cardHolderName: zod
      .string()
      .min(3, 'Nome do titular deve ter no minimo 3 caracteres')
      .max(20, 'Nome do titular deve ter no maximo 20 caracteres'),
    validade: zod.string().min(5, 'Validade deve ter no minimo 5 caracteres'),
    codigoSeguranca: zod
      .string()
      .min(3, 'Codigo de segurança deve ter no minimo 3 caracteres'),
  });

  const {
    handleSubmit,
    control,
    formState: {errors, isValid},
    getValues,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      cardNumber: '',
      validade: '',
      codigoSeguranca: '',
      cardHolderName: '',
    },
    resolver: zodResolver(schema),
  });

  function onSubmit() {
    setData(getValues());
    setIsCardRegistered(true);
  }

  useEffect(() => {
    if (
      !isValid &&
      (errors?.cardNumber ||
        errors?.cardHolderName ||
        errors?.validade ||
        errors?.codigoSeguranca)
    ) {
      setEnabled(false);
    } else {
      setEnabled(true);
    }
  }, [
    isValid,
    errors?.cardNumber,
    errors?.cardHolderName,
    errors?.validade,
    errors?.codigoSeguranca,
  ]);

  return (
    <BackgroundScreen>
      <Header title="cadastro" style={styles.header} />
      <CenterContainer>
        <Text style={styles.title}>Wallet Test</Text>
        {isCardRegistered && (
          <Text style={styles.cardTitle}>cartão cadastrado com sucesso!</Text>
        )}
        {!isCardRegistered && (
          <>
            <Controller
              name="cardNumber"
              control={control}
              render={({field: {onChange, value, onBlur}}) => (
                <>
                  <InputText
                    isMasked
                    input={TypeInput.cardNumber}
                    onChangeText={onChange}
                    value={value}
                    icon
                    iconName={TypeIcon.camera}
                    iconPosition={'iconRight' as TypeIcon.IconPositionRight}
                    clickableIcon={() => {}}
                    style={styles.input}
                    mask={TypeMask.cardNumber}
                    onBlur={onBlur}
                  />
                  {errors?.cardNumber && (
                    <Text style={styles.error}>
                      {errors.cardNumber.message}
                    </Text>
                  )}
                </>
              )}
            />
            <Controller
              name="cardHolderName"
              control={control}
              render={({field: {onChange, value, onBlur}}) => (
                <>
                  <InputText
                    input={TypeInput.cardHolderName}
                    onChangeText={onChange}
                    value={value}
                    style={styles.input}
                    onBlur={onBlur}
                  />
                  {errors?.cardHolderName && (
                    <Text style={styles.error}>
                      {errors.cardHolderName.message}
                    </Text>
                  )}
                </>
              )}
            />
            <View style={styles.row}>
              <Controller
                name="validade"
                control={control}
                render={({field: {onChange, value, onBlur}}) => (
                  <>
                    <InputText
                      isMasked
                      input={TypeInput.validade}
                      onChangeText={onChange}
                      value={value}
                      style={styles.column}
                      mask={TypeMask.validade}
                      placeholder="MM/AA"
                      onBlur={onBlur}
                    />
                  </>
                )}
              />

              <Controller
                name="codigoSeguranca"
                control={control}
                render={({field: {onChange, value, onBlur}}) => (
                  <InputText
                    isMasked
                    input={TypeInput.codigoSeguranca}
                    onChangeText={onChange}
                    value={value}
                    style={styles.column}
                    mask={TypeMask.codigoSeguranca}
                    placeholder="***"
                    secureTextEntry
                    onBlur={onBlur}
                  />
                )}
              />
            </View>
            <>
              <ButtonWallet
                onPress={handleSubmit(onSubmit)}
                title="avancar"
                typeButton="card"
                disabled={!enabled}
              />
              <View style={styles.errorContainer}>
                {errors?.codigoSeguranca && (
                  <Text style={styles.error}>
                    {errors?.codigoSeguranca?.message}
                  </Text>
                )}
                {errors?.validade && (
                  <Text style={styles.error}>{errors?.validade?.message}</Text>
                )}
              </View>
            </>
          </>
        )}
        {isCardRegistered && (
          <>
            <Card
              numberCard={data?.cardNumber || '0000000000000000'}
              name={data?.cardHolderName || 'Nome do titular'}
              validade={data?.validade || '00/00'}
              isBlack
            />
            <ButtonWallet
              onPress={handleSubmit(onSubmit)}
              title="avancar"
              typeButton="card"
              disabled={!enabled}
            />
          </>
        )}
      </CenterContainer>
    </BackgroundScreen>
  );
}
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    width: '80%',
    paddingHorizontal: '16.5%',
    gap: 20,
    marginTop: 20,
  },
  column: {
    flexDirection: 'column',
    flexWrap: 'nowrap',
  },
  title: {
    color: 'white',
    fontSize: 30,
    marginBottom: 20,
    letterSpacing: 1,
  },
  input: {
    marginTop: 12,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
  errorContainer: {
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
  },
  header: {
    marginTop: 30,
  },
  cardTitle: {
    color: 'white',
    fontSize: 16,
    marginVertical: 10,

    letterSpacing: 1,
  },
});
