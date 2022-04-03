import styled, { css } from "styled-components";

export const Wrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ theme }) => css`
    padding-left: ${theme.spacings.medium};
    padding-right: ${theme.spacings.medium};
    gap: ${theme.grid.gutter};
    background-color: ${theme.colors.containerBg};
    color: ${theme.colors.text};
    box-shadow: ${theme.border.shadow} ${theme.colors.borderColor};
  `}
`;

export const WrapperLogo = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small} ${theme.spacings.medium};
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
