import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Gallary = ({
  className,
  originalPhotos,
}: {
  className?: string;
  originalPhotos: Array<{ id: number; src: string; alt: string }>;
}) => {
  return (
    <div className={`relative ${className || ""}`}>
      {/* Галерея */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        preventClicks={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
        breakpoints={{
          768: {
            slidesPerView: 2.5,
            spaceBetween: -50,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: -100,
          },
        }}
      >
        {originalPhotos.map((photo) => (
          <SwiperSlide key={photo.id}>
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover rounded-3xl"
            />
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
};

export default Gallary;
