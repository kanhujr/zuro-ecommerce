import categories from "../../data/categories";

export default function DesktopCategories() {
  return (
    <div className="flex gap-5 h-[420px]">
      {categories.map((item) => (
        <div
          key={item.name}
          className="
            group
            relative
            flex-1
            hover:flex-[2.8]
            transition-all
            duration-700
            ease-in-out
            overflow-hidden
            rounded-3xl
            bg-black
            shadow-lg
            hover:shadow-2xl
            cursor-pointer
          "
        >
          {/* Image */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 w-full p-7">
            <h3 className="text-2xl font-bold text-white">{item.name}</h3>

            <div className="mt-3 flex items-center justify-between">
              <p className="text-sm text-gray-300 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                Explore Collection
              </p>

              <span className="text-xl text-orange-500 transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </div>

            <div className="mt-4 h-[2px] w-0 bg-orange-500 transition-all duration-500 group-hover:w-full" />
          </div>
        </div>
      ))}
    </div>
  );
}
