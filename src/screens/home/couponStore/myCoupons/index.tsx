import { SafeAreaView } from 'react-native-safe-area-context'
import { MainHeader } from '../../../../components'
import React from 'react'
import { useAtom } from 'jotai'
import { userPointsAmountAtom } from '../../../../atoms/userPoints'
import { myCouponsAtom } from '../../../../atoms/userCoupons'
import { MyCouponsListItem } from './myCouponsListItem'
import { useNavigation } from '@react-navigation/native'
import { singleCouponItemAtom } from '../../../../atoms/storeItemsAtom'

export const MyCoupons: React.FC = () => {
  const navigation = useNavigation()
  const [userPointAmount] = useAtom(userPointsAmountAtom)
  const [coupons] = useAtom(myCouponsAtom)
  const [, setSingleCouponAtom] = useAtom(singleCouponItemAtom)

  return (
    <>
      <SafeAreaView>
        <>
          <MainHeader
            text="Cupons"
            hasUserPoints
            pointsAmount={userPointAmount}
          />
          {coupons.map(item => (
            <MyCouponsListItem
              key={item.id}
              discount={item.discount}
              isPercentage={item.isPercentage}
              pointsAmount={userPointAmount}
              isUsed={item.isUsed}
              onPress={() => {
                setSingleCouponAtom(item)
                navigation.navigate('CouponVizualization')
              }}
            >
              {item.id}
            </MyCouponsListItem>
          ))}
        </>
      </SafeAreaView>
    </>
  )
}
