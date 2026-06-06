"use client";
import { ThemeProvider } from "next-themes";

const NextThemesProvider = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem = {false}>
      {children}
    </ThemeProvider>
  );
};

export default NextThemesProvider;
