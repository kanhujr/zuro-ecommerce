import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/home/Hero";
import Services from "../../components/home/Services";
import Categories from "../../components/home/Categories";
import FeaturedBanner from "../../components/home/FeaturedBanner";
import Trending from "../../components/home/Trending";
import Newsletter from "../../components/home/Newsletter";
import Footer from "../../components/layout/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Categories />
      <FeaturedBanner />
      <Trending />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
