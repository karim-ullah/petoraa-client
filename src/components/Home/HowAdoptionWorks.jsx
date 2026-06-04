import { Card } from "@heroui/react";

export default function HowAdoptionWorks() {
  const steps = [
    {
      step: "01",
      icon: "🔍",
      title: "Browse Pets",
      description:
        "Explore hundreds of adorable pets looking for a loving home and find the perfect companion.",
    },
    {
      step: "02",
      icon: "📝",
      title: "Submit Request",
      description:
        "Fill out the adoption form with your details and tell the owner why you'd be a great pet parent.",
    },
    {
      step: "03",
      icon: "🤝",
      title: "Meet the Pet",
      description:
        "Connect with the pet owner, ask questions, and arrange a meeting with your future companion.",
    },
    {
      step: "04",
      icon: "🏠",
      title: "Bring Them Home",
      description:
        "Complete the adoption process and welcome your new furry friend into your family.",
    },
  ];

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            How <span className="text-accent">Adoption</span> Works
          </h2>

          <p className="text-gray-500 text-lg">
            Adopting a pet is simple. Follow these four easy steps
            to find your perfect companion.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {steps.map((step) => (
            <Card
              key={step.step}
              className="relative border shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="p-8 text-center">

                {/* Step Number */}
                <span className="absolute top-4 right-4 text-5xl font-bold text-default-100">
                  {step.step}
                </span>

                {/* Icon */}
                <div className="text-5xl mb-5">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-default-500">
                  {step.description}
                </p>

              </div>
            </Card>
          ))}

        </div>

      </div>
    </section>
  );
}