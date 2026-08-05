import { products } from "../../data/products";
import ProductCard from "../ui/ProductCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

const Trending = () => {
  const featuredProducts = products.filter((product) => product.featured);

  return (
    <section className="max-w-7xl mx-auto py-16 px-5">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Trending Now</h2>

        <div className="flex items-center gap-3">
          <button className="trending-prev w-11 h-11 rounded-full bg-white shadow hover:bg-orange-500 hover:text-white transition flex items-center justify-center">
            <ChevronLeft size={22} />
          </button>

          <button className="trending-next w-11 h-11 rounded-full bg-white shadow hover:bg-orange-500 hover:text-white transition flex items-center justify-center">
            <ChevronRight size={22} />
          </button>

          <button className="group text-sm font-semibold uppercase tracking-[0.2em] text-gray-700 transition-colors duration-300 hover:text-orange-500">
            View All
            <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl: ".trending-prev",
          nextEl: ".trending-next",
        }}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        spaceBetween={24}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        {featuredProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Trending;
