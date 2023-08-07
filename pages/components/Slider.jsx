import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import { SliderProduct } from "./SliderData";
import Image from 'next/image';
function Slider() {
  return (
    <div className="slider-container">
      <Swiper
      modules={[Navigation, Pagination]}
      className="mySwiper"
      loopFillGroupWithBlank={true}
      navigation={true}
      slidesPerView={3}
      spaceBetween={20} 
      slidesPerGroup={1}
       loop={true}>
        {SliderProduct.map((slide, i) => (
            
            <SwiperSlide key={i}>
            <div className="left-s">
              <div className="name">
                <span>{slide.name}</span>
                <span>{slide.details}</span>
              </div>

              <span>{slide.price}$</span>
              <div>Shop now</div>
            </div>
            <Image src={slide.img} alt={slide.name} className="img-product" width={300} height={300} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default Slider;
