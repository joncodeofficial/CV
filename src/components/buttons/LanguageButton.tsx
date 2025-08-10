import { Globe } from "lucide-react";
import { useTranslationStore } from "../../store/translationStore";

export default function LanguageButton() {
  const { currentLang, toggleLanguage } = useTranslationStore();

  return (
    <button
      onClick={toggleLanguage}
      className="min-w-[90px] bg-[#0082E6] brightness-[1.15] hover:brightness-105 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-200 flex items-center gap-2
      "
    >
      <Globe className="w-4 h-4" />
      {currentLang === "es" ? "ENG" : "ESP"}
    </button>
  );
}
