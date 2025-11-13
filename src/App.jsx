import Navbar from "./components/Navbar";
import Section2 from "./components/Section2";
import DistributorSection from "./components/DistributorSection";
import HighlightsBar from "./components/HighlightsBar";
import BingeBestsellers from "./components/BingeBestsellers";
import ScrollProducts from "./components/ScrollProducts";
import Quote from "./components/Quote";
import ContactUs from "./components/ContactUs";
import FeaturedStories from "./components/FeaturedStories";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import BottomSlideBar from "./components/BottomSlidebar";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <div className="w-full">
      <Navbar />
      <AppRouter/>
    </div>
  );
};

export default App;
