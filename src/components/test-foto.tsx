import client from "../assets/svg/client1.jpg";
import client2 from "../assets/svg/client2.jpg";
import client3 from "../assets/svg/client3.png";
import Gallary from "../assets/sherad/gallary";

export default function Testt() {
  // Примеры фотографий клиентов (замените на реальные)
  const originalPhotos = [
    { id: 1, src: client, alt: "Клиент 1" },
    { id: 2, src: client2, alt: "Клиент 2" },
    { id: 3, src: client3, alt: "Клиент 3" },
    { id: 4, src: client, alt: "Клиент 4" },
    { id: 5, src: client2, alt: "Клиент 5" },
    { id: 6, src: client3, alt: "Клиент 6" },
    { id: 7, src: client, alt: "Клиент 7" },
    { id: 8, src: client2, alt: "Клиент 8" },
  ];

  return (
    <section className="bg-[#222] xl:rounded-4xl md:rounded-2xl rounded-lg md:py-8 py-4 md:pb-14 ">
      <div className="md:text-left text-center">
        {/* Заголовок */}
        <div className="lg:px-30 md:px-20 sm:px-10 px-5 max-w-[1920px] mx-auto">
          <div className=" border-style-pink inline-block rounded-[100px] 2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-white mb-8">
            <h2 className="bg-[#222] px-6 py-3 rounded-[100px] font-bold leading-[100%]">
              Фото наших клиентов
            </h2>
          </div>
        </div>

        {/* Галерея */}
        <Gallary originalPhotos={originalPhotos} className="" />
      </div>
    </section>
  );
}
