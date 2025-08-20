import React from "react";
import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  padding: 2.4rem 3.2rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  max-width: 90vw;
  max-height: 90vh;
  overflow-y: auto;
  border: 1px solid var(--color-grey-200);

  /* Better scrollbar styling */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: var(--color-grey-100);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-grey-300);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--color-grey-400);
  }

  @media (max-width: 768px) {
    padding: 2rem;
    max-width: 95vw;
    max-height: 95vh;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  z-index: 1000;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  /* Prevent body scroll when modal is open */
  overflow: hidden;
`;

const Button = styled.button`
  background: var(--color-grey-100);
  border: 1px solid var(--color-grey-300);
  padding: 0.8rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: var(--color-red-100);
    border-color: var(--color-red-300);
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }

  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-grey-600);
    transition: color 0.3s ease;
  }

  &:hover svg {
    color: var(--color-red-600);
  }
`;

function Modal({ children, onClose }) {
  // Prevent body scroll when modal is open
  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Close modal on Escape key
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <Overlay onClick={onClose}>
      <StyledModal onClick={(e) => e.stopPropagation()}>
        <Button onClick={onClose} aria-label="Close modal">
          <HiXMark />
        </Button>
        {children}
      </StyledModal>
    </Overlay>
  );
}

export default Modal;
