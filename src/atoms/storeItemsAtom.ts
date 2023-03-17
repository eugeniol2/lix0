import { atom } from 'jotai'
import { storeCouponsProps } from '../services/mock'

const storeCouponItemsAtom = atom<storeCouponsProps[]>([])
const singleCouponItemAtom = atom<storeCouponsProps>({} as storeCouponsProps)

export { storeCouponItemsAtom, singleCouponItemAtom }
