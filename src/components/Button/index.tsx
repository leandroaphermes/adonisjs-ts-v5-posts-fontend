import React from "react";
import { ThemeType } from "styles/theme";

import * as S from "./style";

export type ButtonProps = {
  children?: React.ReactNode;
  icon?: React.ReactNode;
} & React.HtmlHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, icon, ...restProp }: ButtonProps) {
  return (
    <S.WrapperButton {...restProp}>
      {icon && <S.WrapperIcon onlyIcon={!children}>{icon}</S.WrapperIcon>}
      {children}
    </S.WrapperButton>
  );
}
