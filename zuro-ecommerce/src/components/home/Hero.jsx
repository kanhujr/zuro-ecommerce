import { motion } from "framer-motion";
import heroVideo from "../../assets/videos/hero.mp4";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[6px] text-orange-500 font-semibold"
          >
            New Collection 2026
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-white text-6xl lg:text-8xl font-black mt-5 leading-none"
          >
            OWN YOUR
            <br />
            STYLE
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-gray-300 mt-6 text-lg max-w-xl"
          >
            Premium Streetwear Crafted For Creators, Dreamers & Rule Breakers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-10 flex gap-5"
          >
            <button className="bg-orange-500 hover:bg-orange-600 transition-all duration-300 px-8 py-4 rounded-xl font-bold text-white">
              Shop Collection
            </button>

            <button className="border border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-4 rounded-xl font-bold">
              Explore
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce">
        ↓
      </div>
    </section>
  );
};

export default Hero;
