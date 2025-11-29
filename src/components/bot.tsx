import BotImg from "../assets/img/bot-umerch.png";
const data = [
  { t: "Работает быстро, понятно и удобно" },
  { t: "Помогает даже с голосовыми сообщениями" },
  { t: "Автоматизирует рутину — человек подключается на финальном этапе" },
];
export default function Bot() {
  return (
    <section className="max-w-[1920px] mx-auto overflow-x-clip relative bg-[#222] xl:rounded-4xl md:rounded-2xl rounded-lg md:py-8 py-4 main-padding">
      <h2 className="main-h2-font-size text-white md:text-left text-center">
        Расчет заказа
        <br /> за 1 минуту 24/7
      </h2>
      <div className="flex flex-row ">
        <div className="md:w-1/2 w-full">
          <p className="text-white font-medium 2xl:text-2xl xl:text-xl lg:text-lg md:text-sm text-xs md:mb-14 mb-3.5 w-full">
            Наш AI-менеджер всегда на связи — без выходных и перерывов,
            <span className="md:hidden inline ">
              {" "}
              поможет по любому вопросу!{" "}
            </span>
            <span className="md:inline hidden">
              Он мгновенно рассчитает стоимость заказа, поможет сориентироваться
              в ассортименте, покажет примеры работ и подготовит информацию для
              передачи вашему персональному менеджеру.
            </span>
          </p>
          {data.map((i) => (
            <p className="snow relative md:mb-5 mb-2 font-bold border-2 border-[#bf2e82] 2xl:rounded-[100px] xl:rounded-[50px] lg:rounded-4xl md:rounded-3xl rounded-2xl text-white 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-xs md:py-4 md:px-8 py-2 px-4 md:w-full w-[70%]">
              {i.t}
            </p>
          ))}
        </div>
        <div className=" w-1/2 relative ">
          <img
            src={BotImg}
            alt="BotImg"
            className="md:w-[75%] w-full right-0 2xl:bottom-[-28%] xl:bottom-[-22%] bottom-[9%] max-[500px]:scale-[2] md:translate-y-0 absolute h-auto scale-x-[-1] md:right-10"
          />
        </div>
      </div>
    </section>
  );
}
