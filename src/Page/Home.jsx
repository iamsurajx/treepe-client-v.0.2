import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
// import Itineraries from "./Itineraries";

function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Landing Page */}
      <HeroSection />
      {/* <Itineraries /> */}

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;
