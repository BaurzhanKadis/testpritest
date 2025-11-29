import car from "../assets/img/car.png";
import qu from "../assets/img/qu.png";
import box from "../assets/img/boxx.png";
import women from "../assets/img/women.png";
const data = [
  { title: "Доставка", p: "изделий по всей территории РФ", srcImg: car },
  {
    title: "Консультация",
    p: "по выбору технологии брендирования и юридическим и прочим вопросам",
    srcImg: qu,
  },
  {
    title: "Упаковка",
    p: "вашего заказа в гофрокороб или индивидуальные пакеты на выбор",
    srcImg: box,
  },
  {
    title: "Персональный менеджер",
    p: "будет закреплен за вами для помощи по возникающим вопросам",
    srcImg: women,
  },
];
export default function DopUsl() {
  return (
    <section className="main-padding max-w-[1920px] mx-auto md:mt-12 mt-4 md:pb-16">
      <h2 className="text-center main-h2-font-size md:mb-12 text-black ">
        Дополнительные услуги
      </h2>
      <div className=" flex flex-row justify-between flex-wrap">
        {data.map((i) => (
          <div className="md:w-[24%] w-[49%] xl:p-7 md:p-5 p-2.5 bg-[#b4b4b433] 2xl:rounded-[60px] xl:rounded-4xl md:rounded-3xl rounded-2xl mb-2 flex flex-col overflow-hidden">
            <div className="font-bold mb-2 md:leading-[40px] leading-[16px] text-black 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-sm">
              {i.title}
            </div>
            <p className="text-black leading-[100%] flex-1 font-medium 2xl:text-2xl xl:text-xl lg:text-lg md:text-sm text-xs">
              {i.p}
            </p>
            <img
              className="translate-x-[62px] translate-y-[30px] scale-[1.4] transition-transform transform-gpu"
              src={i.srcImg}
              alt="img"
            ></img>
          </div>
        ))}
      </div>
    </section>
  );
}
