import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  background: linear-gradient(
    180deg,
    var(--color-grey-0) 0%,
    var(--color-grey-25) 50%,
    var(--color-grey-50) 100%
  );
  padding: 2.4rem 2rem;
  border-right: 2px solid var(--color-grey-200);
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  box-shadow: 4px 0 12px rgba(0, 0, 0, 0.08), 2px 0 6px rgba(0, 0, 0, 0.04);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(8px);
  z-index: 5;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(
      90deg,
      var(--color-brand-500),
      var(--color-brand-600),
      var(--color-brand-700)
    );
    box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
  }

  &::after {
    content: "";
    position: absolute;
    top: 20%;
    right: -10%;
    width: 30%;
    height: 60%;
    background: radial-gradient(
      ellipse,
      rgba(59, 130, 246, 0.05) 0%,
      transparent 70%
    );
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.6rem;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem 1.6rem 2.4rem;
  border-bottom: 2px solid var(--color-grey-200);
  background: linear-gradient(
    135deg,
    var(--color-grey-0),
    var(--color-grey-25)
  );
  border-radius: 1.2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  position: relative;
  z-index: 1;
  margin: -0.8rem -0.4rem 0;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 20%;
    right: 20%;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      var(--color-brand-500),
      transparent
    );
    opacity: 0.6;
  }
`;

const WelcomeText = styled.div`
  text-align: center;
`;

const WelcomeTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  background: linear-gradient(
    135deg,
    var(--color-grey-700),
    var(--color-grey-800)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 0.4rem 0;
  letter-spacing: -0.01em;
`;

const WelcomeSubtitle = styled.p`
  font-size: 1.3rem;
  color: var(--color-grey-500);
  margin: 0;
  font-weight: 500;
  letter-spacing: 0.02em;
`;

const SidebarFooter = styled.div`
  margin-top: auto;
  padding: 2.4rem 1.6rem 1.6rem;
  border-top: 2px solid var(--color-grey-200);
  text-align: center;
  background: linear-gradient(
    135deg,
    var(--color-grey-0),
    var(--color-grey-25)
  );
  border-radius: 1.2rem;
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.05);
  position: relative;
  z-index: 1;
  margin: 0 -0.4rem -0.8rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 20%;
    right: 20%;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      var(--color-brand-500),
      transparent
    );
    opacity: 0.6;
  }
`;

const FooterText = styled.p`
  font-size: 1.1rem;
  color: var(--color-grey-400);
  margin: 0;
`;

const StatusIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 1.2rem;
`;

const StatusDot = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background-color: var(--color-green-500);
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
    }
    70% {
      box-shadow: 0 0 0 10px rgba(34, 197, 94, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
    }
  }
`;

const StatusText = styled.span`
  font-size: 1.1rem;
  color: var(--color-grey-500);
  font-weight: 500;
`;

const Sidebar = () => {
  return (
    <StyledSidebar>
      <SidebarHeader>
        <Logo />
        <WelcomeText>
          <WelcomeTitle>Welcome Back!</WelcomeTitle>
          <WelcomeSubtitle>Manage your hotel</WelcomeSubtitle>
        </WelcomeText>
      </SidebarHeader>

      <MainNav />

      <SidebarFooter>
        <StatusIndicator>
          <StatusDot />
          <StatusText>System Online</StatusText>
        </StatusIndicator>
        <FooterText>© 2024 Hotel Booking</FooterText>
      </SidebarFooter>
    </StyledSidebar>
  );
};

export default Sidebar;
