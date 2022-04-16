import { TypeColor } from "context/ThemeContext";
import styled, { css } from "styled-components";

export type ContainerProps = {
  themeActive: TypeColor;
};

const stylesTheme = {
  ligth: {
    backgroundColorDefault: "rgba(0, 0, 0, 0.08)",
    backgroundColorHover: "rgba(255, 255, 255, 0.08)",
  },
  dark: {
    backgroundColorDefault: "rgba(255, 255, 255, 0.08)",
    backgroundColorHover: "rgba(255, 255, 255, 0.2)",
  },
};

export const Container = styled.a<ContainerProps>`
  cursor: pointer;

  ${({ theme, themeActive }) => css`
    display: inline-block;
    padding: calc(${theme.spacings.xxsmall} / 2) ${theme.spacings.xxsmall};
    background-color: ${stylesTheme[themeActive].backgroundColorDefault};
    border-radius: ${theme.border.radius};
    margin-right: calc(${theme.spacings.xxsmall} / 2);
    font-size: ${theme.font.sizes.xsmall};
    &:hover {
      background-color: ${stylesTheme[themeActive].backgroundColorHover};
    }
  `}
`;
