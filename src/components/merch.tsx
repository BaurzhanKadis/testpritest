import prodimg from "../assets/img/prod-img.png";
const data = [
  { id: 1, title: "Продажи и прибыль" },
  { id: 2, title: "Доверие к компании" },
  { id: 3, title: "Лояльность клиентов" },
  { id: 4, title: "Атмосферу в команде" },
  { id: 5, title: "Мотивацию сотрудников" },
  { id: 6, title: "Имидж и статус компании" },
];
export default function Merch() {
  return (
    <section className="main-padding md:pb-16 relative overflow-hidden">
      <div className="z-10 relative">
        <h2 className=" main-h2-font-size md:mt-6 text-black md:leading-[100%] leading-7">
          <span className="border-style-pink rounded-full">
            <span className="bg-white rounded-full md:px-2 px-1">
              Фирменный мерч <span className="md:inline hidden">компании</span>
            </span>
          </span>{" "}
          <span className="inline md:hidden">компании</span> оказывает прямое
          влияние на:
        </h2>
      </div>
      <div className="inline-flex flex-col z-10 relative">
        {data.map((i) => (
          <div
            key={i.id}
            className="snow-merch relative w-fit md:mb-5 mb-2 font-bold border-2 border-black bg-white 2xl:rounded-[100px] xl:rounded-[50px] lg:rounded-4xl md:rounded-3xl rounded-2xl text-black 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-xs md:py-4 md:px-8 md:pl-18 pl-8 py-2 px-4"
          >
            {i.title}
          </div>
        ))}
      </div>
      <img
        className=" absolute 2xl:w-[40%] xl:w-1/2 lg:w-[55%] w-[50%] 2xl:right-20 md:right-0 right-[-20px] md:bottom-[-30px] bottom-[15%] z-0"
        src={prodimg}
        alt="prodimg"
      />
    </section>
  );
}
