import Hero from "@/components/shared/Hero";
import PetCard from "@/components/shared/PetCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background">
      <Hero></Hero>
      <PetCard></PetCard>
    </div>
  );
}
