import { Card, CardBody, Chip } from "@heroui/react";
import { ShieldCheck } from "@gravity-ui/icons";

export default function OwnerNotice() {
  return (
    <Card className="border border-warning/20 bg-warning-50/50 shadow-sm">
      <div className="p-6">

        <div className="flex items-start gap-4">

          {/* Icon */}
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-warning text-white shrink-0">
            <ShieldCheck width={22} height={22} />
          </div>

          {/* Content */}
          <div className="flex-1">

            <Chip
              color="warning"
              variant="flat"
              size="sm"
              className="mb-3"
            >
              Pet Owner
            </Chip>

            <h3 className="text-xl font-semibold text-foreground">
              This Is Your Pet Listing
            </h3>

            <p className="text-default-500 mt-2 leading-relaxed">
              You are the owner of this pet listing. Adoption requests
              can only be submitted by other users, so the adoption
              form is unavailable for your own pet.
            </p>

          </div>

        </div>

      </div>
    </Card>
  );
}