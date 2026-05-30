"use client";

import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const AdoptionForm = ({ pet }) => {

  const {data:session} = authClient.useSession()
  const user = session?.user

  // console.log(user);

  const handleSubmit = async(e) => {
    e.preventDefault();
    const form = new FormData(e.target)
    const formData = Object.fromEntries(form.entries())
    formData.userId = user?.id
    formData.status = 'pending'

    const res = await fetch('http://localhost:5000/adoptions', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(formData)
    })

    const data = await res.json()
    console.log(data, 'data');

    if(data.insertedId){
     return toast.success('Adoption request added successfully')
    }

    if(!data.success){
      toast.error(data.message)
      return
    }

    
  };
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 h-fit sticky top-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Adoption Form</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Pet Name */}
        <div>
          <label className="block mb-2 font-medium">Pet Name</label>

          <input
            type="text"
            name="petName"
            value={pet.petName}
            readOnly
            className="w-full border bg-gray-100 rounded-xl px-4 py-3"
          />
        </div>

        {/* User Name */}
        <div>
          <label className="block mb-2 font-medium">User Name</label>

          <input
            type="text"
            name="userName"
            value={user?.name}
            readOnly
            className="w-full border bg-gray-100 rounded-xl px-4 py-3"
          />
        </div>

        {/* User Email */}
        <div>
          <label className="block mb-2 font-medium">User Email</label>

          <input
            type="email"
            name="userEmail"
            value={user?.email}
            readOnly
            className="w-full border bg-gray-100 rounded-xl px-4 py-3"
          />
        </div>

        {/* Pickup Date */}
        <div>
          <label className="block mb-2 font-medium">Pickup Date</label>

          <input
            type="date"
            name="pickupDate"
            // value={formData.pickupDate}
            // onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block mb-2 font-medium">Message</label>

          <textarea
            name="message"
            rows="4"
            placeholder="Write a message..."
            // value={formData.message}
            // onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Hidden Status */}
        <input
          type="hidden"
          name="status"
          //   value={formData.status}
        />

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition"
        >
          Adopt Now
        </button>
      </form>
    </div>
  );
};

export default AdoptionForm;
