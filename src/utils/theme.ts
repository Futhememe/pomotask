import { extendTheme } from 'native-base';

const config = {
  useSystemColorMode: false,
  initialColorMode: 'light',
}

export const colors = {
  primary: {
    100: '#5F5FFF'
  },
  secondary: {
    50: '#FCFCFC'
  }
}

export const fontConfig = {
  Poppins: {
    100: {
      normal: 'Poppins_400Regular',
      italic: 'Poppins_400Regular_Italic',
    },
    200: {
      normal: 'Poppins_400Regular',
      italic: 'Poppins_400Regular_Italic',
    },
    300: {
      normal: 'Poppins_500Medium',
      italic: 'Poppins_500Medium_Italic',
    },
    400: {
      normal: 'Poppins_500Medium',
      italic: 'Poppins_500Medium_Italic',
    },
    500: {
      normal: 'Poppins_500Medium',
    },
    600: {
      normal: 'Poppins_500Medium',
      italic: 'Poppins_500Medium_Italic',
    },
    // Add more variants
    700: {
      normal: 'Poppins_700Bold',
    },
    800: {
      normal: 'Poppins_700Bold',
      italic: 'Poppins_700Bold_Italic',
    },
    900: {
      normal: 'Poppins_700Bold',
      italic: 'Poppins_700Bold_Italic',
    },
  },
}

const fonts = {
  heading: 'Poppins',
  body: 'Poppins',
  mono: 'Poppins',
}

export default extendTheme({ config, colors, fontConfig, fonts });