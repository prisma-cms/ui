/**
 * Размеры экранов
 */
const breakpoints = {
  xs: 480,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1920,
}

const color = {
  primary: '#333',
  secondary: '#c02ce6',
  caption: '#929090',
  error: '#e20737',
}

const border = {
  input: {
    default: '2px solid #DFE5EA',
  },
}

const background = {
  disabled: '#f2f2f2',
}

const theme = {
  breakpoints,
  ui: {
    color,
    border,
    background,
  },
}

export type Theme = typeof theme

// props that later will be injected by styled-components
export type ThemeProps = { theme?: Theme }

export default theme
