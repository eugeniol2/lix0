import { atom } from 'jotai'
import { storeCouponsProps } from '../services/mock'

const addMission = (
  coupons: storeCouponsProps[],
  coupon: storeCouponsProps
): storeCouponsProps[] => [...coupons, coupon]

const removeMission = (
  coupons: storeCouponsProps[],
  couponID: number
): storeCouponsProps[] => coupons.filter(coupon => coupon.id !== couponID)

const myCouponsAtom = atom<storeCouponsProps[]>([])
const newCouponAtom = atom<storeCouponsProps>({} as storeCouponsProps)
const singleCouponAtom = atom<storeCouponsProps>({} as storeCouponsProps)
const addNewCouponAtom = atom(
  () => '',
  (get, set, mission: storeCouponsProps) => {
    set(myCouponsAtom, addMission(get(myCouponsAtom), mission))
    set(newCouponAtom, {} as storeCouponsProps)
  }
)
const removeMissionAtom = atom(
  () => '',
  (get, set, id: number) => {
    set(myCouponsAtom, removeMission(get(myCouponsAtom), id))
  }
)

export {
  newCouponAtom,
  myCouponsAtom,
  addNewCouponAtom,
  removeMissionAtom,
  singleCouponAtom
}
