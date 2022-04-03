import React from "react";

import Button from "components/Button";
import InputSearch from "components/InputSearch";

import { useTheme } from "context/ThemeContext";

import * as S from "./styles";
import { BulbFilled, BulbOutlined } from "@ant-design/icons";

export default function Header() {
  const { themeColor, setThemeColor } = useTheme();

  return (
    <S.Wrapper>
      <S.WrapperLogo>Logo Header</S.WrapperLogo>
      <S.WrapperExtras>
        <Button
          icon={themeColor === "dark" ? <BulbFilled /> : <BulbOutlined />}
          onClick={() =>
            setThemeColor(themeColor === "dark" ? "ligth" : "dark")
          }
        />
        <InputSearch />
      </S.WrapperExtras>
    </S.Wrapper>
  );
}
