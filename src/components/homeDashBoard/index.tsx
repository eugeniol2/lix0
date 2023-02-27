import React from 'react'
import TrophyIcon from 'react-native-vector-icons/EvilIcons'
import PaperIcon from 'react-native-vector-icons/Ionicons'

import { Image } from 'react-native'
import { ICONS } from '../../assets'
import {
  CustomText,
  DashBoardButton,
  DashBoardButtonContent,
  DashBoardContainer,
  ScoreCircle,
  ScoreCircleText
} from './styles'

export interface HomeSquareButtonsProps {
  userPointsValue: number
  rankingButton?: () => void
  missionsButton?: () => void
}

export const HomeDashBoard: React.FC<HomeSquareButtonsProps> = ({
  userPointsValue,
  rankingButton,
  missionsButton
}) => {
  return (
    <>
      <DashBoardContainer>
        <DashBoardButton position="left" onPress={rankingButton}>
          <DashBoardButtonContent>
            <CustomText>Ranking</CustomText>
            <TrophyIcon name="trophy" size={42} color="white" />
          </DashBoardButtonContent>
        </DashBoardButton>
        <DashBoardButton position="right" onPress={missionsButton}>
          <DashBoardButtonContent>
            <CustomText>Missões</CustomText>
            <PaperIcon name="newspaper-outline" size={30} color="white" />
          </DashBoardButtonContent>
        </DashBoardButton>
      </DashBoardContainer>
      <ScoreCircle>
        <ScoreCircleText>Pontos</ScoreCircleText>
        <ScoreCircleText>{userPointsValue}</ScoreCircleText>
        <Image source={ICONS.TrashBag} resizeMode="contain" />
      </ScoreCircle>
    </>
  )
}
