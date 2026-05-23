import PetCard from "../shared/PetCard";

const FeaturedPetSection = async() => {

    const res = await fetch('http://localhost:5000/pets')
    const pets = await res.json()

  return (
    <div className="max-w-7xl mx-auto px-6">

      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Featured <span className="text-accent">Pets</span></h2>

        <p className="mt-4 text-gray-600 text-lg">
          Meet our adorable pets looking for a loving and caring home. Browse
          featured dogs, cats, and other companions ready for adoption.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-10">
            {
                pets.slice(0,6).map(pet => <PetCard key={pet._id} pet ={pet}></PetCard>)
            }
      </div>

    </div>
  );
};

export default FeaturedPetSection;
