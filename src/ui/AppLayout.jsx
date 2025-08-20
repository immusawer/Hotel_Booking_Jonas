import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 24rem 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  background-color: var(--color-grey-25);
  position: relative;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr auto;
  }
`;

const Main = styled.main`
  background: linear-gradient(
    135deg,
    var(--color-grey-50) 0%,
    var(--color-grey-100) 100%
  );
  padding: 3.2rem 4.8rem 3.2rem;
  overflow-y: auto;
  position: relative;
  display: flex;
  flex-direction: column;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: radial-gradient(
        circle at 20% 50%,
        rgba(59, 130, 246, 0.03) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 80% 20%,
        rgba(16, 185, 129, 0.03) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 40% 80%,
        rgba(245, 101, 101, 0.03) 0%,
        transparent 50%
      );
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 2.4rem 1.6rem 2.4rem;
  }
`;

const Container = styled.div`
  max-width: 140rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  position: relative;
  z-index: 1;
  flex: 1;
`;

const ContentWrapper = styled.div`
  background-color: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 3.2rem;
  border: 1px solid var(--color-grey-200);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  @media (max-width: 768px) {
    padding: 2.4rem 1.6rem;
    border-radius: 0.8rem;
  }
`;

const PageTransition = styled.div`
  animation: fadeInUp 0.5s ease-out;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Sidebar />
      <Header />
      <Main>
        <Container>
          <ContentWrapper>
            <PageTransition>
              <Outlet />
            </PageTransition>
          </ContentWrapper>
        </Container>
      </Main>
      <Footer />
    </StyledAppLayout>
  );
}

export default AppLayout;
