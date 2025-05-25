import { Card } from "../../../../components/ui/card";

const categories = [
  { name: "Rock", count: 1250, icon: "🎸" },
  { name: "Jazz", count: 890, icon: "🎺" },
  { name: "Hip Hop", count: 650, icon: "🎤" },
  { name: "Electronic", count: 420, icon: "🎛️" },
  { name: "Classical", count: 380, icon: "🎼" },
  { name: "Blues", count: 320, icon: "🎵" },
];

export const Genre = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Browse by Genre
          </h2>
          <p className="text-gray-600">
            Explore our vast collection across all music genres
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Card
              key={category.name}
              className="hover:shadow-md transition-shadow cursor-pointer text-center p-6"
            >
              <div className="text-4xl mb-3">{category.icon}</div>
              <h3 className="font-semibold mb-1">{category.name}</h3>
              <p className="text-sm text-gray-600">{category.count} records</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
