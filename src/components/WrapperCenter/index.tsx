import React from "react";
import styled, { css } from "styled-components";

export type WrapperCenterProps = {
  children: React.ReactNode;
};

const WrapperCenter = styled.div<WrapperCenterProps>`
  ${({ theme }) => css`
    max-width: ${theme.grid.wrapper};
    margin: 0px auto;
  `}
`;

export default WrapperCenter;
