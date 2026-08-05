import acidWash from "../../assets/products/acid-wash/product-1/1.webp";
import everyday from "../../assets/products/everyday-essential/product-1/1.webp";
import hindu from "../../assets/products/hindu-divine/product-1/1.webp";
import oversized from "../../assets/products/oversized/product-1/1.webp";
import anime from "../../assets/products/anime/product-1/1.webp";

const categories = [
  {
    name: "Acid Wash",
    image: acidWash,
  },
  {
    name: "Everyday Essential",
    image: everyday,
  },
  {
    name: "Hindu Divine",
    image: hindu,
  },
  {
    name: "Oversized",
    image: oversized,
  },
  {
    name: "Anime",
    image: anime,
  },
];

export default function Categories() {
  return (
    <section className="max-w-7xl mx-auto py-14 px-5">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Shop By Category</h2>

        <button className="group text-sm font-semibold uppercase tracking-[0.2em] text-gray-700 transition-colors duration-300 hover:text-orange-500">
          View All
          <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>

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

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

            {/* Bottom Content */}
            <div className="absolute bottom-0 left-0 w-full p-7">
              <h3 className="text-2xl font-bold text-white">{item.name}</h3>

              <div className="mt-3 flex items-center justify-between">
                <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  Explore Collection
                </p>

                <span className="text-orange-500 text-xl transition-all duration-300 group-hover:translate-x-2">
                  →
                </span>
              </div>

              {/* Animated Line */}
              <div className="mt-4 h-[2px] w-0 bg-orange-500 transition-all duration-500 group-hover:w-full"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
