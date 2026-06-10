import Link from "next/link";
import { Card, Button } from "@heroui/react";
import { Plus } from "@gravity-ui/icons";

export default function NoListingsFound() {
  return (
    <div className="max-w-2xl mx-auto p-5 mt-5 border border-accent rounded-2xl">
      <div className="flex flex-col items-center text-center">

        {/* Illustration/Icon */}
        <div className="w-24 h-24 rounded-full bg-warning-50 flex items-center justify-center mb-6">
          <span className="text-5xl">🐾</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-bold mb-3">
          No Pet Listings Yet
        </h2>

        {/* Description */}
        <p className="text-default-500 max-w-md mb-8">
          You haven't added any pets for adoption yet.
          Create your first listing and help a pet find
          a loving home.
        </p>

        {/* CTA */}

        <Button color="warning"
            size="lg">
          <Link href="/dashboard/add-pet" className="flex items-center gap-2"><Plus /> Add New Pet</Link>
        </Button>

      </div>
    </div>
  );
}