
import PetEditForm from "@/components/petedit/PetEditForm";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const PetEditPage = async({params}) => {

    const session = await auth.api.getSession({
        headers: await headers()
    })

    const user = session?.user

    const {token} = await auth.api.getToken({
        headers: await headers()
    })


    const {id} = await params

    // console.log(id, 'from edit');

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pet/${id}`,{
        headers: {
            authorization: `Bearer ${token}`
        }
    })

    const pet = await res.json()


    
  return (
    <div className="py-5">
      {/* Heading */}
      <div className="py-5">
        <h1 className="font-bold text-3xl">
          Edit <span className="text-accent">Pet</span>
        </h1>
        <p className="text-gray-500">Edit your pet details</p>
      </div>

      {/* Form */}
      <PetEditForm user = {user} pet = {pet} token ={token}></PetEditForm>
    </div>
  );
};

export default PetEditPage;
