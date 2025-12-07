import { useEffect, useRef } from "react";
import kovich from "../assets/img/kovich.png";

export default function Otziv() {
  const mountedRef = useRef(false);
  useEffect(() => {
    if (mountedRef.current) return;
    mountedRef.current = true;
    const ReviewLab = document.querySelector(".review-labss");
    const container = document.querySelector(".container__reviews");

    if (ReviewLab && container) {
      // Клонируем элемент чтобы не перемещать оригинал
      const clonedElement = ReviewLab.cloneNode(true) as Element;
      container.insertAdjacentElement("beforeend", clonedElement);
    }
  }, []);
  console.log("ksjbxkajsb");
  return (
    <section className="main-padding max-w-[1920px] mx-auto">
      <h2 className="main-h2-font-size">Отзывы наших клиентов</h2>
      <div className="container__reviews relative">
        <img
          className="absolute top-0 left-[-8%] z-[-10] w-[10%]"
          src={kovich}
          alt="kovich"
        />
        <img
          className="absolute bottom-3 right-[-8%] z-[-10] w-[10%] rotate-180 "
          src={kovich}
          alt="kovich"
        />
      </div>
    </section>
  );
}
