import styled from 'styled-components/native'

export const Container = styled.View`
  margin: 16px;
`
export const SelectContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
`

export const MapContainer = styled.View`
  height: 75%;
  border: 1px solid ${({ theme }) => theme.COLORS.gray_200};
  margin-top: 65px;
  margin-bottom: 21px;
`
