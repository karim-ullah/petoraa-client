import Image from "next/image";
import Link from "next/link";

export default function PetCard({pet}) {
  // console.log(pet, 'from pet');
  return (
    <div className=" bg-white rounded-2xl shadow-lg overflow-hidden border hover:shadow-2xl transition duration-300">

      {/* Pet Image */}
      <div className="relative w-full h-64">
        <Image
          src={pet.imageUrl}
          alt="Dog"
          fill
          className="object-cover"
        />
      </div>

      {/* Card Content */}
      <div className="p-5">

        {/* Pet Name */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">
            {pet.petName}
          </h2>

          <span className="bg-orange-100 text-orange-500 text-sm px-3 py-1 rounded-full">
            {pet.species}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 mt-3">
          {pet.description}
        </p>

        {/* Small Info */}
        <div className="flex gap-4 mt-4 text-sm text-gray-500">
          <p>🎂 {pet.age}</p>
          <p>📍 {pet.location}</p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <button className="flex-1 border border-orange-500 text-orange-500 py-2 rounded-xl hover:bg-orange-50 transition">
            <Link href={`/all-pets/${pet._id}`}>View Details</Link>
          </button>

          <button className="flex-1 bg-orange-500 text-white py-2 rounded-xl hover:bg-orange-600 transition">
            Adopt Now
          </button>
        </div>

      </div>
    </div>
  );
}