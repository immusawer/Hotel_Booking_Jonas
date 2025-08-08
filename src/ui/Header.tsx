import React from "react";
import styled from "styled-components";
const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  color: var(--color-grey-700);
  padding: 1rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  text-align: center;
  height: 6.4rem;
`;
const Header = () => {
  return <StyledHeader>Header</StyledHeader>;
};

export default Header;
