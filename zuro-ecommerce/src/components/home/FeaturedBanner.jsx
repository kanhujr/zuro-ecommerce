const FeaturedBanner = () => {
  return (
    <section className="bg-[#F8F8F6] border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20 text-center">
        {/* Badge */}
        <span className="inline-flex items-center rounded-full bg-black px-4 sm:px-5 py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.22em] sm:tracking-[0.28em] text-white">
          Curated
        </span>

        {/* Heading */}
        <h2 className="mt-6 sm:mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-tight">
          Discover The ZURO Collection
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-4 sm:mt-5 max-w-xl lg:max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-gray-500">
          Premium oversized streetwear crafted for everyday confidence. Designed
          to stand out while staying effortless.
        </p>

        {/* Divider */}
        <div className="mx-auto mt-8 sm:mt-10 h-1 w-16 sm:w-20 lg:w-24 rounded-full bg-gradient-to-r from-orange-400 to-orange-600"></div>
      </div>
    </section>
  );
};

export default FeaturedBanner;
