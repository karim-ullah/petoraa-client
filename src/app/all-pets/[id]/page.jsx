import AdoptionForm from "@/components/detailspage/AdoptionForm";


const PetDetailsPage = async({params})=> {

    const {id} = await params

  const res = await fetch(`http://localhost:5000/pets/${id}`)
  const pet = await res.json()

  

  


  return (
    <div className="bg-background py-10">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 px-6">

        {/* Left Side - Pet Details */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden">

          {/* Image */}
          <img
            src={pet.imageUrl}
            alt={pet.petName}
            className="w-full h-[400px] object-cover"
          />

          {/* Details */}
          <div className="p-6">

            <div className="flex items-center justify-between">
              <h1 className="text-4xl font-bold text-gray-800">
                {pet.petName}
              </h1>

              <span className="bg-orange-100 text-orange-500 px-4 py-1 rounded-full">
                {pet.species}
              </span>
            </div>

            <p className="mt-4 text-gray-600">
              {pet.description}
            </p>

            {/* Info Grid */}
            <div className="grid md:grid-cols-2 gap-4 mt-8">

              <div className="bg-gray-50 p-4 rounded-xl">
                <p className="font-semibold">Breed</p>
                <p className="text-gray-600">{pet.breed}</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl">
                <p className="font-semibold">Age</p>
                <p className="text-gray-600">{pet.age} Years</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl">
                <p className="font-semibold">Gender</p>
                <p className="text-gray-600">{pet.gender}</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl">
                <p className="font-semibold">Health Status</p>
                <p className="text-gray-600">{pet.healthStatus}</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl">
                <p className="font-semibold">
                  Vaccination Status
                </p>
                <p className="text-gray-600">
                  {pet.vaccinationStatus}
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl">
                <p className="font-semibold">Location</p>
                <p className="text-gray-600">{pet.location}</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl">
                <p className="font-semibold">Adoption Fee</p>
                <p className="text-gray-600">
                  ${pet.adoptionFee}
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* Right Side - Adoption Form */}
        <AdoptionForm></AdoptionForm>

      </div>
    </div>
  );
}



export default PetDetailsPage;