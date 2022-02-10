import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import theme from '../../utils/theme';
import { StatusBar } from 'expo-status-bar';
import { I18nProvider } from '../../hooks/i18n';
import { AnimatePresence } from 'moti';

type AppContainerProps = {
  children: React.ReactNode
}

export default function AppContainer({ children }: AppContainerProps) {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        <I18nProvider>
          <StatusBar />
          <AnimatePresence>
            {children}
          </AnimatePresence>
        </I18nProvider>
      </NativeBaseProvider>
    </NavigationContainer>
  )
}