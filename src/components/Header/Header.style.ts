import styled, { css } from "styled-components";

export const HeaderStyled = styled.header<{ main?: boolean }>`
  min-width: 600px;

  ${(props) =>
    props.main &&
    css`
      background: blue;
      color: white;
    `}
`;

export const HeaderContent = styled.div`
  max-width: 300px;
  background: coral;
  margin: 0 auto;
`;

export default HeaderStyled;
