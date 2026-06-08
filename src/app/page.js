import Reveal from "@/Animations/Reveal";
import CallToAction from "@/components/Home/CallToAction";
import FeaturedPetSection from "@/components/Home/FeaturedPetSection";
import HowAdoptionWorks from "@/components/Home/HowAdoptionWorks";
import PetCareTips from "@/components/Home/PetCareTips";
import SuccessStories from "@/components/Home/SuccessStories";
import WhyAdoptPets from "@/components/Home/WhyAdoptPets";
import Hero from "@/components/shared/Hero";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <Reveal>

      <Hero></Hero>
      </Reveal>
      <FeaturedPetSection></FeaturedPetSection>
      <WhyAdoptPets></WhyAdoptPets>
      <SuccessStories></SuccessStories>
      <PetCareTips></PetCareTips>
      <HowAdoptionWorks></HowAdoptionWorks>
      <CallToAction></CallToAction>
    </div>
  );
}
