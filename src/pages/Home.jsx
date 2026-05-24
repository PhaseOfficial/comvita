import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Certification from "../components/home/Certification";
import BrandStory from "../components/home/BrandStory";
import TrustBanner from "../components/home/TrustBanner";
import Gallery from "../components/home/Gallery";
import Testimonials from "../components/home/Testimonials";
import HomeCTA from "../components/home/HomeCTA";
import Layout from "../components/common/Layout";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Certification />
      <Services />
      <Gallery />
      <BrandStory />
      <TrustBanner />
      <Testimonials />
      <HomeCTA />
    </Layout>
  );
};

export default Home;
