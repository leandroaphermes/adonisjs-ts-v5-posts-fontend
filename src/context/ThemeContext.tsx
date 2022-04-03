import React, { useContext, useState } from "react";
import { ThemeProvider as ThemeProviderStyled } from "styled-components";
import theme, { dark, ligth } from "styles/theme";

export type TypeColor = "ligth" | "dark";

export interface ThemeContextProps {
  themeColor: TypeColor;
  setThemeColor: (state: React.SetStateAction<TypeColor>) => void;
}

export const ThemeContext = React.createContext({
  themeColor: "ligth",
} as ThemeContextProps);

export const useTheme = () => {
  const context = useContext(ThemeContext);

  return context;
};

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [themeColor, setThemeColor] = useState<TypeColor>("ligth");
  return (
    <ThemeContext.Provider
      value={{
        themeColor,
        setThemeColor,
      }}
    >
      <ThemeProviderStyled
        theme={{ ...theme, ...(themeColor === "ligth" ? ligth : dark) }}
      >
        {children}
      </ThemeProviderStyled>
    </ThemeContext.Provider>
  );
}
