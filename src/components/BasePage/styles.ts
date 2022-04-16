import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const WrapperMain = styled.main`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    margin-bottom: ${theme.spacings.medium};
  `}
`;
