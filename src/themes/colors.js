import { store } from "../app/store";

export const lightTheme = {
  text: "#050316",
  background: "#fbfbfe",
  primary: "#2f27ce",
  secondary: "#dddbff",
  accent: "#443dff",
};

export const darkTheme = {
  text: "#ebe9fc",
  background: "#010104",
  primary: "#3a31d8",
  secondary: "#020024",
  accent: "#0600c2",
};

export const applyTheme = () => {
  const { theme } = store.getState();
  return theme === "light" ? darkTheme : lightTheme;
};
