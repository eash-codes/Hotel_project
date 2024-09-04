import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
// Import required Swiper modules
import { EffectFade, Autoplay } from 'swiper/modules';

// Images
import Img1 from '../assets/heroSlider/1.jpg';
import Img2 from '../assets/heroSlider/2.jpg';
import Img3 from '../assets/heroSlider/3.jpg';

const slides = [
  {
    title: 'Your Luxury Hotel For Vacation',
    bg: Img1,
  },
  {
    title: 'Relax in Comfort',
    bg: Img2,
  },
  {
    title: 'Experience Elegance',
    bg: Img3,
  },
];

const HeroSlider = () => {
  return (
    <Swiper
      className="heroSlider h-[600px] lg:h-[860px]"
      modules={[EffectFade, Autoplay]}
      effect="fade"
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="relative h-full">
          <div className="absolute top-0 left-0 w-full h-full">
            <img
              className="object-cover h-full w-full"
              src={slide.bg}
              alt={slide.title}
            />
          </div>
          <div className="absolute bottom-10 left-10 text-white text-2xl font-bold">
            {slide.title}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
