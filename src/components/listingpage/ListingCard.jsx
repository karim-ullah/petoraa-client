"use client";
import Link from "next/link";
import { Card, CardFooter, Button, Chip } from "@heroui/react";

import { Eye, Pencil, TrashBin, ListUl } from "@gravity-ui/icons";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";
import DeleteAlert from "./DeleteAlert";
import Image from "next/image";
import RequestAlert from "./RequestAlert";

export default function PetCard({ pet, token }) {
  return (
    <Card
      shadow="sm"
      className="group overflow-hidden border hover:shadow-2xl transition-all duration-300"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <Image
          src={pet?.imageUrl}
          alt={pet?.petName}
          width={100}
          height={240}
          className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <Chip
          color="warning"
          variant="flat"
          className="absolute top-4 right-4 font-semibold"
        >
          ${pet?.adoptionFee}
        </Chip>
      </div>

      <div className="gap-3">
        <div>
          <h2 className="text-2xl font-bold">{pet?.petName}</h2>

          <p className="text-default-500 line-clamp-1">{pet?.description}</p>
        </div>
      </div>

      <CardFooter className="flex flex-col gap-3">
        {/* Main Button */}

        <div className="grid grid-cols-2 gap-2 w-full">
          
          <RequestAlert pet = {pet}></RequestAlert>

          <Button variant="outline" fullWidth>
            <Link
              href={`/all-pets/${pet?._id}`}
              className="w-full flex items-center justify-center gap-2"
            >
              <Eye /> View
            </Link>
          </Button>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 w-full">
          <Button fullWidth variant="outline" color="secondary">
            <Link
              href={`/dashboard/edit-pet/${pet?._id}`}
              className="w-full flex items-center justify-center gap-2"
            >
              <Pencil /> Edit
            </Link>
          </Button>

          <DeleteAlert pet={pet} token={token}></DeleteAlert>
        </div>
      </CardFooter>
    </Card>
  );
}
