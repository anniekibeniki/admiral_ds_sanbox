import theme from 'constants/theme';
type ThemeType = typeof theme;

declare module 'styled-components' {
  export interface Theme extends ThemeType {}
}
