import styled from "styled-components";

const Input = styled.input`
  border: 2px solid var(--input-border, var(--color-grey-300));
  border-radius: var(--border-radius-sm);
  padding: 1rem 1.4rem;
  box-shadow: var(--shadow-sm);
  background-color: var(--input-bg, var(--color-grey-0));
  color: var(--input-text, var(--color-grey-700));
  font-size: 1.4rem;
  transition: all 0.3s ease;

  &::placeholder {
    color: var(--input-placeholder, var(--color-grey-400));
  }

  &:focus {
    outline: none;
    border-color: var(--color-brand-500);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &:disabled {
    background-color: var(--color-grey-100);
    color: var(--color-grey-400);
    cursor: not-allowed;
  }
`;

export default Input;
