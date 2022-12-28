import 'styled-components';
import theme from './theme'
import { COLORS } from './theme';

declare module 'styled-components' {
    type ThemeType = typeof theme
    export interface DefaultTheme extends ThemeType{}
}