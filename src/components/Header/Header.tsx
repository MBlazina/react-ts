import HeaderStyled, { HeaderContent } from "./Header.style";
import { HeaderProps } from "./Header.types";

import { useContext } from 'react';
import { ThemeContext } from "../../context/ThemeContext";

const Header = (props: HeaderProps) => {
  const { text } = props;

  const theme = useContext(ThemeContext);
  return (
    <HeaderStyled >

      <p style={{backgroundColor: theme.primary.main, color: theme.primary.text}}>{text}</p>
      <HeaderStyled main>STYLE</HeaderStyled>
      <HeaderContent>CONTENT</HeaderContent>
    </HeaderStyled>
  );
};

export default Header;
