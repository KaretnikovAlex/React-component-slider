// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';


export function Slider() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src="https://expanding-collection.uiinitiative.com/images/moscow.jpg" /></SwiperSlide>
        <SwiperSlide><img src="https://expanding-collection.uiinitiative.com/images/tokyo.jpg" /></SwiperSlide>
        <SwiperSlide><img src="https://expanding-collection.uiinitiative.com/images/san-francisco.jpg" /></SwiperSlide>
        <SwiperSlide><img src="https://expanding-collection.uiinitiative.com/images/london.jpg" /></SwiperSlide>
      </Swiper>
    </>
  );
} 