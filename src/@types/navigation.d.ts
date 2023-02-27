import type { ParamListBase } from '@react-navigation/core'

export declare global {
  namespace ReactNavigation {
    interface RootParamList extends ParamListBase {
      ForgotPassword: undefined
      Register: undefined
      Login: undefined
      Home: undefined
      Ranking: undefined
      Cupons: undefined
      BuscarMissões: undefined
      MyMissions: undefined
      MissionDetails: undefined
      ProvePhotoOrVideo: undefined
      ProveCameraScreen: undefined
      CouponStore: undefined
      CouponDetails: undefined
      CouponVizualization: undefined
      MyCoupons: undefined
      Coleta: undefined
      Quiz: undefined
    }
  }
}

// export interface RootParamList extends ParamListBase {
//   ForgotPassword: undefined
//   Register: undefined
//   Login: undefined
//   Home: undefined
//   Ranking: undefined
//   Cupons: undefined
//   BuscarMissões: undefined
//   MissionDetails: {
//     mission: String
//   }
//   Coleta: undefined
//   Quiz: undefined
// }
