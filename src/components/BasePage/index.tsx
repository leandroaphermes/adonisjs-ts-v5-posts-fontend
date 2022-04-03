import Header from "components/Header";
import React from "react";

import * as S from "./styles";

export type BasePageProps = {
  children: React.ReactNode;
};

export default function BasePage({ children }: BasePageProps) {
  return (
    <>
      <Header />
      <S.WrapperMain>{children}</S.WrapperMain>
    </>
  );
}
