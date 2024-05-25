import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { ThemeProvider } from "@emotion/react";
import { Box } from "@mui/system";
import { LightTheme } from "../../themes/Light";
import { DarkTheme } from "../../themes/Dark";

interface IThemeContextData {
  themeName: "light" | "dark";
  toggleTheme: () => void;
}

export const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};

export const AppThemeProvider: React.FC<any> = ({ children }) => {
  const [themeName, setThemeName] = useState<"light" | "dark">("light");

  const toggleTheme = useCallback(() => {
    setThemeName((oldThemeName) =>
      oldThemeName === "light" ? "dark" : "light"
    );
  }, []);

  const theme = useMemo(() => {
    if (themeName === "light") return LightTheme;

    return DarkTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box bgcolor={theme.palette.background.default}>
            {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
