import React from "react";

import * as S from "./styles";

export type PostContainerProps = {
  title: string;
  description: string;
  content: string;
  publishedAt: string;
  createdBy: string;
};

export default function PostContainer({
  title,
  description,
  content,
  createdBy,
  publishedAt,
}: PostContainerProps) {
  const dataInstancia = Date.parse(publishedAt);

  return (
    <S.Wrapper>
      <S.WrapperHeader>
        <S.Title>{title}</S.Title>
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
    </S.Wrapper>
  );
}
