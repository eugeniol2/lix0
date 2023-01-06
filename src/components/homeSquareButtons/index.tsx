import { StyleSheet, Text, TextProps, View, Image } from "react-native";
import React from "react";
import {
  ShowPointsCircle,
  ShowPointsCircleText,
  SquareButtonContent,
  SquareButtonText,
  SquareButtonWrapper,
  SquareText,
} from "./styles";
import { CustomIcon } from "../../screens/home/styles";
import { ICONS } from "../../assets";
import TrophyIcon from "react-native-vector-icons/EvilIcons";
import PaperIcon from "react-native-vector-icons/Ionicons";

export interface HomeSquareButtonsProps {
  userPointsValue: string;
}

export const HomeSquareButtons: React.FC<HomeSquareButtonsProps> = ({
  userPointsValue,
}) => {
  return (
    <>
      <SquareButtonWrapper>
        <SquareButtonText position="left">
          <SquareButtonContent>
            <SquareText>Ranking</SquareText>
            <TrophyIcon name="trophy" size={42} color="white" />
          </SquareButtonContent>
        </SquareButtonText>
        <SquareButtonText position="right">
          <SquareButtonContent>
            <SquareText>Missões</SquareText>
            <PaperIcon name="newspaper-outline" size={30} color="white" />
          </SquareButtonContent>
        </SquareButtonText>
      </SquareButtonWrapper>
      <ShowPointsCircle>
        <ShowPointsCircleText>Pontos</ShowPointsCircleText>
        <ShowPointsCircleText>{userPointsValue}</ShowPointsCircleText>
        <Image source={ICONS.TrashBag} resizeMode="contain" />
      </ShowPointsCircle>
    </>
  );
};
