import { SearchOutlined } from "@ant-design/icons";
import React from "react";

import * as S from "./styles";

export default function InputSearch() {
  return (
    <S.WrapperInput>
      <S.InputText placeholder="Pesquisar" />
      <S.WrapperIcon>
        <SearchOutlined />
      </S.WrapperIcon>
    </S.WrapperInput>
  );
}
