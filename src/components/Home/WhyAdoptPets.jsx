import Reveal from "@/Animations/Reveal";
import React from "react";

const WhyAdoptPets = () => {
  return (
    <section className="py-10 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why <span className="text-accent">Adopt</span> a Pet?
          </h2>

          <p className="text-gray-500 text-lg">
            Adopting a pet changes two lives at once — yours and theirs. Give a
            loving animal a second chance while gaining a loyal companion.
          </p>
        </div>
        </Reveal>

        {/* Features */}
        <Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-background p-8 rounded-3xl shadow-sm border">
            <div className="text-5xl mb-4">❤️</div>

            <h3 className="text-xl font-semibold mb-3">Save a Life</h3>

            <p className="text-default-500">
              Every adoption helps reduce the number of homeless animals and
              gives a pet a loving home.
            </p>
          </div>

          <div className="bg-background p-8 rounded-3xl shadow-sm border">
            <div className="text-5xl mb-4">🐾</div>

            <h3 className="text-xl font-semibold mb-3">Loyal Companion</h3>

            <p className="text-default-500">
              Pets provide unconditional love, companionship, and emotional
              support throughout your life.
            </p>
          </div>

          <div className="bg-background p-8 rounded-3xl shadow-sm border">
            <div className="text-5xl mb-4">😊</div>

            <h3 className="text-xl font-semibold mb-3">Improve Well-being</h3>

            <p className="text-default-500">
              Studies show that pet owners often experience reduced stress and
              increased happiness.
            </p>
          </div>

          <div className="bg-background p-8 rounded-3xl shadow-sm border">
            <div className="text-5xl mb-4">🏠</div>

            <h3 className="text-xl font-semibold mb-3">Give Them a Home</h3>

            <p className="text-default-500">
              Many pets are waiting for a safe and caring family. Your home
              could be exactly what they need.
            </p>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
};

export default WhyAdoptPets;
