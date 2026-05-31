"use client";

import { ListUl } from "@gravity-ui/icons";
import {AlertDialog, Button} from "@heroui/react";

const RequestAlert =({pet})=> {
    console.log(pet._id);
  return (
    <AlertDialog>
  <Button color="warning" fullWidth>
    <ListUl />
    Requests
  </Button>

  <AlertDialog.Backdrop variant="opaque">
    <AlertDialog.Container>
      <AlertDialog.Dialog className="sm:max-w-[600px] overflow-hidden">

        <AlertDialog.CloseTrigger />

        {/* Header */}
        <AlertDialog.Header className="border-b pb-4">

          <div className="flex items-center gap-4 w-full">

            <div className="flex-1">
              <AlertDialog.Heading className="text-xl font-bold">
                Adoption Request
              </AlertDialog.Heading>

              <p className="text-sm text-default-500">
                {pet?.petName}
              </p>
            </div>

            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-700">
              Pending
            </span>

          </div>

        </AlertDialog.Header>

        {/* Body */}
        <AlertDialog.Body className="space-y-5 py-5">

          {/* Applicant Info */}
          <div className="grid grid-cols-2 gap-4">

            <div className="bg-default-50 rounded-xl p-4">
              <p className="text-xs text-default-500 mb-1">
                Applicant Name
              </p>

              <p className="font-semibold">
                Karim Ullah
              </p>
            </div>

            <div className="bg-default-50 rounded-xl p-4">
              <p className="text-xs text-default-500 mb-1">
                Email Address
              </p>

              <p className="font-semibold">
                karim@gmail.com
              </p>
            </div>

          </div>

          {/* Dates */}
          <div className="grid grid-cols-2 gap-4">

            <div className="bg-default-50 rounded-xl p-4">
              <p className="text-xs text-default-500 mb-1">
                Pickup Date
              </p>

              <p className="font-semibold">
                15 Aug 2025
              </p>
            </div>

            <div className="bg-default-50 rounded-xl p-4">
              <p className="text-xs text-default-500 mb-1">
                Request Date
              </p>

              <p className="font-semibold">
                10 Aug 2025
              </p>
            </div>

          </div>

          {/* Message */}
          <div className="bg-default-50 rounded-xl p-4">

            <p className="text-xs text-default-500 mb-2">
              Applicant Message
            </p>

            <p className="leading-relaxed text-sm">
              I have experience caring for dogs and a safe
              environment at home. I would love to adopt
              Bella and provide a caring family for her.
            </p>

          </div>

        </AlertDialog.Body>

        {/* Footer */}
        <AlertDialog.Footer className="border-t pt-4">

          <Button
            slot="close"
            variant="flat"
          >
            Close
          </Button>

          <Button
            slot="close"
            color="success"
            className="font-semibold"
          >
            Approve Request
          </Button>

          <Button
            slot="close"
            color="danger"
            variant="flat"
          >
            Reject
          </Button>

        </AlertDialog.Footer>

      </AlertDialog.Dialog>
    </AlertDialog.Container>
  </AlertDialog.Backdrop>
</AlertDialog>
  );
}

export default RequestAlert