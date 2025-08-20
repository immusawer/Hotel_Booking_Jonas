import React from "react";
import styled from "styled-components";
import {
  HiOutlineBell,
  HiOutlineMagnifyingGlass,
  HiOutlineCog6Tooth,
  HiOutlineSun,
  HiOutlineMoon,
} from "react-icons/hi2";
import { useTheme } from "../contexts/ThemeContext";

const StyledHeader = styled.header`
  background: linear-gradient(
    135deg,
    var(--color-grey-0),
    var(--color-grey-25)
  );
  color: var(--color-grey-700);
  padding: 1.6rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-200);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 8rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  backdrop-filter: blur(8px);
  position: relative;
  z-index: 10;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      var(--color-brand-500),
      transparent
    );
    opacity: 0.6;
  }

  @media (max-width: 768px) {
    padding: 1.2rem 2.4rem;
    height: 7rem;
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const HeaderTitle = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  background: linear-gradient(
    135deg,
    var(--color-brand-600),
    var(--color-brand-700)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
  letter-spacing: -0.02em;
  text-shadow: 0 2px 4px rgba(59, 130, 246, 0.1);

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 1rem 1.6rem 1rem 4.4rem;
  border: 2px solid var(--color-grey-200);
  border-radius: 2.4rem;
  background: linear-gradient(
    135deg,
    var(--color-grey-0),
    var(--color-grey-50)
  );
  font-size: 1.4rem;
  width: 32rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(8px);

  &:focus {
    outline: none;
    border-color: var(--color-brand-500);
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1),
      0 4px 12px rgba(59, 130, 246, 0.15);
    background: var(--color-grey-0);
    transform: translateY(-1px);
  }

  &::placeholder {
    color: var(--color-grey-400);
    font-weight: 400;
  }

  @media (max-width: 768px) {
    width: 20rem;
    padding: 0.8rem 1.2rem 0.8rem 3.6rem;
  }
`;

const SearchIcon = styled(HiOutlineMagnifyingGlass)`
  position: absolute;
  left: 1.2rem;
  width: 2rem;
  height: 2rem;
  color: var(--color-grey-400);
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1.2rem;
  }
`;

const IconButton = styled.button`
  background: linear-gradient(
    135deg,
    var(--color-grey-0),
    var(--color-grey-50)
  );
  border: 2px solid var(--color-grey-200);
  padding: 1rem;
  border-radius: 1.2rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  backdrop-filter: blur(8px);

  &:hover {
    background: linear-gradient(
      135deg,
      var(--color-brand-50),
      var(--color-brand-100)
    );
    border-color: var(--color-brand-300);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-grey-600);
    transition: color 0.3s ease;
  }

  &:hover svg {
    color: var(--color-brand-600);
  }
`;

const NotificationBadge = styled.span`
  position: absolute;
  top: 0.4rem;
  right: 0.4rem;
  background-color: var(--color-red-700);
  color: white;
  border-radius: 50%;
  width: 1.8rem;
  height: 1.8rem;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 0.8rem 1.6rem;
  border-radius: 2rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: var(--color-grey-100);
  }
`;

const UserAvatar = styled.div`
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    var(--color-brand-500),
    var(--color-brand-700)
  );
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 1.4rem;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const UserName = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--color-grey-700);
`;

const UserRole = styled.span`
  font-size: 1.2rem;
  color: var(--color-grey-500);
`;

const ThemeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.4rem;
  height: 4.4rem;
  border-radius: 1.2rem;
  border: 2px solid var(--color-grey-300);
  background: linear-gradient(
    135deg,
    var(--color-grey-0),
    var(--color-grey-50)
  );
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);

  &:hover {
    background: linear-gradient(
      135deg,
      var(--color-brand-50),
      var(--color-brand-100)
    );
    border-color: var(--color-brand-300);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
  }

  svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-grey-600);
    transition: all 0.3s ease;
  }

  &:hover svg {
    color: var(--color-brand-600);
    transform: scale(1.1);
  }
`;

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <StyledHeader>
      <HeaderLeft>
        <HeaderTitle>Hotel Booking</HeaderTitle>
        <SearchContainer>
          <SearchIcon />
          <SearchInput placeholder="Search bookings, guests, cabins..." />
        </SearchContainer>
      </HeaderLeft>

      <HeaderRight>
        <ThemeButton
          onClick={toggleTheme}
          aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
          title={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
        >
          {isDarkMode ? <HiOutlineMoon /> : <HiOutlineSun />}
        </ThemeButton>

        <IconButton>
          <HiOutlineCog6Tooth />
        </IconButton>

        <IconButton>
          <HiOutlineBell />
          <NotificationBadge>3</NotificationBadge>
        </IconButton>

        <UserProfile>
          <UserAvatar>JD</UserAvatar>
          <UserInfo>
            <UserName>John Doe</UserName>
            <UserRole>Manager</UserRole>
          </UserInfo>
        </UserProfile>
      </HeaderRight>
    </StyledHeader>
  );
};

export default Header;
