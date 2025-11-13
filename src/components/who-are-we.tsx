import fon from "../assets/svg/fon-we-tshirt.png";

export default function WhoAreWe() {
  return (
    <section className="main-padding flex relative overflow-hidden">
      <div className=" flex-1 z-10">
        <div className=" border-style-pink inline-block rounded-[100px] 2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-black md:mb-4 md:mt-15 mt-5">
          <h2 className="bg-[#fff] md:px-6 px-2 md:py-3 py-1 rounded-[100px] font-bold leading-[100%]">
            Кто мы?
          </h2>
        </div>
        <p className=" font-medium text-black 2xl:text-2xl xl:text-xl lg:text-lg md:text-sm sm:text-base text-sx md:mb-10 mb-4 sm:leading-normal leading-[100%]">
          ООО «ЛОС ПРИНТОС» — ваш надёжный партнёр по фирменному мерчу и
          корпоративным подаркам. Помогаем воплотить любые идеи: от разработки
          дизайна до производства и доставки. Создаём яркий и качественный мерч
          для компаний, мероприятий, команд и партнёров. С нами ваш бренд
          становится заметнее, а стиль — по‑настоящему особенным.
        </p>
        <div className=" border-style-pink inline-block rounded-[100px] 2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-black md:mb-4">
          <h2 className="bg-[#fff] md:px-6 px-2 md:py-3 py-1 rounded-[100px] font-bold leading-[100%]">
            Наша цель
          </h2>
        </div>
        <p className=" font-medium text-black 2xl:text-2xl xl:text-xl lg:text-lg md:text-sm sm:text-base text-sx sm:leading-normal leading-[100%]">
          Превратить каждый заказ в историю успеха, делая процесс взаимодействия
          с нами лёгким, а результат — безупречным.
        </p>
      </div>
      <div className="xl:w-[50%] w-[25%] flex justify-end">
        <img
          src={fon}
          alt="fon"
          className=" xl:relative absolute xl:w-full sm:w-1/2 w-[65%] xl:top-0 sm:top-1/6 top-1/5 sm:right-0 right-[-25%] h-fit"
        />
      </div>
    </section>
  );
}
