import { Card} from "@heroui/react";

export default function SuccessStories() {
  const stories = [
    {
      id: 1,
      name: "Sarah Johnson",
      pet: "Bella",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      story:
        "Adopting Bella was one of the best decisions I've ever made. She filled our home with joy and love from day one.",
    },
    {
      id: 2,
      name: "Michael Brown",
      pet: "Max",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      story:
        "Max quickly became part of our family. The adoption process was smooth, and we're grateful for this amazing companion.",
    },
    {
      id: 3,
      name: "Emily Davis",
      pet: "Luna",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      story:
        "Luna brought so much happiness into our lives. Watching her thrive in her new home has been incredibly rewarding.",
    },
  ];

  return (
    <section className="py-10 max-w-7xl mx-auto px-6">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Success <span className="text-accent">Stories</span>
          </h2>

          <p className="text-gray-500 text-lg">
            Real stories from families who found their perfect companions through adoption.
          </p>
        </div>

        {/* Stories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {stories.map((story) => (
            <Card
              key={story.id}
              className="border shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="p-6">

                {/* User */}
                <div className="flex items-center gap-4 mb-5">

                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="font-semibold text-lg">
                      {story.name}
                    </h3>

                    <p className="text-sm text-default-500">
                      Adopted {story.pet}
                    </p>
                  </div>

                </div>

                {/* Story */}
                <p className="text-default-600 leading-relaxed">
                  "{story.story}"
                </p>

              </div>
            </Card>
          ))}

        </div>
      </div>
    </section>
  );
}