import Image from 'next/image';
import React from 'react';

const Topbar = () => {
    
    return (
        <div className=" bg-white rounded-2xl shadow-sm p-5 my-6 flex items-center justify-between">

          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Dashboard
            </h2>

            <p className="text-gray-500">
              Manage your pets and adoption requests
            </p>
          </div>

          {/* User */}
          <div className="flex items-center gap-3">

            <Image
              src="https://i.pravatar.cc/100"
              alt="user"
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-cover"
            />

            <div>
              <p className="font-semibold">
                Karim Ullah
              </p>

              <p className="text-sm text-gray-500">
                karim@example.com
              </p>
            </div>

          </div>

        </div>
    );
};

export default Topbar;