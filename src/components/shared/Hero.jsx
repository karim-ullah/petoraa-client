import Image from 'next/image';
import React from 'react';

const Hero = () => {
    return (
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6 py-16">

        {/* Left Side */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Adopt Your <span className="text-orange-500">Best Friend</span>
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Find loving dogs and cats waiting for a home. Give them a second chance and bring happiness to your life.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="px-6 py-3 bg-orange-500 text-white rounded-lg cursor-pointer">
              Adopt Now
            </button>
            <button className="px-6 py-3 border hover:border-accent rounded-lg cursor-pointer">
              Browse Pets
            </button>
          </div>

          {/* Small Stats */}
          <div className="mt-8 flex gap-6 text-sm text-gray-600">
            <div>
              <p className="text-xl font-bold text-black">1200+</p>
              <p>Pets Available</p>
            </div>
            <div>
              <p className="text-xl font-bold text-black">850+</p>
              <p>Happy Adoptions</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative flex justify-center">

          {/* Main Image */}
          <div className="w-[320px] h-[400px] bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a"
              alt="pet"
              width={320}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Card 1 */}
          <div className="absolute top-10 left-0 md:left-5 bg-white shadow-lg p-3 rounded-xl">
            🐶 Dogs
          </div>

          {/* Floating Card 2 */}
          <div className="absolute bottom-10 right-0 bg-white shadow-lg p-3 rounded-xl">
            🐱 Cats
          </div>

          {/* Floating Card 3 */}
          <div className="absolute top-1/2 right-0 bg-orange-500 text-white px-3 py-2 rounded-xl">
            100+ Ready
          </div>

        </div>
      </div>
    );
};

export default Hero;