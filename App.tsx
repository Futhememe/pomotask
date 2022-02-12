import AppLoading from 'expo-app-loading';
import { 
  useFonts, 
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
} from '@expo-google-fonts/poppins';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

import AppContainer from './src/components/Containers';
import en from './src/hooks/i18n/locales/en-US';
import pt from './src/hooks/i18n/locales/pt-BR';
import { AuthRoutes } from './src/routes/auth.routes';

// Set the key-value pairs for the different languages you want to support.
i18n.translations = {
  en: en,
  pt: pt,
};
// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;
// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true;

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    PomotaskIcon: require('./assets/icons/icomoon.ttf')
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <AppContainer>
      <AuthRoutes />
    </AppContainer>
  );
}