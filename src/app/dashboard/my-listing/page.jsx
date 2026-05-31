import PetListingCard from "@/components/listingpage/ListingCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const MyListing = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const { id } = session?.user;
  console.log(id, "id");

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(`http://localhost:5000/pets/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const pets = await res.json();
//   console.log(pets, 'listing page');
  return (
    <div className="pl-5 py-5">
      {/* Heading */}
      <div>
        <h1 className="font-bold text-3xl">
          My <span className="text-accent">Listing</span>
        </h1>
        <p className="text-gray-500">
          Manage your pets listing and adoption requests
        </p>
      </div>

      {/* Stats */}

      <div className="grid grid-cols-3 gap-3 py-5">
        <div className="border border-gray-500 rounded-2xl flex items-center justify-center p-5">
          <div className="flex flex-col items-center">
            <span className="font-bold text-accent text-2xl">{pets.length}</span>
            <span className="font-medium text-gray-500">Total Listing</span>
          </div>
        </div>
        <div className="border border-gray-500 rounded-2xl flex items-center justify-center p-5">
          <div className="flex flex-col items-center">
            <span className="font-bold text-accent text-2xl">{pets.length}</span>
            <span className="font-medium text-gray-500">Total Listing</span>
          </div>
        </div>
        <div className="border border-gray-500 rounded-2xl flex items-center justify-center p-5">
          <div className="flex flex-col items-center">
            <span className="font-bold text-accent text-2xl">{pets.length}</span>
            <span className="font-medium text-gray-500">Total Listing</span>
          </div>
        </div>
      </div>

      {/* Listing Card section */}

      <div className="grid grid-cols-3 gap-3 py-5">
        {
            pets.map(pet => <PetListingCard key={pet._id} pet ={pet} token = {token}></PetListingCard>)
        }
      </div>
    </div>
  );
};

export default MyListing;
