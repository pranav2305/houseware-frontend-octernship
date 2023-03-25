import { useState, createContext } from "react";

const initialContext: ThemeContextType = {
  theme: "light",
  setTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextType>(initialContext);

export default ({ children }: ContextProviderProps) => {
  const [theme, setTheme] = useState<ThemeType>("light");

  const defaultContext = {
    theme,
    setTheme,
  };
  return (
    <ThemeContext.Provider value={defaultContext}>
      {children}
    </ThemeContext.Provider>
  );
};
