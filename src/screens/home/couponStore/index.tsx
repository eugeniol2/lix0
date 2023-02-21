import React from 'react'
import { MainHeader, StoreScrollViewItem } from '../../../components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import { storeCoupons } from '../../../services/mock'

export const CouponStore: React.FC = () => {
  return (
    <>
      <SafeAreaView>
        <MainHeader text="Buscar Missão" />
      </SafeAreaView>
      <ScrollView style={{ padding: 16 }}>
        {storeCoupons.map(storeItem => {
          return (
            <StoreScrollViewItem
              key={storeItem.id}
              isPercentage={storeItem.isPercentage}
              amountLeft={storeItem.amountLeft}
              discount={storeItem.discount}
              price={storeItem.price}
              usedIn={storeItem.usedIn}
            />
          )
        })}
      </ScrollView>
    </>
  )
}
