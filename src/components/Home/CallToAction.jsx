import Link from "next/link";
import { Button } from "@heroui/react";
import Reveal from "@/Animations/Reveal";

export default function CallToAction() {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl bg-accent p-10 md:p-16 text-white">
          {/* Content */}
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-sm font-medium mb-6">
              🐾 Start Your Adoption Journey
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mb-5">
              Give a Pet a Loving Home Today
            </h2>

            <p className="text-lg text-white/90 mb-8">
              Thousands of pets are waiting for a caring family. Browse
              available pets, submit an adoption request, and find your perfect
              companion.
            </p>

            <div className="flex flex-col items-center sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-accent font-semibold">
                <Link href="/all-pets">Browse Pets</Link>
              </Button>

              <Button
                size="lg"
                variant="bordered"
                className="border-white text-white"
              >
                <Link href="/add-pet">Add a Pet</Link>
              </Button>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
          <div className="absolute -bottom-12 -left-12 w-52 h-52 bg-white/10 rounded-full" />
        </div>
        </Reveal>
      </div>
    </section>
  );
}
