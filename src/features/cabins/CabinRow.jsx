import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import React from "react";
import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";
import { useDeleteCabin } from "./useDeleteCabin";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import { useCreatecabin } from "./useCreateCabin";
import Modal from "../../ui/Modal";
const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  padding: 0.8rem;
  border-radius: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: var(--color-grey-100);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  svg {
    width: 1.8rem;
    height: 1.8rem;
    transition: all 0.3s ease;
  }
`;

const DuplicateButton = styled(ActionButton)`
  &:hover {
    background-color: var(--color-blue-100);
  }

  svg {
    color: var(--color-brand-600);
  }

  &:hover svg {
    color: var(--color-blue-700);
    transform: scale(1.1);
  }
`;

const EditButton = styled(ActionButton)`
  &:hover {
    background-color: var(--color-green-100);
  }

  svg {
    color: var(--color-green-700);
  }

  &:hover svg {
    color: var(--color-green-700);
    transform: scale(1.1);
    filter: brightness(0.9);
  }
`;

const DeleteButton = styled(ActionButton)`
  &:hover {
    background-color: var(--color-red-100);
  }

  svg {
    color: var(--color-red-700);
  }

  &:hover svg {
    color: var(--color-red-800);
    transform: scale(1.1);
  }
`;

const CabinRow = ({ cabin }) => {
  const [showForm, setShowForm] = useState(false);
  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    description,
  } = cabin;
  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { isCreating, CreateCabin } = useCreatecabin();

  function handleDuplicate() {
    CreateCabin({
      name: `Copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
      description,
    });
  }
  return (
    <>
      <TableRow>
        <Img src={image} alt={name} />
        <Cabin>{name}</Cabin>
        <div>First up to {maxCapacity} geusts</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        {discount ? (
          <Discount>{formatCurrency(discount)}</Discount>
        ) : (
          <span>-</span>
        )}
        <ActionButtons>
          <DuplicateButton
            onClick={handleDuplicate}
            disabled={isCreating}
            title="Duplicate cabin"
          >
            <HiSquare2Stack />
          </DuplicateButton>
          <EditButton
            onClick={() => setShowForm((show) => !show)}
            title="Edit cabin"
          >
            <HiPencil />
          </EditButton>
          <DeleteButton
            onClick={() => deleteCabin(cabinId)}
            disabled={isDeleting}
            title="Delete cabin"
          >
            <HiTrash />
          </DeleteButton>
        </ActionButtons>
      </TableRow>
      {showForm && (
        <Modal onClose={() => setShowForm(false)}>
          <h1
            style={{
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            Edit Cabin
          </h1>
          <CreateCabinForm cabinToEdit={cabin} />
        </Modal>
      )}
    </>
  );
};
export default CabinRow;
