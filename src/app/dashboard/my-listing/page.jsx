import ListingStatsCard from "@/components/listingpage/ListingStatsCard";
import NoListingsFound from "@/components/listingpage/NoListingsFound";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const MyListing = async () => {

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const { id } = session?.user;
  // console.log(id, "id");

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  // console.log(token);

  const res = await fetch(`http://localhost:5000/pets/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const pets = await res.json();


  // console.log(pets.length, 'listing page');
  return (
    <div className=" py-5">
      {/* Heading */}
      <div>
        <h1 className="font-bold text-3xl">
          My <span className="text-accent">Listing</span>
        </h1>
        <p className="text-gray-500">
          Manage your pets listing and adoption requests
        </p>
      </div>

      {
        pets.length > 0 ? <ListingStatsCard pets = {pets} token = {token}></ListingStatsCard>
        : 

        <NoListingsFound></NoListingsFound>
      }
    </div>
  );
};

export default MyListing;
