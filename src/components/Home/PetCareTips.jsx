import Reveal from "@/Animations/Reveal";
import { Card, Button } from "@heroui/react";

export default function PetCareTips() {
  const tips = [
    {
      icon: "🥗",
      title: "Provide Proper Nutrition",
      description:
        "Feed your pet a balanced diet appropriate for their age, size, and health needs.",
    },
    {
      icon: "🏃",
      title: "Daily Exercise",
      description:
        "Regular physical activity helps pets stay healthy, active, and mentally stimulated.",
    },
    {
      icon: "🩺",
      title: "Routine Vet Checkups",
      description:
        "Schedule regular veterinary visits to monitor your pet's health and vaccinations.",
    },
    {
      icon: "❤️",
      title: "Give Love & Attention",
      description:
        "Pets thrive when they receive affection, companionship, and positive interaction.",
    },
  ];

  return (
    <section className="py-10 bg-background">
      <div className="max-w-7xl mx-auto px-3">
        {/* Heading */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pet <span className="text-accent">Care</span> Tips
            </h2>

            <p className="text-gray-500 text-lg">
              Help your furry friends live a happy, healthy, and fulfilling life
              with these essential pet care practices.
            </p>
          </div>
        </Reveal>

        {/* Tips Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip, index) => (
            <Reveal key={index}>
              <Card className="h-full border shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="p-5">
                  <div className="text-5xl mb-5">{tip.icon}</div>

                  <h3 className="text-xl font-semibold mb-3 line-clamp-1">{tip.title}</h3>

                  <p className="text-default-500 line-clamp-4">{tip.description}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal>
          <div className="text-center mt-12">
          <Button color="warning" size="sm" className={"bg-accent"}>
            Explore More Tips
          </Button>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
