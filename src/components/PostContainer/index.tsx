import CategoriesShow, { CategoriesProp } from "components/CategoriesShow";
import WrapperCenter from "components/WrapperCenter";
import Image from "next/image";
import React from "react";

import * as S from "./styles";

export type PostContainerProps = {
  title: string;
  categories: CategoriesProp;
  description: string;
  content: string;
  publishedAt: string;
  createdBy: string;
};

export default function PostContainer({
  title,
  categories,
  description,
  content,
  createdBy,
  publishedAt,
}: PostContainerProps) {
  const dataInstancia = Date.parse(publishedAt);

  return (
    <S.Wrapper>
      <S.ContainerBanner>
        <Image
          alt="Banner post"
          layout="fill"
          src="https://via.placeholder.com/2000x300/FF0000/FFFFFF?Text=Down.com"
        />
      </S.ContainerBanner>
      <WrapperCenter>
        <S.WrapperHeader>
          <S.Title>{title}</S.Title>
          <CategoriesShow dataSource={categories} />
          <S.Description>{description}</S.Description>
          <S.CreatedBy>
            {createdBy} -{" "}
            <span
              title={new Intl.DateTimeFormat("pt-BR", {
                dateStyle: "long",
                timeStyle: "short",
              }).format(dataInstancia)}
            >
              {new Intl.DateTimeFormat("pt-BR", {
                dateStyle: "medium",
                timeStyle: "short",
              }).format(dataInstancia)}
            </span>
          </S.CreatedBy>
        </S.WrapperHeader>
        <S.Content>{content.trim()}</S.Content>
      </WrapperCenter>
    </S.Wrapper>
  );
}
