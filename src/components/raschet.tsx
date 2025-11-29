// import React from "react";
import Kviz from "../assets/sherad/kviz";

export default function Raschet() {
  return (
    <section className="main-padding max-w-[1920px] mx-auto">
      <div className="flex justify-center flex-col items-center">
        <h2 className="main-h2-font-size md:border-4 border-2 border-[#bf2e82] rounded-full py-2.5 text-center w-auto sm:w-2/3">
          Расчёт стоимости производсвта мерча
        </h2>
        <Kviz />
      </div>
    </section>
  );
}
