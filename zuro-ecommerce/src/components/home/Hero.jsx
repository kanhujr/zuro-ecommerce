import { motion } from "framer-motion";
import heroVideo from "../../assets/videos/hero.mp4";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 md:via-black/55 to-black/20"></div> */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/30 to-transparent"></div>
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex justify-start">
          <div className="w-full lg:w-1/2 lg:pl-12">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="uppercase tracking-[3px] sm:tracking-[5px] lg:tracking-[6px] text-orange-500 text-xs sm:text-sm font-semibold"
            >
              New Collection 2026
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, x: -70 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-5 max-w-2xl text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-[0.9] text-white"
            >
              OWN YOUR
              <br />
              STYLE
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-6 max-w-md lg:max-w-lg text-base sm:text-lg md:text-xl text-gray-300 leading-7 md:leading-8"
            >
              Premium Streetwear Crafted For Creators, Dreamers & Rule Breakers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <button className="w-full sm:w-auto sm:min-w-[180px] bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-semibold text-white transition duration-300 shadow-lg hover:shadow-orange-500/30">
                Shop Collection
              </button>

              <button className="w-full sm:w-auto sm:min-w-[180px] border border-white/40 backdrop-blur-sm text-white hover:bg-white hover:text-black px-8 py-4 rounded-xl font-semibold transition duration-300">
                Explore
              </button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce">
          ↓
        </div>
      </div>
    </section>
  );
};

export default Hero;
