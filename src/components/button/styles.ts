import styled from "styled-components/native";

export const TouchableOpacityButton = styled.TouchableOpacity`
  height: 40px;
  width: 100%;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TouchableOpacityButtonTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.intermedium};
  font-size: ${({ theme }) => theme.SIZES.font_14px};
  color: ${({ theme }) => theme.COLORS.white}; ;
`;
