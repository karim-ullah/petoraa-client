'use client';

import { authClient } from "@/lib/auth-client";
const Addpet = () => {
     const {data:session} = authClient.useSession()
  const user = session?.user
  // console.log(user.id);

  const handleSubmit = async(e) => {
    e.preventDefault();

    const formData = new FormData(e.target)
    const petData = Object.fromEntries(formData.entries())
    petData.userId = user?.id
    // console.log(data);

    // Sending data to database

    const res = await fetch('http://localhost:5000/pets', {
      method: 'POST',
      headers:{
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(petData)
    })
    const data = await res.json()
    if(data){
      alert('pet added successfully')
    }
  };
    return (
        <div className="min-h-screen bg-background py-10 px-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">

        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            Add a Pet
          </h1>
          <p className="text-gray-500 mt-2">
            Fill out the form to list your pet for adoption.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Pet Name */}
          <div>
            <label className="block mb-2 font-medium">
              Pet Name
            </label>

            <input
              required
              type="text"
              name="petName"
              placeholder="Enter pet name"
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Species & Breed */}
          <div className="grid md:grid-cols-2 gap-4">

            <div>
              <label className="block mb-2 font-medium">
                Species
              </label>

              <select
                name="species"
                
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
              <label className="block mb-2 font-medium">
                Breed
              </label>

              <input
                type="text"
                name="breed"
                placeholder="Enter breed"
                
                className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

          </div>

          {/* Age & Gender */}
          <div className="grid md:grid-cols-2 gap-4">

            <div>
              <label className="block mb-2 font-medium">
                Age
              </label>

              <input
                type="number"
                name="age"
                placeholder="Enter age"
                
                className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Gender
              </label>

              <select
                name="gender"
                
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
            <label className="block mb-2 font-medium">
              Image URL
            </label>

            <input
              type="text"
              name="imageUrl"
              placeholder="Paste image URL"
              
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Health & Vaccination */}
          <div className="grid md:grid-cols-2 gap-4">

            <div>
              <label className="block mb-2 font-medium">
                Health Status
              </label>

              <input
                type="text"
                name="healthStatus"
                placeholder="Healthy / Injured"
                
                className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Vaccination Status
              </label>

              <select
                name="vaccinationStatus"
                
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
              <label className="block mb-2 font-medium">
                Location
              </label>

              <input
                type="text"
                name="location"
                placeholder="Enter location"
                
                className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Adoption Fee
              </label>

              <input
                type="number"
                name="adoptionFee"
                placeholder="Enter fee"
                
                className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

          </div>

          {/* Description */}
          <div>
            <label className="block mb-2 font-medium">
              Description
            </label>

            <textarea
              name="description"
              rows="5"
              placeholder="Write pet details..."
              
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Owner Email */}
          <div>
            <label className="block mb-2 font-medium">
              Owner Email
            </label>

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
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition"
          >
            Add Pet
          </button>

        </form>
      </div>
    </div>
    );
};

export default Addpet;