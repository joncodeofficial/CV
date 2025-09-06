import React, { createContext, use, useState, ReactNode } from 'react';
import { changeTranslation } from '../utils/changeTranslation';

interface TranslationContextState {
  currentLang: string;
  toggleLanguage: () => void;
  t: (path: string) => string;
}

const TranslationContext = createContext<TranslationContextState | undefined>(undefined);

interface TranslationProviderProps {
  children: ReactNode;
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({ children }) => {
  const [currentLang, setCurrentLang] = useState<string>('en');

  const toggleLanguage = () => {
    setCurrentLang((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  const t = (path: string) => {
    return changeTranslation(path, currentLang);
  };

  const value: TranslationContextState = {
    currentLang,
    toggleLanguage,
    t,
  };

  return <TranslationContext.Provider value={value}>{children}</TranslationContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTranslation = (): TranslationContextState => {
  const context = use(TranslationContext);

  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }

  return context;
};
