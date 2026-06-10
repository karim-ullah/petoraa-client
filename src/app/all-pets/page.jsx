"use client";
import Reveal from "@/Animations/Reveal";
import Filter from "@/components/allpets/Filter";
import NoPetsFound from "@/components/allpets/NoPetsFound";
import SearchFilter from "@/components/allpets/SearchFilter";
import PetCard from "@/components/shared/PetCard";
import { useEffect, useState } from "react";

const AllPets = () => {
  const [pets, setPets] = useState([]);
  const [search, setSearch] = useState("");
  const [species, setSpecies] = useState("");

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pets?search=${search}&species=${species}`)
      .then((res) => res.json())
      .then((data) => setPets(data));
  }, [search, species]);

  

  return (
    <div className="max-w-7xl px-3 mx-auto min-h-screen">

      <div className="w-full">
        <Reveal><SearchFilter search={search} setSearch={setSearch}></SearchFilter></Reveal>
      </div>

      <div className="flex justify-between pt-10">
        <div className="text-left"><Reveal>
          
          <h3 className="font-semibold">
            All pets <span className="text-accent">({pets.length})</span>
          </h3>
        
        </Reveal></div>
        <div>
          <Filter species={species} setSpecies={setSpecies}></Filter>
        </div>
      </div>


      {/* petcard and nopetcard */}

      
        {pets.length > 0 ? 
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-5 pb-10">
        {pets.map((pet) => (
          <PetCard key={pet._id} pet={pet}></PetCard>
        ))}
      </div>

      : 

      <div className="w-full max-w-96 flex items-center justify-center mx-auto"><NoPetsFound> </NoPetsFound></div>
    }
      
    </div>
  );
};

export default AllPets;
