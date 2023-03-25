import { useState, createContext } from "react";
import { Language } from "react-transliterate";

const initialContext: LanguageContextType = {
  lang: "en",
  setLang: () => {},
};

export const LangContext = createContext<LanguageContextType>(initialContext);

export default ({ children }: ContextProviderProps) => {
  const [lang, setLang] = useState<Language>("en" as Language);

  const defaultContext = {
    lang,
    setLang,
  };
  return (
    <LangContext.Provider value={defaultContext}>
      {children}
    </LangContext.Provider>
  );
};
