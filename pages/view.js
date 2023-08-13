"use client ";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import Product from "./components/Product";
import Virtual from "./components/Virtual";
import Testmonials from "./components/Testmonials";
import Footer from "./components/Footer";

function ViewPage() {
  return (
    <div className="view">
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Product />
      <Testmonials />
      <Footer />
    </div>
  );
}
export default ViewPage;
