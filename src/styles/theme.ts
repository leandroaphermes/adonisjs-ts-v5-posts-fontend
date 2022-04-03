const base = {
  grid: {
    container: "30rem",
    gutter: "1rem",
  },
  border: {
    radius: "0.4rem",
    shadow: "0px 4px 5px 0px",
  },
  font: {
    family: "'Oxygen', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xxsmall: "0.8rem",
      xsmall: "1.2rem",
      small: "1.4rem",
      medium: "1.6rem",
      large: "1.8rem",
      xlarge: "2.0rem",
      xxlarge: "2.8rem",
      huge: "5.2rem",
    },
  },
  spacings: {
    xxsmall: "0.8rem",
    xsmall: "1.6rem",
    small: "2.4rem",
    medium: "3.2rem",
    large: "4.0rem",
    xlarge: "4.8rem",
    xxlarge: "5.6rem",
    huge: "6.4rem",
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
  transition: {
    slow: "0.5s ease",
    default: "0.3s ease-in-out",
    fast: "0.1s ease-in-out",
  },
};

export type ThemeTypeColor = typeof ligth; // This is the type definition for my theme object.

export const ligth = {
  colors: {
    primary: "#15F",
    secondary: "#6389F7",
    text: "#222",
    textSecunday: "#888",
    textContraste: "#FFF",
    borderColor: "rgba(0,0,0,0.30)",
    bodyBg: "#EEE",
    containerBg: "#3422fa",
  },
};
export const dark: ThemeTypeColor = {
  colors: {
    primary: "#341241",
    secondary: "#6389F7",
    text: "#CCC",
    textSecunday: "#666",
    textContraste: "#FEFEFE",
    borderColor: "rgba(75,75,220,0.30)",
    bodyBg: "#191010",
    containerBg: "#34228a",
  },
};

export type ThemeType = typeof base & ThemeTypeColor; // This is the type definition for my theme object.

const theme = base; // set the light theme as the default.
export default theme;
