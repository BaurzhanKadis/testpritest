import { useRef, useEffect, useState, useCallback } from "react";
import four from "../assets/img/four.png";
import on from "../assets/img/on.png";
import tw from "../assets/img/tw.png";
import thr from "../assets/img/thr.png";
import fo from "../assets/img/fo.png";
import m1 from "../assets/img/m.png";
import m2 from "../assets/img/m2.png";
import m3 from "../assets/img/m3.png";
import m4 from "../assets/img/m4.png";

const data = [
  {
    id: 0,
    title: "Ваш заказ",
    img: on,
    mobImg: m1,
  },
  {
    id: 1,
    title: "Предпечатная подготовка, проверка текстильного брака",
    img: on,
    mobImg: m1,
  },
  {
    id: 2,
    title: "Согласование сигнального образца — перед печатью тиража",
    img: tw,
    mobImg: m2,
  },
  {
    id: 3,
    title: "Постоянная выборочная проверка в процессе печати",
    img: thr,
    mobImg: m3,
  },
  {
    id: 4,
    title: "Финальная проверка всех нанесений на всех изделиях",
    img: fo,
    mobImg: m4,
  },
];

export default function Filteracia() {
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [paths, setPaths] = useState<string[]>([]);

  const calculatePaths = useCallback(() => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const circlePositions: { x: number; y: number }[] = [];

    blockRefs.current.forEach((block) => {
      if (block) {
        const blockRect = block.getBoundingClientRect();
        // Координаты центра верхней части блока (где будет кружок)
        const circleX =
          blockRect.left + blockRect.width / 2 - containerRect.left;
        const circleY = blockRect.top - containerRect.top;
        circlePositions.push({ x: circleX, y: circleY });
      }
    });

    // Создаем параболические пути между соседними кружками
    const newPaths: string[] = [];
    for (let i = 0; i < circlePositions.length - 1; i++) {
      const start = circlePositions[i];
      const end = circlePositions[i + 1];

      // Контрольная точка для параболы (по середине, с изгибом вверх)
      const controlX = (start.x + end.x) / 2;
      // Все параболы с изгибом вверх
      const amplitude = -280; // Высота изгиба (отрицательное значение = вверх)
      const controlY = (start.y + end.y) / 2 + amplitude;

      newPaths.push(
        `M ${start.x},${start.y} Q ${controlX},${controlY} ${end.x},${end.y}`
      );
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
    <section className="max-w-[1920px] mx-auto relative lg:pb-0 pb-15 lg:pt-0 pt-2 ">
      <div className="flex lg:absolute top-0">
        <img src={four} alt="four" className="w-[25%]" />
        <h2 className="2xl:text-9xl xl:text-7xl md:text-6xl sm:text-5xl text-4xl lg:w-[50%] w-auto font-bold">
          этапа фильтрации брака
        </h2>
      </div>
      <div
        ref={containerRef}
        className="w-full pt-[15%] lg:flex hidden justify-end relative"
      >
        {/* SVG с параболическими линиями */}
        {paths.length > 0 && (
          <svg
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            style={{ height: "100%", width: "100%" }}
          >
            <defs>
              <style>
                {`
                  .dashed-line {
                    stroke: #BF2E82;
                    stroke-width: 4;
                    fill: none;
                    stroke-dasharray: 10, 8;
                    stroke-linecap: round;
                  }
                `}
              </style>
            </defs>
            {paths.map((path, index) => (
              <path key={index} className="dashed-line" d={path} />
            ))}
          </svg>
        )}

        <div className=" flex items-end justify-end">
          {data.map((e, index) => (
            <div
              key={e.id}
              ref={(el) => {
                blockRefs.current[index] = el;
              }}
              style={{ height: `${400 + (e.id - 1) * 160}px` }}
              className={`${e.id === 4 ? "w-[20%]" : "w-1/7"} ${
                e.id === 0 ? "bg-white border-0" : "baur__bg"
              } baur__bg-circle 2xl:text-2xl xl:text-xl lg:text-lg md:text-base font-medium border pt-14 pl-5 flex flex-col justify-between relative`}
            >
              <div
                className={`${e.id === 4 ? "w-2/3" : "w-full"} ${
                  e.id === 0
                    ? "text-center font-bold 2xl:text-4xl xl:text-3xl lg:text-2xl"
                    : ""
                }`}
              >
                {e.title}
              </div>
              <div
                className={`${
                  e.id === 0 ? " hidden" : "flex"
                } justify-end overflow-hidden`}
              >
                <img
                  src={e.img}
                  alt="img"
                  className=" relative right-[-15px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:hidden flex flex-wrap justify-between gap-6 mt-5">
        {data.map((e) => (
          <div
            key={e.id}
            className={`${
              e.id === 1 || e.id === 3
                ? " rounded-br-xl rounded-tr-xl"
                : "rounded-tl-xl rounded-bl-xl top-9"
            } ${
              e.id === 0 ? " hidden" : ""
            } w-[46%] baur__bg-mobile flex justify-between relative px-5 pt-2 pb-7`}
          >
            <div className="md:text-base sm:text-sm text-[12px] font-medium">
              {e.title}
            </div>
            <div
              className={`flex absolute items-center ${
                e.id === 3 ? "right-[-20px]" : e.id === 1 ? "right-[-10px]" : ""
              } top-0 right-0 h-full`}
            >
              <img className="h-[80%]" src={e.mobImg} alt="img" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
