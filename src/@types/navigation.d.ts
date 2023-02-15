import type { ParamListBase } from '@react-navigation/core'
import { missionDataProps } from '../services/mock'

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
      MissionDetails: {
        mission: missionDataProps
      }
      Coleta: undefined
      Quiz: undefined
    }
  }
}

export interface RootParamList extends ParamListBase {
  ForgotPassword: undefined
  Register: undefined
  Login: undefined
  Home: undefined
  Ranking: undefined
  Cupons: undefined
  BuscarMissões: undefined
  MissionDetails: {
    mission: String
  }
  Coleta: undefined
  Quiz: undefined
}
