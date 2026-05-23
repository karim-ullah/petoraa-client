import PetCard from '@/components/shared/PetCard';
import React from 'react';

const AllPets = async() => {
    const res = await fetch('http://localhost:5000/pets')
    const pets = await res.json()
    console.log(pets);
    return (
        <div className='max-w-7xl px-6 mx-auto min-h-screen'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 py-10'>
                {
                    pets.map(pet => <PetCard key={pet._id} pet = {pet}></PetCard>)
                }
            </div>
        </div>
    );
};

export default AllPets;