import styled from 'styled-components/native'

interface CircleProps {
  type: 'Descarte' | 'Tratamento' | 'Quiz'
}

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;

  padding: 8px;
  margin-bottom: 16px;
  width: 100%;
  background: ${({ theme }) => theme.COLORS.gray_100};
  border-radius: 8px;
`

export const Circle = styled.View<CircleProps>`
  width: 64px;
  height: 64px;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  margin-right: 8px;
  background-color: ${({ theme, type }) =>
    type === 'Tratamento'
      ? '#35A640'
      : type === 'Quiz'
      ? '#B83FCC'
      : '#5079E1'};
`
export const CircleContainer = styled.View`
  position: relative;
`

export const Content = styled.View`
  flex: 1;
`

export const CustomText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.intermedium};
`
