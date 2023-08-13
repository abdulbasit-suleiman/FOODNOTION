import { Swiper, SwiperSlide } from "swiper/react";
import { TestmonialsData } from "./TestmonialsData";
import Image from "next/image";
function Testmonials() {
  const openWhatsAppLink = () => {
    window.open("https://wa.me", "_blank");
  };
  return (
    <div className="testmonials"  id="testimonials">
      <div className="testmonials-wrapper">
        <div className="testmonials-conainer">
          <span>Top rated chefs</span>
          <span>Link up with Our chefs now !!!</span>
        </div>
        <img src="./asset/hero.jpg" className="testmonial-logo" />
        <div className="testmonials-conainer">
          <span>100k </span>
          <span>Happy customers with us</span>
        </div>
      </div>
      <div className="review">Reviews</div>
      <div className="carousal">
        <Swiper
          slidesPerView={3}
          slidesPerGroup={1}
          loop={false}
          spaceBetween={20}
          className="testmonials-carousal"
          breakpoints={{
            856:{
              slidesPerView:3
            },
            640:{
              slidesPerView:2
            },
           0:{
              slidesPerView:1
            }
          }}
        >
          {TestmonialsData.map((testmonial, i) => (
            <SwiperSlide>
              <div className="testimony">
                <Image
                  src={testmonial.img}
                  alt={testmonial.name}
                  className="testmonial-image"
                  width={100}
                  height={100}
                />
                <hr />
                <span className="testmonial-comments">
                  {testmonial.comments}
                </span>
                <span className="testmonial-name" onClick={openWhatsAppLink}>
                  {testmonial.name}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
export default Testmonials;
