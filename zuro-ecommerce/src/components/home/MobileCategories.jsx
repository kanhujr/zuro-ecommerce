import categories from "../../data/categories";

export default function MobileCategories() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      {categories.map((item) => (
        <div
          key={item.name}
          className="group overflow-hidden rounded-2xl bg-black shadow-md transition-all duration-300 active:scale-[0.98]"
        >
          {/* Image */}
          <div className="relative h-64 overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>

          {/* Content */}
          <div className="bg-black px-5 py-4">
            <h3 className="text-lg font-bold text-white">{item.name}</h3>

            <div className="mt-3 flex items-center justify-between">
              <p className="text-sm text-gray-400">Explore Collection</p>

              <span className="text-xl text-orange-500 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>

            {/* Accent Line */}
            <div className="mt-4 h-[2px] w-10 rounded-full bg-orange-500" />
          </div>
        </div>
      ))}
    </div>
  );
}
