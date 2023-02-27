import React, { useState } from 'react'
import { MainHeader } from '../../../components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import { useAtom } from 'jotai/react'
import { storeCoupons } from '../../../services/mock'
import { singleCouponItemAtom } from '../../../atoms/storeItemsAtom'
import { useNavigation } from '@react-navigation/native'
import {
  Container,
  MyCouponsButton,
  MyCouponsButtonText,
  SearchBar
} from './styles'
import { userPointsAmountAtom } from '../../../atoms/userPoints'
import { StoreScrollViewItem } from './myCoupons/storeScrollViewItem'

export const CouponStore: React.FC = () => {
  const navigation = useNavigation()
  const [searchTerm, setSearchTerm] = useState('')
  const [, setSingleCouponItemAtom] = useAtom(singleCouponItemAtom)
  const [userPointAmount] = useAtom(userPointsAmountAtom)

  const handleSearch = (searchString: string) => {
    setSearchTerm(searchString)
  }

  return (
    <>
      <SafeAreaView>
        <MainHeader
          text="Cupons"
          hasUserPoints
          pointsAmount={userPointAmount}
        />
        <Container>
          <SearchBar
            editable
            maxLength={40}
            onChangeText={text => {
              handleSearch(text)
            }}
            value={searchTerm}
          />
          <MyCouponsButton
            onPress={() => {
              navigation.navigate('MyCoupons')
            }}
          >
            <MyCouponsButtonText>Meus cupons</MyCouponsButtonText>
          </MyCouponsButton>
        </Container>
      </SafeAreaView>
      <ScrollView style={{ padding: 16 }}>
        {storeCoupons
          .filter(
            storeItem =>
              storeItem.amountLeft > 0 &&
              storeItem.companies.some(p =>
                p.startsWith(searchTerm.toLocaleLowerCase())
              )
          )
          .map(storeItem => {
            return (
              <StoreScrollViewItem
                key={storeItem.id}
                isPercentage={storeItem.isPercentage}
                amountLeft={storeItem.amountLeft}
                discount={storeItem.discount}
                price={storeItem.price}
                usedIn={storeItem.availableAt}
                onPress={() => {
                  setSingleCouponItemAtom(storeItem)
                  navigation.navigate('CouponDetails')
                }}
              />
            )
          })}
      </ScrollView>
    </>
  )
}
