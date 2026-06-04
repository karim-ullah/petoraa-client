"use client";
import { ListUl } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";

import RequestAModal from "./RequestAModal";

const RequestAlert = ({
  pet,
  token,
  isModalOpen,
  setIsModalOpen,
  adoptedPet,
  setAdoptedPet,
}) => {
  const handleModal = async (petId, token, setAdoptedPet, setIsModalOpen) => {
    const res = await fetch(`http://localhost:5000/adoption/pet/${petId}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    const adoptedPet = await res.json();

    setAdoptedPet(adoptedPet);

    setIsModalOpen(true);
  };

  // console.log(adoptedPet, 'from rq alert');

  return (
    <AlertDialog>
      <Button color="warning" fullWidth onClick={() => handleModal(pet?._id, token, setAdoptedPet, setIsModalOpen)}>
        <ListUl />
        Requests
      </Button>

      {isModalOpen && (
        <RequestAModal
          pet={pet}
          token = {token}
          adoptedPet = {adoptedPet}
        ></RequestAModal>
      )}
    </AlertDialog>
  );
};

export default RequestAlert;
