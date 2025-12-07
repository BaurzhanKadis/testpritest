// import React from "react";
import Kviz from "../assets/sherad/kviz";

import coin from "../assets/img/coin.png";
import coin3 from "../assets/img/coin3.png";
import coin4 from "../assets/img/coin4.png";

export default function Raschet() {
  return (
    <section className="main-padding max-w-[1920px] mx-auto relative">
      <img
        className="absolute top-2 left-0 w-[15%] -z-10"
        src={coin}
        alt="coin"
      />
      <img
        className="absolute top-1/2 left-0 w-[15%] -z-10"
        src={coin3}
        alt="coin"
      />
      <img
        className="absolute top-1/3 right-0 w-[15%] -z-10 rotate-270"
        src={coin3}
        alt="coin"
      />
      <img
        className="absolute bottom-0 right-0 w-[15%] -z-10"
        src={coin4}
        alt="coin"
      />
      <div className="flex justify-center flex-col items-center">
        <h2 className="main-h2-font-size md:border-4 border-2 border-[#bf2e82] rounded-full py-2.5 text-center w-auto sm:w-2/3">
          Расчёт стоимости производства мерча
        </h2>
        <Kviz />
      </div>
    </section>
  );
}
