import React from 'react';
import ListingCard from './ListingCard';

const ListingStatsCard = ({pets, token}) => {
    return (
        <div>
        {/* Stats */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 py-5 items-center">
        <div className="border border-gray-500 rounded-2xl flex items-center justify-center p-5">
          <div className="flex flex-col items-center">
            <span className="font-bold text-accent text-2xl">{pets?.length}</span>
            <span className="font-medium text-gray-500">Total Listing</span>
          </div>
        </div>
        <div className="border border-gray-500 rounded-2xl flex items-center justify-center p-5">
          <div className="flex flex-col items-center">
            <span className="font-bold text-accent text-2xl">{pets?.length}</span>
            <span className="font-medium text-gray-500">Available</span>
          </div>
        </div>
        <div className="border border-gray-500 rounded-2xl flex items-center justify-center p-5">
          <div className="flex flex-col items-center">
            <span className="font-bold text-accent text-2xl">{pets?.length}</span>
            <span className="font-medium text-gray-500">Adopted</span>
          </div>
        </div>
      </div>

      {/* Listing Card section */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-5">
        {
            pets.map(pet => <ListingCard key={pet._id} pet ={pet} token = {token}></ListingCard>)
        }
      </div>
      </div>
    );
};

export default ListingStatsCard;