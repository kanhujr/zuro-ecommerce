const Newsletter = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left */}
          <div>
            <h2 className="text-4xl font-bold mb-3">
              GET 10% OFF ON YOUR FIRST ORDER
            </h2>

            <p className="text-gray-400 max-w-lg">
              Subscribe to our newsletter and be the first to know about new
              drops, exclusive offers, and limited edition collections.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full lg:w-80 px-5 py-4 rounded-lg bg-white text-black outline-none"
            />

            <button className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-lg font-semibold">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
