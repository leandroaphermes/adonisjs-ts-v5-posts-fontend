import React from "react";
import { BulbFilled, BulbOutlined } from "@ant-design/icons";

import Button from "components/Button";
import InputSearch from "components/InputSearch";
import WrapperCenter from "components/WrapperCenter";

import { useTheme } from "context/ThemeContext";

import * as S from "./styles";

export default function Header() {
  const { themeColor, setThemeColor } = useTheme();

  return (
    <S.Wrapper>
      <WrapperCenter>
        <S.ContainerNav>
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
        </S.ContainerNav>
      </WrapperCenter>
    </S.Wrapper>
  );
}
