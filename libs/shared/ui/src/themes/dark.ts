import { tokens } from '@shopify/polaris-tokens'
import { baseTheme, Theme } from './base'

export const darkTheme: Theme = {
  ...baseTheme,
  colors: {
    surface: tokens.colors['surface-dark'],
    text: tokens.colors['text-on-dark']
  }
}
