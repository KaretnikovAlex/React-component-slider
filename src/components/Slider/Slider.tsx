// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { slides } from '../../data/slides';
import classes from './Slider.module.css'

export function Slider() {
  return (
    <section>
      <Swiper navigation={true} modules={[Navigation]} className={classes.mySwiper}>
        {slides.map(elem => <SwiperSlide className='slide' key={elem.id}><img src={elem.img} alt={elem.text} />
          <span className={classes.slide_text_container}>
            <span className={classes.slide_text}>{elem.text}</span>
            <span className={classes.slide_link}><a href={'#' + elem.link} rel='nofollow' target='_blank'>Link &rarr;</a> </span>
          </span>
        </SwiperSlide>)}
      </Swiper>
    </section>
  );
} 