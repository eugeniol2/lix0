import { Dimensions, PermissionsAndroid } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { Platform } from 'expo-modules-core'
import { SafeAreaView } from 'react-native-safe-area-context'
import MapView, { Marker } from 'react-native-maps'
import { SelectList } from 'react-native-dropdown-select-list'
import { Container, MapContainer, SelectContainer } from './styles'
import { MainButton, MainHeader } from '../../../components'
import { theme } from '../../../constants'
import { useNavigation } from '@react-navigation/native'

export const Collect: React.FC = () => {
  const navigation = useNavigation()
  const mapRef = useRef<MapView>(null)
  const { width, height } = Dimensions.get('window')
  const ASPECT_RATIO = width / height
  const LATITUDE_DELTA = 0.02
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO
  const INITIAL_POSITION = {
    latitude: -7.956,
    longitude: -38.2972,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA
  }
  const data = [
    { key: '1', value: 'Vidro' },
    { key: '2', value: 'Plastico' },
    { key: '3', value: 'Alumínio e derivados' }
  ]

  useEffect(() => {}, [])

  return (
    <SafeAreaView>
      <MainHeader text="Ranking" />
      <Container>
        <SelectContainer>
          <SelectList
            setSelected={(value: any) => {}}
            data={data}
            save="value"
            placeholder="Selecione o lixo a ser coletado"
            dropdownStyles={{ backgroundColor: theme.COLORS.gray_100 }}
          />
        </SelectContainer>
        <MapContainer>
          <MapView
            onMapReady={() =>
              Platform.OS === 'android' ??
              PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACESS_FINE_LOCATION
              )
            }
            ref={mapRef}
            initialRegion={INITIAL_POSITION}
            style={{ width: '100%', height: '100%' }}
          >
            <Marker coordinate={INITIAL_POSITION} />
          </MapView>
        </MapContainer>
        <MainButton
          title="ENVIAR COMPROVANTE DE COLETA"
          color={theme.COLORS.secondary_500}
          onPress={() => {
            navigation.navigate('ProveCameraScreen')
          }}
        />
      </Container>
    </SafeAreaView>
  )
}
