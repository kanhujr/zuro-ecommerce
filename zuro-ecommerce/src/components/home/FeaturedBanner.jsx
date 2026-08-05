const FeaturedBanner = () => {
  return (
    <section className="bg-[#F8F8F6] border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        {/* Badge */}
        <span className="inline-flex items-center rounded-full bg-black px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white">
          Curated
        </span>

        {/* Heading */}
        <h2 className="mt-8 text-4xl md:text-5xl font-bold tracking-tight text-black">
          Discover The ZURO Collection
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-500">
          Premium oversized streetwear crafted for everyday confidence. Designed
          to stand out while staying effortless.
        </p>

        {/* Divider */}
        <div className="mx-auto mt-10 h-1 w-24 rounded-full bg-gradient-to-r from-orange-400 to-orange-600"></div>
      </div>
    </section>
  );
};

export default FeaturedBanner;
