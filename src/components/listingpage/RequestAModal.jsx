import { AlertDialog } from "@heroui/react";
import React from "react";
import RequestAlertFooter from "./RequestAlertFooter";

const RequestAModal = ({ adoptedPet, pet, token }) => {
   

  return (
    <AlertDialog.Backdrop variant="opaque">
      <AlertDialog.Container>
        <AlertDialog.Dialog className="sm:max-w-[600px] overflow-hidden">
          <AlertDialog.CloseTrigger />

          {/* Header */}

          {adoptedPet ? (
            <div className="h-full">
              <AlertDialog.Header className="border-b pb-4">
                <div className="flex items-center gap-4 w-full">
                  <div className="flex-1">
                    <AlertDialog.Heading className="text-xl font-bold">
                      Adoption Request
                    </AlertDialog.Heading>

                    <p className="text-sm text-default-500">
                      {adoptedPet?.petName}
                    </p>
                  </div>

                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-700">
                    {adoptedPet.status}
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

                    <p className="font-semibold">{adoptedPet.userName}</p>
                  </div>

                  <div className="bg-default-50 rounded-xl p-4">
                    <p className="text-xs text-default-500 mb-1">
                      Email Address
                    </p>

                    <p className="font-semibold">{adoptedPet.userEmail}</p>
                  </div>
                </div>

                {/* Dates */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-default-50 rounded-xl p-4">
                    <p className="text-xs text-default-500 mb-1">Pickup Date</p>

                    <p className="font-semibold">{adoptedPet.pickupDate}</p>
                  </div>

                  <div className="bg-default-50 rounded-xl p-4">
                    <p className="text-xs text-default-500 mb-1">
                      Request Date
                    </p>

                    <p className="font-semibold">{adoptedPet.requestDate}</p>
                  </div>
                </div>

                {/* Message */}
                <div className="bg-default-50 rounded-xl p-4">
                  <p className="text-xs text-default-500 mb-2">
                    Applicant Message
                  </p>

                  <p className="leading-relaxed text-sm">
                    {adoptedPet.message}
                  </p>
                </div>
              </AlertDialog.Body>

              {/* Footer */}
              <RequestAlertFooter pet={pet} token={token}></RequestAlertFooter>
            </div>
          ) : (
            <div>not requested yet</div>
          )}
        </AlertDialog.Dialog>
      </AlertDialog.Container>
    </AlertDialog.Backdrop>
  );
};

export default RequestAModal;
