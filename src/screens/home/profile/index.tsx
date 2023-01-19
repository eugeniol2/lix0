import { Text } from 'react-native'
import 'moment/locale/pt-br'
import React from 'react'
import {
  CustomImageProfile,
  HeaderContainer,
  ProfileFooter,
  ProfileFormContainer,
  SafeAreaViewContainer
} from './styles'
import { theme } from '../../../constants'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { profileSchema } from '../../../validations/profileSchema'
import { ICONS, IMAGES } from '../../../assets'
import { Masks } from 'react-native-mask-input'
import { ControlledInput, MainButton, MainHeader } from '../../../components'
import { SafeAreaView } from 'react-native-safe-area-context'

interface ProfileData {
  name: string
  email: string
  birthDate: Date | undefined
  location: string
}

export const Profile = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<ProfileData>({
    defaultValues: {
      name: '',
      email: '',
      birthDate: undefined,
      location: ''
    },
    resolver: yupResolver(profileSchema)
  })

  function HandleSaveProfileData(data: ProfileData) {
    // console.log(data)
  }

  return (
    <>
      <SafeAreaView>
        <MainHeader text="Perfil" />
      </SafeAreaView>
      <SafeAreaViewContainer>
        <HeaderContainer>
          <CustomImageProfile source={IMAGES.notRealPersonImage} />
          <Text
            style={{ textDecorationLine: 'underline' }}
            onPress={() => {
              // console.log('Trocar foto')
            }}
          >
            Trocar foto
          </Text>
          <MainButton
            style={{ marginTop: 24 }}
            color={theme.COLORS.secondary_500}
            title="DETALHES"
            onPress={() => {
              // console.log('profile Detalhes')
            }}
          />
        </HeaderContainer>

        <ProfileFormContainer>
          <ControlledInput
            control={control}
            error={errors.name}
            name="name"
            iconPath={ICONS.detailsPerson}
            placeholder="nome"
            isProfile
          />
          <ControlledInput
            control={control}
            error={errors.email}
            name="email"
            iconPath={ICONS.email}
            placeholder="email"
            keyboardType="email-address"
            isProfile
          />
          <ControlledInput
            control={control}
            error={errors.birthDate}
            name="birthDate"
            iconPath={ICONS.BirthDay}
            placeholder="Data de nascimento 10/01/1999"
            // keyboardType="numeric"
            autoComplete="birthdate-full"
            isProfile
            mask={Masks.DATE_DDMMYYYY}
          />
          <ControlledInput
            control={control}
            error={errors.location}
            name="location"
            iconPath={ICONS.home}
            placeholder="Endereço"
            isProfile
          />
        </ProfileFormContainer>
        <ProfileFooter>
          <MainButton
            color={theme.COLORS.secondary_500}
            title="SALVAR"
            onPress={() => handleSubmit(HandleSaveProfileData)}
          />
          <MainButton
            color={theme.COLORS.secondary_500}
            type="outlined"
            title="ALTERAR SENHA"
            style={{ marginTop: 12 }}
            onPress={() => {
              // console.log('ALTERAR SENHA')
            }}
          />
          <Text style={{ marginTop: 8 }}>
            Algum problema? Entre em contato conosco lixozerosac@mail.com
          </Text>
          <Text
            style={{
              textDecorationLine: 'underline',
              marginTop: 4,
              color: `${theme.COLORS.primary_500}`
            }}
            onPress={() => {
              // console.log('Política de privacidade')
            }}
          >
            Política de privacidade
          </Text>
        </ProfileFooter>
      </SafeAreaViewContainer>
    </>
  )
}
