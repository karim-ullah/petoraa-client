import Link from "next/link";
import { Card, CardFooter, Button, Chip } from "@heroui/react";

import { Eye, Pencil, TrashBin, ListUl } from "@gravity-ui/icons";

export default function PetCard({ pet }) {
  return (
    <Card
      shadow="sm"
      className="group overflow-hidden border hover:shadow-2xl transition-all duration-300"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={pet?.imageUrl}
          alt={pet?.petName}
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

          <p className="text-default-500">Ready for adoption</p>
        </div>
      </div>

      <CardFooter className="flex flex-col gap-3">
        {/* Main Button */}

        <div className="grid grid-cols-2 gap-2 w-full">
            <Link href={`/dashboard/requests/${pet?._id}`} className="w-full">
          <Button color="warning" fullWidth>
           <ListUl /> Requests
          </Button>
        </Link>

       
        <Button variant="outline" fullWidth>
            <Link href={`/all-pets/${pet?._id}`} className="w-full flex items-center justify-center gap-2">
            <Eye /> View
            </Link>
        </Button>
        </div>
        

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 w-full">
          

          <Link href={`/dashboard/edit-pet/${pet?._id}`} className="w-full">
            <Button
              fullWidth
              variant="outline"
              color="secondary"
            >
             <Pencil /> Edit
            </Button>
          </Link>

          <Button
            fullWidth
            color="danger"
            variant="outline"
            
            // onPress={() => handleDelete(pet?._id)}
          >
           <TrashBin /> Delete
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
