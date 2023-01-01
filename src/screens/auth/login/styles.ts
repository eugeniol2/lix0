import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0 16px 0 16px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.white};
`;

export const ButtonContainer = styled.View`
  width: 100%;
`;
