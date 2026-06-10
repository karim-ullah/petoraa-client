"use client";

import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

const RequestAlertFooter = ({ pet, token }) => {
  const petId = pet?._id;

  const handleStatus = async (petId, status) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/adoptions/status/${petId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ status }),
    });

    const data = await res.json();
    // console.log(data, "from alert");
    if (data) {
      toast.success("Status changed successfully");
      redirect("/dashboard/my-listing");
    }
  };
  return (
    <AlertDialog.Footer className="border-t pt-4">
      <Button slot="close" variant="flat">
        Close
      </Button>

      <Button
        slot="close"
        color="success"
        className="font-semibold"
        onClick={() => handleStatus(petId, "approved")}
      >
        Approve Request
      </Button>

      <Button
        slot="close"
        color="danger"
        variant="flat"
        onClick={() => handleStatus(petId, "rejected")}
      >
        Reject
      </Button>
    </AlertDialog.Footer>
  );
};

export default RequestAlertFooter;
