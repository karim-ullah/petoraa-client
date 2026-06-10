import Link from "next/link";
import { Card, CardBody, Button, Chip } from "@heroui/react";
import { CircleCheckFill } from "@gravity-ui/icons";

export default function AdoptedPetNotice() {
  return (
    <Card className="border border-success/20 bg-success-50/50 shadow-sm">
      <div className="p-6">

        <div className="flex items-start gap-4">

          {/* Icon */}
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-success text-white shrink-0">
            <CircleCheckFill width={22} height={22} />
          </div>

          {/* Content */}
          <div className="flex-1">

            <Chip
              color="success"
              variant="flat"
              size="sm"
              className="mb-3"
            >
              Successfully Adopted
            </Chip>

            <h3 className="text-xl font-semibold text-foreground">
              This Pet Has Already Found a Home
            </h3>

            <p className="text-default-500 mt-2 leading-relaxed">
              Great news! This pet has already been adopted and is no
              longer available for adoption requests. Explore other pets
              that are still looking for a loving family.
            </p>

              <Button
                color="success"
                className="mt-5 bg-accent"
              >
                <Link href={'/all-pets'}>Browse Pets</Link>
              </Button>

          </div>

        </div>

      </div>
    </Card>
  );
}