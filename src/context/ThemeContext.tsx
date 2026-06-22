import { createContext,useContext,useEffect,useState,} from "react";

export const themes = {
  cyber: {
    primary: "#22d3ee",
    primaryHover: "#67e8f9",
  },

  matrix: {
    primary: "#2AE500",
    primaryHover: "#6eff50",
  },
};


type ThemeName = keyof typeof themes;

interface ThemeContextType {
  theme: ThemeName;
  setTheme: ( theme: ThemeName ) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export function ThemeProvider({children,}: {children: React.ReactNode;}) 

{
  const [theme, setTheme] =useState<ThemeName>("cyber");

  useEffect(() => {
    document.documentElement.style.setProperty(
        "--gameverse-primary",
        themes[theme].primary
    );

    document.documentElement.style.setProperty(
        "--gameverse-primary-hover",
        themes[theme].primaryHover
    );
    }, [theme]);

   return (
    <ThemeContext.Provider
      value={{theme,setTheme,}}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {throw new Error("useTheme must be used inside ThemeProvider");}
  return context;
};