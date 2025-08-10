import { create } from "zustand";
import { changeTranslation } from "../services/changeTranslation";

interface TranslationStoreState {
  currentLang: string;
  toggleLanguage: () => void;
  t: (path: string) => string;
}

export const useTranslationStore = create<TranslationStoreState>(
  (set, get) => ({
    currentLang: "en",
    toggleLanguage: () =>
      set((state) => ({
        currentLang: state.currentLang === "es" ? "en" : "es",
      })),
    t: (path: string) => changeTranslation(path, get().currentLang),
  })
);
