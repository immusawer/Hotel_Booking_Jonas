import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    color: var(--color-grey-600);
    font-size: 1.5rem;
    font-weight: 500;
    padding: 1.4rem 2rem;
    margin: 0.4rem 0;
    border-radius: 1.2rem;
    transition: all 0.3s ease;
    text-decoration: none;
    position: relative;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.2),
        transparent
      );
      transition: left 0.5s;
    }
  }

  &:hover {
    color: var(--color-brand-700);
    background: linear-gradient(
      135deg,
      var(--color-brand-50),
      var(--color-brand-100)
    );
    transform: translateX(4px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);

    &::before {
      left: 100%;
    }
  }

  &.active:link,
  &.active:visited {
    color: var(--color-brand-700);
    background: linear-gradient(
      135deg,
      var(--color-brand-100),
      var(--color-brand-200)
    );
    font-weight: 600;
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
    border-left: 4px solid var(--color-brand-600);
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-grey-500);
    transition: all 0.3s ease;
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
  }

  &:hover svg {
    color: var(--color-brand-600);
    transform: scale(1.1);
  }

  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
    transform: scale(1.05);
  }

  & span {
    font-weight: inherit;
    letter-spacing: 0.025em;
  }
`;
import React from "react";

const MainNav = () => {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard">
            <HiOutlineHome /> <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/bookings">
            <HiOutlineCalendarDays /> <span>Bookings</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/Cabins">
            <HiOutlineHomeModern /> <span>Cabins</span>
          </StyledNavLink>
        </li>{" "}
        <li>
          <StyledNavLink to="/users">
            <HiOutlineUsers /> <span>Users</span>
          </StyledNavLink>
        </li>{" "}
        <li>
          <StyledNavLink to="/settings">
            <HiOutlineCog6Tooth /> <span>Settings</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
};

export default MainNav;
