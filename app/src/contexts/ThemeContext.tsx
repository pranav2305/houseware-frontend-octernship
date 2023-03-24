import React from "react";
import { ThemeType, Props } from "../ts/types/theme";
import { ThemeContextType } from "../ts/interfaces/theme";

const initialContext: ThemeContextType = {
  theme: "light",
  setTheme: () => {},
};

export const ThemeContext = React.createContext<ThemeContextType>(initialContext);

export default ({ children }: Props) => {
  const [theme, setTheme] = React.useState<ThemeType>("light");

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
