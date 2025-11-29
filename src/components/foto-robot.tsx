import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import i from "../assets/svg/i.png";
import ii from "../assets/svg/ii.png";
import iii from "../assets/svg/iii.png";
import iv from "../assets/svg/iv.png";
import v from "../assets/svg/v.png";
import vi from "../assets/svg/vi.png";
import vii from "../assets/svg/vii.png";
import viii from "../assets/svg/viii.png";
import ix from "../assets/svg/ix.png";
import x from "../assets/svg/x.png";
import Gallary from "../assets/sherad/gallary";

export default function FotoRobot() {
  // Примеры фотографий клиентов (замените на реальные)
  const originalPhotos = [
    { id: 1, src: i, alt: "Клиент 1" },
    { id: 2, src: ii, alt: "Клиент 2" },
    { id: 3, src: iii, alt: "Клиент 3" },
    { id: 4, src: iv, alt: "Клиент 4" },
    { id: 5, src: v, alt: "Клиент 5" },
    { id: 6, src: vi, alt: "Клиент 6" },
    { id: 7, src: vii, alt: "Клиент 7" },
    { id: 8, src: viii, alt: "Клиент 8" },
    { id: 9, src: ix, alt: "Клиент 8" },
    { id: 10, src: x, alt: "Клиент 8" },
  ];

  return (
    <section className="bg-[#222] xl:rounded-4xl md:rounded-2xl rounded-lg md:py-8 py-4 md:pb-14">
      <div className="md:text-left text-center">
        {/* Заголовок */}
        <div className="lg:px-30 md:px-20 sm:px-10 px-5 max-w-[1920px] mx-auto">
          <div className=" border-style-pink inline-block rounded-[100px] 2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-white mb-4">
            <h2 className="bg-[#222] px-6 py-3 rounded-[100px] font-bold leading-[100%]">
              Фото наших работ
            </h2>
          </div>
          <p className="font-bold 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-sm text-white mb-6">
            Примеры работ, которыми мы радуем наших клиентов
          </p>
        </div>

        {/* Десктопная галерея */}
        <Gallary originalPhotos={originalPhotos} className="robots" />
      </div>
    </section>
  );
}
