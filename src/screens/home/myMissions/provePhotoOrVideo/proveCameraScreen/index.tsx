import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useEffect, useRef, useState } from 'react'
import { Camera } from 'expo-camera'
import { Image, Text } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { ButtonAreaContainer, TakePictureButton } from './styles'
import { MainButton } from '../../../../../components'
import { theme } from '../../../../../constants'
import { useNavigation } from '@react-navigation/native'

export const ProveCameraScreen: React.FC = () => {
  const navigation = useNavigation()
  const cameraRef = useRef<Camera>(null)
  const [hasCameraPermission, setHasCameraPermission] = useState(false)
  const [photo, setPhoto] = useState<string | undefined>()
  const asycnmanageCameraInfo = async () => {
    const cameraPermission = await Camera.requestCameraPermissionsAsync()
    setHasCameraPermission(cameraPermission.status === 'granted')
  }

  const handleTakePhoto = async () => {
    if (cameraRef) {
      try {
        const newPhoto = await cameraRef.current?.takePictureAsync({
          quality: 1,
          base64: true,
          exif: false
        })
        setPhoto(newPhoto?.uri)
      } catch (error) {}
    }
  }

  const handleCancelPhoto = () => {
    setPhoto(undefined)
  }

  useEffect(() => {
    asycnmanageCameraInfo().catch(() => {})
  }, [])

  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>
  } else if (!hasCameraPermission) {
    return (
      <Text>
        Permission for camera not granted. Please change this in settings.
      </Text>
    )
  }

  return (
    <>
      {photo ? (
        <SafeAreaView style={{ flex: 1, padding: 16 }}>
          <Image
            source={{ uri: photo }}
            style={{ flex: 1, marginBottom: 16 }}
          />
          <MainButton
            style={{ marginBottom: 12 }}
            type="contained"
            title="CONFIRMAR FOTO"
            color={theme.COLORS.secondary_500}
            onPress={() => {}}
          />
          <MainButton
            style={{ marginBottom: 12 }}
            type="outlined"
            title="TENTAR NOVAMENTE"
            color={theme.COLORS.auxiliary_red}
            onPress={() => {
              handleCancelPhoto()
            }}
          />
        </SafeAreaView>
      ) : (
        <SafeAreaView style={{ flex: 1, padding: 16 }}>
          <Camera
            ref={cameraRef}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          />
          <ButtonAreaContainer>
            <TakePictureButton
              onPress={() => {
                void (async () => {
                  handleTakePhoto().catch(() => {})
                })()
              }}
            >
              <FontAwesome name="camera" size={23} color="#fff" />
            </TakePictureButton>
            <MainButton
              style={{ marginBottom: 12, marginTop: 8 }}
              type="outlined"
              title="TENTAR NOVAMENTE"
              color={theme.COLORS.auxiliary_red}
              onPress={() => {
                navigation.goBack()
              }}
            />
          </ButtonAreaContainer>
        </SafeAreaView>
      )}
    </>
  )
}
