import styled from 'styled-components/native';
import { View } from 'react-native';

export const Container = styled.View`
    width: 250px;
    height: 200px;
    background-color: ${({theme})=> theme.COLORS.auxiliary_yellow};
    
`;

