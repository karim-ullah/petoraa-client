import { Button } from "@heroui/react";
import Link from "next/link";

export default function NoPetsFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-6">
      
      {/* Icon */}
      <div className="text-6xl mb-4">🐾</div>

      {/* Title */}
      <h2 className="text-2xl font-semibold text-gray-800">
        No Pets Available
      </h2>

      {/* Subtitle */}
      <p className="text-gray-500 mt-2">
        We couldn’t find any pets matching your search or filter.
        Try adjusting your criteria.
      </p>

      {/* Button */}
      <Button className={'bg-accent mt-3'}>
        <Link href={'/add-pet'}>Add Pet</Link>
      </Button>
    </div>
  );
}