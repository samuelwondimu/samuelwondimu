import { createContext, FC, useContext, useMemo, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const DynamicTheme = createContext({
  toggleColorMode: () => {},
});

export const ThemeContext: FC = ({ children }) => {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
        typography: {
          fontFamily: "'Courier New', monospace",
        },
      }),
    [mode]
  );

  return (
    <DynamicTheme.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </DynamicTheme.Provider>
  );
};

export const useChangeTheme = () => {
  return useContext(DynamicTheme);
};
