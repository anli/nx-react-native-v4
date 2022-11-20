import { tokens } from '@shopify/polaris-tokens'
import { baseTheme, Theme } from './base'

export const lightTheme: Theme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    surface: tokens.colors.surface,
    text: tokens.colors.text
  }
}
