import NoRequestsFound from "@/components/requestpage/NoRequestsFound";
import TableDisplay from "@/components/requestpage/TableDisplay";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const MyRequestsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

  const {token} = await auth.api.getToken({
    headers: await headers()
  })
  const res = await fetch(`http://localhost:5000/adoptions/${user?.id}`);
  const pets = await res.json();
  return (
    <div>
      {/* Heading */}
      <div className="py-5">
        <h1 className="font-bold text-3xl">
          My <span className="text-accent">Requests</span>
        </h1>
        <p className="text-gray-500">
          Manage your pets adoption requests
        </p>
      </div>
      {pets.length > 0 ? <TableDisplay pets = {pets} token={token}></TableDisplay> : <NoRequestsFound></NoRequestsFound>}
      
    </div>
  );
};

export default MyRequestsPage;