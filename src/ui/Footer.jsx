import React from "react";
import styled from "styled-components";
import { HiOutlineHeart } from "react-icons/hi2";

const StyledFooter = styled.footer`
  background: linear-gradient(
    135deg,
    var(--color-grey-800),
    var(--color-grey-700)
  );
  color: var(--color-grey-200);
  padding: 2.4rem 0 1.6rem;
  margin-top: auto;
  border-top: 1px solid var(--color-grey-200);
`;

const FooterContainer = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 2.4rem;
  text-align: center;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
`;

const BrandName = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--color-grey-100);
  margin: 0;
  background: linear-gradient(
    135deg,
    var(--color-brand-500),
    var(--color-brand-600)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Copyright = styled.p`
  font-size: 1.3rem;
  color: var(--color-grey-400);
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-red-500);
    animation: heartbeat 2s infinite;
  }

  @keyframes heartbeat {
    0%,
    50%,
    100% {
      transform: scale(1);
    }
    25%,
    75% {
      transform: scale(1.1);
    }
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <FooterContainer>
        <FooterContent>
          <BrandName>HotelHub Management</BrandName>
          <Copyright>
            © 2024 HotelHub Management. Made with <HiOutlineHeart /> for
            hoteliers.
          </Copyright>
        </FooterContent>
      </FooterContainer>
    </StyledFooter>
  );
}

export default Footer;
