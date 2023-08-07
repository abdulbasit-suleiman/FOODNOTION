import { Swiper, SwiperSlide } from 'swiper/react';
import {TestmonialsData} from './TestmonialsData'
function Testmonials() {
  return (
    <div className="testmonials">
      <div className="testmonials-wrapper">
        <div className="testmonials-conainer">

        <span>Top rated chefs</span>
        <span> text</span>
        </div>
      <img src="./asset/hero.jpg" className="testmonial-logo" />
      <div className="testmonials-conainer">
        <span>100k </span>
        <span>Happy customers with us</span>
      </div>
      </div>
      <div className="carousal">
        <Swiper
        slidePerView={3}
        slidePerGroup={1}
       loop={false}
       spaceBetween={20}
        className='testmonials-carousal'
        >
            { 
            TestmonialsData.map((testmonial,i)=>(
                <SwiperSlide>
                  <div>{testmonial.details}</div>
                  <div>{testmonial. name}</div>
                  <div>{testmonial.name}</div>

                </SwiperSlide>
              ))
            }
          </Swiper>
      </div>
    </div>
  );
}
export default Testmonials;
