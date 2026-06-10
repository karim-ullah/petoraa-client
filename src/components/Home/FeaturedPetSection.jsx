
import Reveal from "@/Animations/Reveal";
import PetCard from "../shared/PetCard";

const FeaturedPetSection = async() => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pets`)
    const pets = await res.json()

  return (
    <div className="max-w-7xl mx-auto px-3">

      <Reveal>
        <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Featured <span className="text-accent">Pets</span></h2>

        <p className="mt-4 text-gray-600 text-lg">
          Meet our adorable pets looking for a loving and caring home. Browse
          featured dogs, cats, and other companions ready for adoption.
        </p>
      </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-10">
            {
                pets.slice(0,6).map(pet => <PetCard key={pet._id} pet ={pet}></PetCard>)
            }
      </div>

    </div>
  );
};

export default FeaturedPetSection;
