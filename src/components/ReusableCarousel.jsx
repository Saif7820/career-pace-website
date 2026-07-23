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
  desktopGridClass = "md:grid md:grid-cols-3 gap-6",
  autoplay = true,
  autoplayDelay = 3500,
  className = ""
}) => {
  if (!items || items.length === 0) return null;

  // Duplicate items if count is small so Swiper's loop engine can clone slides seamlessly on mobile
  const needsDuplication = items.length > 1 && items.length < 6;
  const displayItems = needsDuplication ? [...items, ...items] : items;

  return (
    <div className={`w-full ${className}`}>
      {/* Mobile Slider (< md breakpoint) */}
      <div className="block md:hidden w-full px-2 sm:px-4 overflow-visible">
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

      {/* Desktop Grid (>= md breakpoint) - Static, Unchanged Original Layout */}
      <div className={`hidden ${desktopGridClass} w-full`}>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {renderItem(item, index)}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ReusableCarousel;
