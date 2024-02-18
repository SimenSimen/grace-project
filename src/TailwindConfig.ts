import resolveConfig from 'tailwindcss/resolveConfig'
// @ts-ignore
import config from '../tailwind.config.js'

export const fullConfig = resolveConfig(config)

export const SCREENS = {
  ...fullConfig.theme.screens
}
