import { useRef, useEffect, useState, useCallback } from "react";

export default function Polezn() {
  const data = [
    {
      id: 1,
      title: "Малому и среднему бизнесу:",
      items: [
        "Подарок вашим клиентам или партнёрам",
        "Формирование корпоративного духа внутри вашего бизнеса",
        "Дополнительный источник дохода",
      ],
    },
    {
      id: 2,
      title: "Спортивные организации:",
      items: [
        "Мерч под событие или мероприятие",
        "Продажа вашим фанатам или клиентам",
        "Униформа для спортсменов",
      ],
    },
    {
      id: 3,
      title: "Брендам одежды:",
      items: [
        "Вариативность при просчёте итоговой стоимости",
        "Срочное изготовление продукции",
        'Уникальные условия сотрудничества изготовление "под ключ"',
      ],
    },
    {
      id: 4,
      title: "Рекламные компании:",
      items: [
        "Недорогой и эффективный метод продвижения",
        "Уникальное решение для ваших клиентов",
        "Рост узнаваемости и построение бренда компании",
      ],
    },
    {
      id: 5,
      title: "Фондам и Государственным организациям:",
      items: [
        "Инструмент привлечения внимания",
        "Раздаточный материал под мероприятия",
        "Для благотворительных программ",
      ],
    },
    {
      id: 6,
      title: "И многим другим:",
      items: [
        "Для подарка родным и близким",
        "Художнику и иллюстратору",
        "Гостям мероприятий",
      ],
    },
  ];
  const data2 = [
    // {
    //   id: 0,
    //   title: "",
    //   items: [],
    // },
    {
      id: 1,
      title: "Рекламные компании:",
      items: [
        "Недорогой и эффективный метод продвижения",
        "Уникальное решение для ваших клиентов",
        "Рост узнаваемости и построение бренда компании",
      ],
    },
    {
      id: 2,
      title: "Малому и среднему бизнесу:",
      items: [
        "Подарок вашим клиентам или партнёрам",
        "Формирование корпоративного духа внутри вашего бизнеса",
        "Дополнительный источник дохода",
      ],
    },
    {
      id: 3,
      title: "Фондам и Государственным организациям:",
      items: [
        "Инструмент привлечения внимания",
        "Раздаточный материал под мероприятия",
        "Для благотворительных программ",
      ],
    },
    {
      id: 4,
      title: "Спортивные организации:",
      items: [
        "Мерч под событие или мероприятие",
        "Продажа вашим фанатам или клиентам",
        "Униформа для спортсменов",
      ],
    },
    {
      id: 5,
      title: "И многим другим:",
      items: [
        "Для подарка родным и близким",
        "Художнику и иллюстратору",
        "Гостям мероприятий",
      ],
    },
    {
      id: 6,
      title: "Брендам одежды:",
      items: [
        "Вариативность при просчёте итоговой стоимости",
        "Срочное изготовление продукции",
        'Уникальные условия сотрудничества изготовление "под ключ"',
      ],
    },
  ];

  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [paths, setPaths] = useState<string[]>([]);

  const calculatePaths = useCallback(() => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const circlePositions: { x: number; y: number }[] = [];

    blockRefs.current.forEach((block, index) => {
      if (block) {
        const blockRect = block.getBoundingClientRect();
        // Кружок находится в ::after с top: 10% и либо right: 0, либо left: -15%
        // Размер кружка: 50px (width и height)
        const circleSize = 50;
        const circleTopPercent = 0.1; // 10%

        // Координата Y: top блока + 10% высоты блока + половина размера кружка
        const circleY =
          blockRect.top -
          containerRect.top +
          blockRect.height * circleTopPercent +
          circleSize / 2;

        // Координата X зависит от четности индекса
        let circleX: number;
        if (index % 2 !== 0) {
          // Нечетные: left: -15% (кружок слева)
          circleX =
            blockRect.left -
            containerRect.left -
            blockRect.width * 0.15 +
            circleSize / 2;
        } else {
          // Четные: right: 0 (кружок справа)
          circleX = blockRect.right - containerRect.left - circleSize / 2;
        }

        circlePositions.push({ x: circleX, y: circleY });
      }
    });

    // Создаем волновые пути по заданному порядку:
    // от 0 блока
    // от 2 блока (index: 1) к 1му (index: 0)
    // от 1го (index: 0) к 4му (index: 3)
    // от 4го (index: 3) к 3му (index: 2)
    // от 3го (index: 2) к 6му (index: 5)
    // от 6го (index: 5) к 5му (index: 4)
    const connectionOrder = [1, 0, 3, 2, 5, 4]; // Порядок индексов для соединения
    // const connectionOrder = [0, 2, 1, 4, 3, ]; // Порядок индексов для соединения
    const newPaths: string[] = [];

    for (let i = 0; i < connectionOrder.length - 1; i++) {
      const startIndex = connectionOrder[i];
      const endIndex = connectionOrder[i + 1];

      // Проверяем, что оба индекса существуют
      if (circlePositions[startIndex] && circlePositions[endIndex]) {
        const start = circlePositions[startIndex];
        const end = circlePositions[endIndex];

        // Контрольная точка для волны (по середине, с изгибом)
        // const controlX = (start.x + end.x) / 2;
        // Высота изгиба (отрицательное значение = вверх)
        // const amplitude = -200;
        // const amplitude = i % 2 === 0 ? -200 : 200;
        // const controlY = (start.y + end.y) / 2 + amplitude;

        // Чередуем направление волны
        const waveDirection = i % 2 === 0 ? 1 : -1;
        // const amplitude = 200;
        const amplitude = i % 2 === 1 ? -150 : 150;
        // Две контрольные точки для создания синусоидальной формы
        const controlX1 = start.x + (end.x - start.x) * 0.25;
        const controlY1 = (start.y + end.y) / 2 + amplitude * waveDirection;

        const controlX2 = start.x + (end.x - start.x) * 0.75;
        const controlY2 = (start.y + end.y) / 2 - amplitude * waveDirection;

        // Кубическая кривая Безье для синусоиды
        newPaths.push(
          `M ${start.x},${start.y} C ${controlX1},${controlY1} ${controlX2},${controlY2} ${end.x},${end.y}`
        );

        // newPaths.push(
        //   `M ${start.x},${start.y} Q ${controlX},${controlY} ${end.x},${end.y}`
        // );
      }
    }

    setPaths(newPaths);
  }, []);

  useEffect(() => {
    // Пересчитываем после завершения рендера
    const timeoutId = setTimeout(() => {
      calculatePaths();
    }, 100);

    const handleResize = () => {
      // Используем requestAnimationFrame для плавного перерасчета
      requestAnimationFrame(() => {
        calculatePaths();
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, [calculatePaths]);

  return (
    <section className="main-padding relative bg-white">
      {/* Заголовок */}
      {/* <h2 className="md:block hidden main-h2-font-size text-center">
        мы можем быть полезны
      </h2> */}
      <h2 className=" main-h2-font-size md:mt-6 text-black md:leading-[100%] leading-7 max-w-[700px] md:block hidden">
        <span className="border-style-pink rounded-full">
          <span className="bg-white rounded-full md:px-2 px-1">Кому и чем</span>
        </span>{" "}
        мы можем быть полезны
      </h2>
      <h2 className="md:hidden block main-h2-font-size text-center">
        Кому и чем мы можем быть полезны
      </h2>

      {/* Адаптивный контейнер */}
      <div className="md:hidden flex flex-col">
        {data.map((i) => (
          <div
            key={i.id}
            className="border border-[#bf2e82] rounded-xl px-3 py-2 snow-polezn relative mb-4"
          >
            <div className="font-bold text-black sm:text-base text-sm">
              {i.title}
            </div>
            <ul className=" list-disc ml-4">
              {i.items.map((e, index) => (
                <li key={index} className="sm:text-sm text-[12px]">
                  {e}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div
        ref={containerRef}
        className="md:flex hidden flex-wrap justify-between 2xl:gap-y-10 xl:gap-y-8 lg:gap-y-6 relative"
      >
        {/* SVG с волновыми путями */}
        {paths.length > 0 && (
          <svg
            className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
            style={{ height: "100%", width: "100%" }}
          >
            <defs>
              <style>
                {`
                  .wave-line {
                    stroke: #BF2E82;
                    stroke-width: 4;
                    fill: none;
                    stroke-dasharray: 12, 8;
                    stroke-linecap: round;
                  }
                `}
              </style>
            </defs>
            {paths.map((path, index) => (
              <path key={index} className="wave-line" d={path} />
            ))}
          </svg>
        )}

        {data2.map((i, index) => (
          <div
            key={i.id}
            className={`w-1/2 flex${
              i.id === 6
                ? " justify-end"
                : i.id === 4
                ? " justify-end my-25"
                : i.id === 3
                ? " justify-center items-end"
                : i.id === 5
                ? " items-end"
                : i.id === 2
                ? ""
                : ""
            }`}
          >
            <div
              ref={(el) => {
                blockRefs.current[index] = el;
              }}
              className={`w-2/3 snow-polezn-desktop relative z-10 ${
                i.id === 2 ? "top-[-20%]" : i.id === 1 ? "top-[50%]" : ""
              } ${index % 2 !== 0 ? "after:left-[-15%]" : "after:right-0"}`}
            >
              <div className="font-bold text-black 2xl:text-4xl xl:text-3xl lg:text-2xl">
                {i.title}
              </div>
              <ul className=" list-disc ml-6">
                {i.items.map((e, index) => (
                  <li
                    key={index}
                    className="2xl:text-2xl xl:text-xl lg:text-lg"
                  >
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
