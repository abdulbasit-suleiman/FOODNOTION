"use client ";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Product from "./components/Product";
import Slider from "./components/Slider";
import Testmonials from "./components/Testmonials";
import Virtual from "./components/Virtual";

function ViewPage() {
  return (
    <div className="view">
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Product />
      <Testmonials />
    </div>
  );
}
export default ViewPage;
