import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Booking from "./components/Booking/Booking";
import Testimonial from "./components/Testimonials/Testimonial";
import FooterEnd from "./components/Footer/FooterEnd";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    Aos.refresh();
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <TopProducts />
      <Banner />
      <Contact />
      <Booking />
      <Testimonial />

      <FooterEnd />
    </div>
  );
};

export default App;
