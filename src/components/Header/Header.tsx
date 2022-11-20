import HeaderStyled, { HeaderContent } from "./Header.style";
import { HeaderProps } from "./Header.types";

const Header = (props: HeaderProps) => {
  const { text } = props;
  return (
    <HeaderStyled >
      <p>{text}</p>
      <HeaderStyled main>STYLE</HeaderStyled>
      <HeaderContent>CONTENT</HeaderContent>
    </HeaderStyled>
  );
};

export default Header;
