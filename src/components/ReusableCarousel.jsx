import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

/**
 * ReusableCarousel Component
 * 
 * Supports smooth, bidirectional swiping (left and right) across all viewports.
 * Fixes right-swipe unresponsiveness via:
 * - loopAdditionalSlides={3} for full bidirectional loop cloning
 * - grabCursor={true}, simulateTouch={true}, allowTouchMove={true}
 * - autoplay with disableOnInteraction={true} and pauseOnMouseEnter={true}
 * - touch-action: pan-y
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

  const defaultInitialSlide = Math.floor(items.length / 2);

  return (
    <div className={`w-full overflow-visible px-2 sm:px-4 ${className}`}>
      <Swiper
        initialSlide={defaultInitialSlide}
        centeredSlides={true}
        loop={loop && items.length > 2}
        loopAdditionalSlides={3}
        grabCursor={true}
        simulateTouch={true}
        allowTouchMove={true}
        touchRatio={1}
        touchAngle={45}
        touchStartPreventDefault={false}
        pagination={{
          clickable: true,
        }}
        autoplay={
          autoplay && items.length > 1
            ? {
                delay: autoplayDelay,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }
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
        className="reusable-swiper w-full select-none"
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
