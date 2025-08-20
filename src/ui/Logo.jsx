import styled from "styled-components";
import { HiOutlineHomeModern } from "react-icons/hi2";

const StyledLogo = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: 6rem;
  border-radius: 1.6rem;
  background: linear-gradient(
    135deg,
    var(--color-brand-500),
    var(--color-brand-700)
  );
  box-shadow: 0 8px 16px rgba(59, 130, 246, 0.3),
    0 4px 8px rgba(59, 130, 246, 0.2);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transform: rotate(45deg);
    animation: shimmer 3s infinite;
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%) translateY(-100%) rotate(45deg);
    }
    50% {
      transform: translateX(100%) translateY(100%) rotate(45deg);
    }
    100% {
      transform: translateX(-100%) translateY(-100%) rotate(45deg);
    }
  }
`;

const LogoIcon = styled(HiOutlineHomeModern)`
  width: 3.2rem;
  height: 3.2rem;
  color: white;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
  z-index: 1;
  position: relative;
`;

const LogoText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
`;

const BrandName = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--color-brand-700);
  margin: 0;
  letter-spacing: -0.025em;
`;

const BrandTagline = styled.span`
  font-size: 1rem;
  color: var(--color-grey-500);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

function Logo() {
  return (
    <StyledLogo>
      {/* Try to load custom logo first, fallback to icon-based logo */}
      <LogoContainer>
        <LogoIcon />
      </LogoContainer>
      <LogoText>
        <BrandName>HotelHub</BrandName>
        <BrandTagline>Management</BrandTagline>
      </LogoText>
    </StyledLogo>
  );
}

export default Logo;
