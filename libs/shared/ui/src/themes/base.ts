import * as tokens from '@shopify/polaris-tokens'
import { createTheme } from '@shopify/restyle'

const remToNumber = (rem: string, rootEm = 16): number => {
  return parseFloat(rem.replace('rem', '')) * rootEm
}

const objectMap = <Input, Output>(obj: { [s: string]: Input }, fn: (value: Input, key: string, index: number) => Output): { [k: string]: Output } =>
  Object.fromEntries(
    Object.entries(obj).map(
      ([k, v], i) => [k, fn(v, k, i)]
    )
  )

const base = {
  colors: {
    surface: '',
    text: ''
  },
  spacing: objectMap<string, number>(tokens.spacing, (value) => remToNumber(value)),
  breakpoints: {
    phone: 0,
    tablet: 768
  },
  textVariants: {
    defaults: {
      fontSize: remToNumber(tokens.font['font-size-200']),
      color: 'text'
    }
  },
  screenVariants: {
    defaults: {
      flex: 1,
      backgroundColor: 'surface'
    }
  }
}

export const baseTheme = createTheme(base)

export type Theme = typeof baseTheme
