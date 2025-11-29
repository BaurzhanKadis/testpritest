import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import su from "../assets/svg/su.png";
import ter from "../assets/svg/ter.png";
import pl from "../assets/svg/pl.png";
import tshirt from "../assets/svg/tshirt.png";
import hudi from "../assets/svg/hudi.png";
import svitshirt from "../assets/svg/svitshirt.png";
import longsliv from "../assets/svg/longsliv.png";
import shoppers from "../assets/svg/shoppers.png";
import besball from "../assets/svg/besball.png";
import Button from "../assets/sherad/button";

export default function Prod() {
  // Состояние для мобильной пагинации
  const [visibleProducts, setVisibleProducts] = useState(4);

  // Все товары
  const originalProducts = [
    { id: 1, src: su, alt: "Сувениры наклейки", prise: 1100 },
    { id: 2, src: ter, alt: "Термосы кружки", prise: 1100 },
    { id: 3, src: pl, alt: "Плащи рюкзаки", prise: 1100 },
    { id: 4, src: tshirt, alt: "ФУТБОЛКИ", prise: 1100 },
    { id: 5, src: hudi, alt: "ХУДИ", prise: 1100 },
    { id: 6, src: svitshirt, alt: "Свитшоты", prise: 1100 },
    { id: 7, src: longsliv, alt: "ЛОНГСЛИВЫ", prise: 1100 },
    { id: 8, src: shoppers, alt: "ШОПЕРЫ", prise: 1100 },
    { id: 9, src: besball, alt: "БЕЙСБОЛКИ", prise: 1100 },
  ];

  // Функции для мобильной пагинации
  const loadMore = () => {
    setVisibleProducts((prev) => Math.min(prev + 2, originalProducts.length));
  };

  const hasMore = visibleProducts < originalProducts.length;
  const displayedProducts = originalProducts.slice(0, visibleProducts);

  const settings = {
    // dots: true,
    // centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <section className="main-padding max-w-[1920px] mx-auto">
      <h2 className="md:text-left text-center main-h2-font-size md:mt-6 text-black ">
        Наша продукция
      </h2>
      <div className="relative hidden md:block">
        <Slider {...settings}>
          {originalProducts.map((photo) => (
            <div key={photo.id} className="px-2 relative">
              <div className="w-full h-[400px] rounded-3xl overflow-hidden bg-gray-300">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className=" absolute bottom-[-7px] right-5 border sm:border-[3px] border-[#BF2E82] rounded-full px-3 py-1 bg-[#ffffffcc] backdrop-blur-xs 2xl:text-5xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-[16px] font-extrabold sm:font-bold">
                  от {photo.prise}р
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* Мобильная версия с пагинацией */}
      <div className="relative md:hidden block">
        {/* Сетка товаров для мобильных */}
        <div className="grid grid-cols-2 gap-4 mt-8">
          {displayedProducts.map((product) => (
            <div key={product.id} className="relative">
              <div className="w-full h-[300px] rounded-3xl overflow-hidden bg-gray-300">
                <img
                  src={product.src}
                  alt={product.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-[-7px] right-2 border-2 border-[#BF2E82] rounded-full px-2 py-1 bg-[#ffffffcc] backdrop-blur-xs text-sm font-bold">
                  от {product.prise}р
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Кнопка "Загрузить еще" для мобильных */}
        {hasMore && (
          <div className="flex justify-center mt-6">
            <Button text="Еще продукты" handleScroll={loadMore} className="" />
          </div>
        )}

        {/* Счетчик товаров для мобильных */}
        <div className="text-center mt-4 text-gray-600 text-sm">
          Показано {displayedProducts.length} из {originalProducts.length}{" "}
          товаров
        </div>
      </div>
    </section>
  );
}
