import { useTheme } from "context/ThemeContext";
import React from "react";

import * as S from "./styles";

export type CategorieProp = string;
export type CategoriesProp = CategorieProp[];

export type CategoriesShowProps = {
  dataSource: CategoriesProp;
};

export default function CategoriesShow({ dataSource }: CategoriesShowProps) {
  const { themeColor } = useTheme();

  return (
    <span>
      {dataSource.map((categorie, index: number) => (
        <S.Container key={index} themeActive={themeColor}>
          {categorie}
        </S.Container>
      ))}
    </span>
  );
}
