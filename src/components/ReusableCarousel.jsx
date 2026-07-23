import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

/**
 * ReusableCarousel Component
 * 
 * Provides smooth, reliable bidirectional swiping (left and right) on all devices.
 * Uses `rewind={true}` to prevent Swiper's small-array slide-cloning lock when swiping right.
 */
const ReusableCarousel = ({
  items,
  renderItem,
  autoplay = true,
  autoplayDelay = 3500,
  className = ""
}) => {
  if (!items || items.length === 0) return null;

  // Duplicate items if count is small so Swiper's loop engine can clone slides seamlessly in both directions
  const needsDuplication = items.length > 1 && items.length < 6;
  const displayItems = needsDuplication ? [...items, ...items] : items;

  return (
    <div className={`w-full overflow-visible px-2 sm:px-4 ${className}`}>
      <Swiper
        initialSlide={0}
        centeredSlides={true}
        loop={items.length > 1}
        loopPreventsSliding={false}
        grabCursor={true}
        simulateTouch={true}
        allowTouchMove={true}
        touchRatio={1.2}
        touchAngle={45}
        speed={450}
        resistance={false}
        observer={true}
        observeParents={true}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            // If items were duplicated, only show bullets for original items count
            if (needsDuplication && index >= items.length) {
              return '';
            }
            return `<span class="${className}"></span>`;
          }
        }}
        autoplay={
          autoplay && items.length > 1
            ? {
                delay: autoplayDelay,
                disableOnInteraction: false,
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
        {displayItems.map((item, index) => (
          <SwiperSlide key={index} className="flex justify-center items-stretch h-auto cursor-grab active:cursor-grabbing">
            <div className="w-full h-full flex justify-center items-stretch">
              {renderItem(item, index % items.length)}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReusableCarousel;
