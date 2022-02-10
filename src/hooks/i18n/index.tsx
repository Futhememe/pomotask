import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import i18n from 'i18n-js';
import * as Localization from 'expo-localization';

interface I18nDTO {
  translate: (key: string) => string,
  setLocaleTo: (language: 'en_US' | 'pt_BR') => void,
  localization: any,
}

export const I18nContext = createContext({} as I18nDTO);

interface I18nProviderProps {
    children: ReactNode,
}

export function I18nProvider({ children }: I18nProviderProps) {

    const [defaultLocale, setDefaultLocale] = useState<'en_US' | 'pt_BR'>('pt_BR');
    const [localization, setLocalization] = useState(Localization.locale);

    const translate = (key: string) => i18n.t(key);

    const setLocaleTo = (language: 'en_US' | 'pt_BR') => {
      i18n.locale = language;
      setDefaultLocale(language);
    }
 
    return (
        <I18nContext.Provider 
            value={{
              translate,
              setLocaleTo,
              localization
            }}
        >
            {children}
        </I18nContext.Provider>
    );
}

export function useI18n() {
    const context = useContext(I18nContext)

    return context
}