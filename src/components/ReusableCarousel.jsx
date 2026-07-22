import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

/**
 * ReusableCarousel Component
 * 
 * Renders a Swiper slider on mobile views (< md breakpoint) with exact specs:
 * - centeredSlides: true
 * - slidesPerView: 1.2
 * - spaceBetween: 16
 * - pagination: { clickable: true }
 * - loop: true
 * 
 * Active card is centered, scale: 1, 100% opacity.
 * Side cards are scale: 0.93, ~65% opacity.
 * 
 * On desktop (>= md breakpoint), renders items in desktopGridClass.
 */
const ReusableCarousel = ({
  items,
  renderItem,
  desktopGridClass = "md:grid md:grid-cols-3 gap-6",
  autoplay = true,
  autoplayDelay = 3500,
  loop = true,
  className = ""
}) => {
  if (!items || items.length === 0) return null;

  return (
    <div className={`w-full ${className}`}>
      {/* Mobile Slider (< md breakpoint) */}
      <div className="block md:hidden w-full px-4 py-2 overflow-hidden">
        <Swiper
          centeredSlides={true}
          slidesPerView={1.2}
          spaceBetween={16}
          loop={loop && items.length > 1}
          pagination={{
            clickable: true,
          }}
          autoplay={
            autoplay && items.length > 1
              ? { delay: autoplayDelay, disableOnInteraction: false }
              : false
          }
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

      {/* Desktop Grid (>= md breakpoint) */}
      <div className={`hidden ${desktopGridClass} w-full`}>
        {items.map((item, index) => renderItem(item, index))}
      </div>
    </div>
  );
};

export default ReusableCarousel;
