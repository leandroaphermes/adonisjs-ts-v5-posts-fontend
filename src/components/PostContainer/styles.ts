import styled, { css } from "styled-components";

export const Wrapper = styled.article``;

export const ContainerBanner = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
`;

export const WrapperHeader = styled.header`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    margin-bottom: ${theme.spacings.small};
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
  `}
`;

export const Description = styled.h4`
  ${({ theme }) => css`
    font-weight: ${theme.font.normal};
  `}
`;

export const CreatedBy = styled.small`
  ${({ theme }) => css`
    color: ${theme.colors.textSecunday};
  `}
`;

export const Content = styled.p`
  white-space: pre-line;
`;
