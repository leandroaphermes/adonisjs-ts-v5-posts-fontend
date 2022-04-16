import styled, { css } from "styled-components";

export const Wrapper = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.containerBg};
    box-shadow: ${theme.border.shadow} ${theme.colors.borderColor};
  `}
`;

export const ContainerNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ theme }) => css`
    padding-left: ${theme.spacings.xsmall};
    padding-right: ${theme.spacings.xsmall};
    gap: ${theme.grid.gutter};
    color: ${theme.colors.text};
  `}
`;

export const WrapperLogo = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small} ${theme.spacings.xsmall};
    color: ${theme.colors.textContraste};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xlarge};
  `}
`;

export const WrapperExtras = styled.div`
  display: flex;
  ${({ theme }) => css`
    gap: ${theme.spacings.xsmall};
  `}
`;
