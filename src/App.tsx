import WhyWe from "./components/why-we";
import Bot from "./components/bot";
import RunString from "./components/run-string";
import DopUsl from "./components/dop-usl";
import Recom from "./components/recom";
import ef1 from "./assets/img/ef1.png";
import ef2 from "./assets/img/ef2.png";
import ef3 from "./assets/img/ef3.png";
import mobEf1 from "./assets/img/mobEf1.png";
import mobEf2 from "./assets/img/mobEf2.png";
import "./App.css";
import Merch from "./components/merch";
import Prod from "./components/prod";
// import FotoClients from "./components/foto-clients";
import FotoRobot from "./components/foto-robot";
import WhoAreWe from "./components/who-are-we";
import Polezn from "./components/polezn";
import Raschet from "./components/raschet";
import Dev from "./components/dev";
import Button from "./assets/sherad/button";
import Filteracia from "./components/filteracia";
import Otziv from "./components/otziv";
import Testt from "./components/test-foto";

function App() {
  const handleScroll = () => {
    const el = document.getElementById("kviz__cards");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="mx-auto overflow-hidden">
        {/* banner */}
        <section className="max-w-[1920px] mx-auto flex flex-row items-center justify-center md:h-screen w-full lg:px-30 md:px-20 sm:px-10 px-5 md:0 py-5 bg-[url('assets/img/banner-new.png')] md:bg-contain bg-size-[65%] md:bg-center bg-[85%] bg-no-repeat">
          <div className="  h-full w-full flex flex-col md:flex-row items-center md:justify-between relative">
            <div className="flex flex-col items-start md:items-center justify-center w-full md:w-[23%] md:mb-0 mb-8">
              <p className="text-black 2xl:text-7xl xl:text-5xl lg:text-3xl text-xl font-bold border-[3px]! border-[#bf2e82]! rounded-full md:px-4 md:py-2 px-2 py-0.5">
                5000+
              </p>
              <p className="text-black 2xl:text-4xl xl:text-2xl lg:text-xl md:text-lg text-sm font-bold">
                довольных клиентов
              </p>
            </div>
            <div className="flex flex-col items-start md:items-center justify-center md:order-0 order-3 w-full md:self-end md:flex-1">
              <h1 className="text-black 2xl:text-9xl xl:text-8xl lg:text-7xl md:text-5xl sm:text-5xl text-4xl font-regular">
                LOSPRINTOS
              </h1>
              <p className="text-black 2xl:text-6xl xl:text-4xl lg:text-2xl md:text-xl sm:text-lg text-[16px] font-regular">
                мерч для вашего бизнеса
              </p>
            </div>
            <div className="flex flex-col items-start md:items-center justify-center w-full md:w-[26%] md:mb-0 mb-16">
              <p className="text-black 2xl:text-4xl xl:text-3xl lg:text-xl md:text-lg sm:text-base text-sm font-bold md:leading-10 leading-4 md:mb-6 mb-2 md:text-right w-[70%] md:w-full">
                Мерч, который работает на вас. Производится
                <br /> с любовью и вкусом — всегда точно в срок
              </p>
              <Button
                text="Рассчитать стоимость"
                handleScroll={handleScroll}
                className=""
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center"></div>
        </section>
        {/* Фото наших клиентов */}
        {/* <FotoClients /> */}
        <Testt />
        {/* Фирменный мерч компании оказывает прямое влияние на: */}
        <Merch />
        <RunString color={"#222"} />
        {/* Наша продукция */}
        <Prod />
        {/* Отзывы наших клиентов */}
        <Otziv />
        {/* Разработаем ваш фирменный мерч под ключ */}
        <Dev />
        {/* Почему именно мы? */}
        <WhyWe />
        {/*Рассчитаем эффективность вашего мерча в рублях  */}
        <section className="max-w-[1920px] mx-auto relative bg-[#222] xl:rounded-4xl md:rounded-2xl rounded-lg main-padding">
          <h2 className="main-h2-font-size text-white">
            Рассчитаем эффективность вашего мерча в рублях
          </h2>
          <p className=" xl:text-2xl lg:text-xl md:text-lg sm:text-sm text-[12px] text-white font-medium lg:w-[40%] w-2/3 relative z-20">
            Мерч— это не просто сувенир, а рабочий инструмент маркетинга.{" "}
            <span className=" hidden md:inline">
              Мы поможем вам понять, как он влияет на узнаваемость бренда,
              вовлечённость аудитории и реальные финансовые показатели.
            </span>{" "}
            <br />
            <br /> По вашему запросу проведём анализ через сервис Мерч.Метрика —
            покажем, как именно ваш мерч помогает зарабатывать, привлекать
            клиентов и удерживать лояльных пользователей.
          </p>
          <div className=" bg_imgEf flex flex-row absolute bottom-0 right-4 gap-3 items-end lg:w-auto w-[20%]">
            <img
              src={ef1}
              alt="ef1"
              loading="lazy"
              className="w-full lg:block hidden h-fit lg:z-0 z-10 lg:relative absolute lg:bottom-auto bottom-8"
            />
            <img
              src={mobEf1}
              alt="mobEf1"
              loading="lazy"
              className="w-full lg:hidden block h-fit lg:z-0 z-10 lg:relative absolute lg:bottom-auto bottom-12"
            />

            <img
              src={ef2}
              alt="ef2"
              loading="lazy"
              className="w-full lg:block hidden h-fit lg:z-0 z-20 lg:relative absolute lg:right-0 right-2 lg:bottom-auto bottom-4"
            />
            <img
              src={mobEf2}
              alt="mobEf2"
              loading="lazy"
              className="w-full lg:hidden block h-fit lg:z-0 z-20 lg:relative absolute lg:right-0 right-2 lg:bottom-auto bottom-4"
            />

            <img
              src={ef3}
              alt="ef3"
              loading="lazy"
              className="w-full h-fit lg:z-0 z-30 lg:relative absolute lg:right-0 right-4"
            />
          </div>
        </section>
        <Polezn />
        {/* Расчет заказа за 1 минуту 24/7 */}
        <Bot />
        {/* Дополнительные услуги */}
        <DopUsl />
        <RunString color={"#222"} />
        <Filteracia />
        <RunString color={"#bf2e82"} />
        {/* Нас рекомендуют лучшие */}
        <Recom />
        <Raschet />
        <FotoRobot />
        <WhoAreWe />
        <RunString color={"#bf2e82"} />
      </div>
    </>
  );
}

export default App;
