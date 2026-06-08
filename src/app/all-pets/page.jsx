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
    fetch(`http://localhost:5000/pets?search=${search}&species=${species}`)
      .then((res) => res.json())
      .then((data) => setPets(data));
  }, [search, species]);

  //   const res = await fetch("http://localhost:5000/pets");
  //   const pets = await res.json();
  // console.log(pets);

  return (
    <div className="max-w-7xl md:w-7xl px-6 mx-auto min-h-screen">

      <SearchFilter search={search} setSearch={setSearch}></SearchFilter>
      <div className="w-full flex items-center justify-between gap-10 pt-10">
        <Reveal>
          <div>
          <h3 className="font-semibold">
            All pets <span className="text-accent">({pets.length})</span>
          </h3>
        </div>
        </Reveal>
        <div>
          <Filter species={species} setSpecies={setSpecies}></Filter>
        </div>
      </div>

      {pets.length > 0 ? 
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-5 pb-10">
        {pets.map((pet) => (
          <PetCard key={pet._id} pet={pet}></PetCard>
        ))}
      </div>

      : 

      <div className="w-96 flex items-center justify-center mx-auto"><NoPetsFound> </NoPetsFound></div>
    }
    </div>
  );
};

export default AllPets;
