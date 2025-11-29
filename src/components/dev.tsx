import Button from "../assets/sherad/button";
import devImg1 from "../assets/img/fon-hudi-dev.png";
import devImg2 from "../assets/img/fon-termos-dev.png";
export default function Dev() {
  // Функция для плавного скролла
  const handleScroll = () => {
    const el = document.getElementById("kviz__cards");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  const data = [
    {
      id: 1,
      title: "1",
      description:
        "Предложим решение под ваш бюджет — от минимальных до крупных тиражей",
    },
    {
      id: 2,
      title: "2",
      description: "Поможем с разработкой дизайна и концепции",
    },
    {
      id: 3,
      title: "3",
      description: "Подберём оптимальные материалы и носители под ваш бренд",
    },
    {
      id: 4,
      title: "4",
      description: "Сделаем бесплатный образец для наглядной визуализации идеи",
    },
    {
      id: 5,
      title: "5",
      description: "Отпечатаем тираж, соблюдая все этапы проверки качества",
    },
    {
      id: 6,
      title: "6",
      description: "Упакуем мерч стильно и безопасно",
    },
    {
      id: 7,
      title: "7",
      description: "Доставим в любую точку РФ в назначенный срок",
    },
    {
      id: 8,
      title: "8",
      description:
        "Позаботимся о ваших впечатлениях о состоянии продукции во время эксплуатации",
    },
  ];
  return (
    <section className="main-padding text-center max-w-[1920px] mx-auto">
      <div className="md:hidden block ">
        <h2 className="text-center main-h2-font-size text-black ">
          Разработаем ваш фирменный мерч под ключ
        </h2>
      </div>
      <div className="md:hidden block relative">
        <div className="flex flex-col mb-4 justify-center items-start">
          {data.map((i) => (
            <div
              key={i.id}
              className="flex gap-4 w-[80%] items-center mb-4 z-10"
            >
              <div className=" aspect-square w-10 h-10 bg-[#bf2e82] rounded-full text-center py-2 px-4 flex justify-center items-center">
                <span className="text-[#fff] text-2xl font-bold">
                  {i.title}
                </span>
              </div>
              <div className="text-[#222] sm:text-base text-xs font-medium z">
                {i.description}
              </div>
            </div>
          ))}
          <img
            src={devImg1}
            alt="dev"
            className="w-1/2 absolute top-0 right-[-6%] z-0"
          />
          <img
            src={devImg2}
            alt="dev"
            className="w-1/3 absolute bottom-[5%] right-[-6%] z-0"
          />
        </div>
        <Button
          text="Рассчитать стоимость"
          handleScroll={handleScroll}
          className=""
        />
      </div>
      <div className=" bigCircle md:flex hidden justify-center items-center rounded-full relative top-6">
        <div className="w-[70%] z-20 top-[10%] relative">
          <h2 className="text-center main-h2-font-size text-black ">
            Разработаем ваш фирменный мерч под ключ
          </h2>
          <Button
            text="Рассчитать стоимость"
            handleScroll={handleScroll}
            className=""
          />
        </div>
        {data.map((item) => (
          <div className="item z-10 h-[50%]" key={item.id}>
            <div className="circle relative">
              <span className="text-[#fff] 2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold">
                {item.title}
              </span>
              <div className="absolute 2xl:max-w-[400px] xl:max-w-[350px] max-w-[300px] w-[1000%] 2xl:bottom-[-90%] xl:bottom-[-70%] bottom-[-50%]">
                <p className="text-[#222] 2xl:text-2xl xl:text-xl text-sm font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
