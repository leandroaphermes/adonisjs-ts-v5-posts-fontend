import styled, { css } from "styled-components";

export const WrapperInput = styled.div`
  display: flex;
  max-width: 400px;
  width: 100%;

  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.secondary};
  `}
`;

export const InputText = styled.input`
  border: none;
  width: 100%;

  ${({ theme }) => css`
    border-radius: ${theme.border.radius} 0px 0px ${theme.border.radius};
    padding: ${theme.spacings.xsmall};
    color: ${theme.colors.textContraste};
    font-size: ${theme.font.sizes.medium};
    background-color: ${theme.colors.secondary};
  `}
`;

export const WrapperIcon = styled.span`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};
    color: ${theme.colors.text};
    font-size: ${theme.font.sizes.medium};
  `}
`;
