import styled from "styled-components";

const StyledSelect = styled.select`
  font-size: 1.4rem;
  padding: 1rem 1.4rem;
  border: 2px solid
    ${(props) =>
      props.type === "white"
        ? "var(--color-grey-100)"
        : "var(--input-border, var(--color-grey-300))"};
  border-radius: var(--border-radius-sm);
  background-color: var(--input-bg, var(--color-grey-0));
  color: var(--input-text, var(--color-grey-700));
  font-weight: 500;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;

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

  option {
    background-color: var(--input-bg, var(--color-grey-0));
    color: var(--input-text, var(--color-grey-700));
  }
`;
