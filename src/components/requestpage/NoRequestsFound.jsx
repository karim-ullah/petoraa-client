import Link from "next/link";
import { Card, Button } from "@heroui/react";

export default function NoRequestsFound() {
  return (
    <div className="max-w-2xl mx-auto shadow-sm border border-accent p-5 mt-5 rounded-2xl">
      <div className="flex flex-col items-center text-center">
        

        {/* Heading */}
        <h2 className="text-3xl font-bold mb-3">No Adoption Requests Found</h2>

        {/* Description */}
        <p className="text-default-500 max-w-md mb-8">
          You haven't submitted any adoption requests yet. Explore available
          pets and send a request to give a loving animal a new home.
        </p>

        {/* CTA */}

        <Button color="warning" size="sm">
          <Link href="/all-pets" className="flex items-center gap-2">
            Browse Pets
          </Link>
        </Button>
      </div>
    </div>
  );
}
