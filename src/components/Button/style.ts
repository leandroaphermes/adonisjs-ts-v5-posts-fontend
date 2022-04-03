import styled, { css } from "styled-components";
import { ThemeType } from "styles/theme";

export type WrapperButtonSizesProp = keyof ThemeType["font"]["sizes"] &
  keyof ThemeType["spacings"];

export type WrapperButtonProps = {
  size?: WrapperButtonSizesProp;
};

export const WrapperButton = styled.button<WrapperButtonProps>`
  cursor: pointer;

  ${({ theme, size }) => css`
    font-size: ${size ? theme.font.sizes[size] : theme.font.sizes.medium};
    padding: calc(${size ? theme.spacings[size] : theme.spacings.xsmall} / 6)
      calc(${size ? theme.spacings[size] : theme.spacings.xsmall});
    border: ${theme.colors.borderColor};
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.textContraste};
  `}
`;

export type WrapperIconProp = {
  onlyIcon?: boolean;
};

export const WrapperIcon = styled.span<WrapperIconProp>`
  ${({ theme, onlyIcon }) => css`
    ${onlyIcon ? "" : `margin-right: ${theme.spacings.xsmall};`}
  `}
`;
