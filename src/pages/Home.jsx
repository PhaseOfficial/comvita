import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import About from "../components/home/Certification";
import Philosophy from "../components/home/BrandStory";
import WhyChooseUs from "../components/home/TrustBanner";
import Gallery from "../components/home/Gallery";
import Testimonials from "../components/home/Testimonials";
import HomeCTA from "../components/home/HomeCTA";
import Layout from "../components/common/Layout";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Philosophy />
      <Gallery />
      <Testimonials />
      <HomeCTA />
    </Layout>
  );
};

export default Home;
