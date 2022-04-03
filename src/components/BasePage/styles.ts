import styled, { css } from "styled-components";

export const Wrapper = styled.div``;

export const WrapperMain = styled.main`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium};
  `}
`;
