import React from "react";
import Header from "components/Header";

import * as S from "./styles";
import Footer from "components/Footer";

export type BasePageProps = {
  children: React.ReactNode;
};

export default function BasePage({ children }: BasePageProps) {
  return (
    <S.Wrapper>
      <Header />
      <S.WrapperMain>{children}</S.WrapperMain>
      <Footer />
    </S.Wrapper>
  );
}
