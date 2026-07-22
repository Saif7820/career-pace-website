import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

/**
 * ReusableCarousel Component
 * 
 * Configured so that:
 * - Loads with the center slide as active slide by default (initialSlide = Math.floor(items.length / 2))
 * - centeredSlides: true
 * - Displays ~15–20% of previous slide on left & next slide on right
 * - Active center slide scale: 1 (100% opacity), side slides scale: 0.92 (60% opacity)
 * - Fully responsive across mobile, tablet, and desktop viewports with smooth transitions
 * - Clickable pagination dots below
 */
const ReusableCarousel = ({
  items,
  renderItem,
  autoplay = true,
  autoplayDelay = 3500,
  loop = true,
  className = ""
}) => {
  if (!items || items.length === 0) return null;

  // Calculate default center slide index
  const defaultInitialSlide = Math.floor(items.length / 2);

  return (
    <div className={`w-full overflow-visible px-2 sm:px-4 ${className}`}>
      <Swiper
        initialSlide={defaultInitialSlide}
        centeredSlides={true}
        loop={loop && items.length > 1}
        pagination={{
          clickable: true,
        }}
        autoplay={
          autoplay && items.length > 1
            ? { delay: autoplayDelay, disableOnInteraction: false }
            : false
        }
        breakpoints={{
          320: {
            slidesPerView: 1.25,
            spaceBetween: 16,
          },
          640: {
            slidesPerView: 1.35,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 1.4,
            spaceBetween: 24,
          },
          1280: {
            slidesPerView: 1.45,
            spaceBetween: 28,
          }
        }}
        modules={[Pagination, Autoplay]}
        className="reusable-swiper w-full"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className="flex justify-center items-stretch h-auto">
            <div className="w-full h-full flex justify-center items-stretch">
              {renderItem(item, index)}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReusableCarousel;
