import { useEffect, useRef } from "react";

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
    <section className="main-padding">
      <h2 className="main-h2-font-size">Отзывы наших клиентов</h2>
      <div className="container__reviews"></div>
    </section>
  );
}
