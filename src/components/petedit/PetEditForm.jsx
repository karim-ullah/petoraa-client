'use client'

import { redirect } from "next/navigation";
import toast from "react-hot-toast";

const PetEditForm = ({user, pet, token}) => {
    const id = pet?._id

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const form = new FormData(e.target)
        const formData = Object.fromEntries(form.entries())
        const res = await fetch(`http://localhost:5000/pet/${id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json',
                authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(formData)
        })
        const data = await res.json()
        if(data.modifiedCount > 0){
            toast.success('Data Updated Successfully')
            redirect('/dashboard/my-listing')
        }

    }
    return (
        <form onSubmit={handleSubmit} className="space-y-6">
        {/* Pet Name */}
        <div>
          <label className="block mb-2 font-medium">Pet Name</label>

          <input
            required
            type="text"
            name="petName"
            placeholder="Enter pet name"
            defaultValue={pet.petName}
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Species & Breed */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-medium">Species</label>

            <select
              name="species"
              defaultValue={pet.species}
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Select Species</option>
              <option>Dog</option>
              <option>Cat</option>
              <option>Bird</option>
              <option>Rabbit</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">Breed</label>

            <input
              type="text"
              name="breed"
              placeholder="Enter breed"
              defaultValue={pet.breed}
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* Age & Gender */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-medium">Age</label>

            <input
              type="number"
              name="age"
              placeholder="Enter age"
              defaultValue={pet.age}
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Gender</label>

            <select
              name="gender"
              defaultValue={pet.gender}
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
        </div>

        {/* Image URL */}
        <div>
          <label className="block mb-2 font-medium">Image URL</label>

          <input
            type="text"
            name="imageUrl"
            placeholder="Paste image URL"
            defaultValue={pet.imageUrl}
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Health & Vaccination */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-medium">Health Status</label>

            <input
              type="text"
              name="healthStatus"
              placeholder="Healthy / Injured"
              defaultValue={pet.healthStatus}
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Vaccination Status</label>

            <select
              name="vaccinationStatus"
              defaultValue={pet.vaccinationStatus}
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Select Status</option>
              <option>Vaccinated</option>
              <option>Not Vaccinated</option>
            </select>
          </div>
        </div>

        {/* Location & Fee */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-medium">Location</label>

            <input
              type="text"
              name="location"
              placeholder="Enter location"
              defaultValue={pet.location}
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Adoption Fee</label>

            <input
              type="number"
              name="adoptionFee"
              placeholder="Enter fee"
              defaultValue={pet.adoptionFee}
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block mb-2 font-medium">Description</label>

          <textarea
            name="description"
            rows="5"
            placeholder="Write pet details..."
            defaultValue={pet.description}
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Owner Email */}
        <div>
          <label className="block mb-2 font-medium">Owner Email</label>

          <input
            type="email"
            name="ownerEmail"
            defaultValue={`${user?.email}`}
            readOnly
            placeholder="Enter owner email"
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-accent hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition cursor-pointer"
        >
          Update
        </button>
      </form>
    );
};

export default PetEditForm;