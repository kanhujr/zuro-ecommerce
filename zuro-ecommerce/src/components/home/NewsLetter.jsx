const Newsletter = () => {
  return (
    <section className="bg-black text-white py-14 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          {/* Left */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
              JOIN THE COMMUNITY
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              GET 10% OFF ON YOUR FIRST ORDER
            </h2>

            <p className="mt-4 max-w-xl text-base sm:text-lg leading-7 text-gray-400">
              Subscribe to our newsletter and be the first to know about new
              drops, exclusive offers, and limited edition collections.
            </p>
          </div>

          {/* Right */}
          <div className="flex w-full flex-col sm:flex-row gap-4 lg:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full lg:w-80 rounded-xl border border-transparent bg-white px-5 py-4 text-black outline-none transition-all duration-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30"
            />

            <button className="w-full sm:w-auto rounded-xl bg-orange-500 px-8 py-4 font-semibold transition-all duration-300 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/30">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
