import ozon from "../assets/img/ozon.png";
import ya from "../assets/img/ya.png";
import zoo from "../assets/img/zoo.png";
import vu from "../assets/img/vu.png";
import open from "../assets/img/open.png";
import gg from "../assets/img/gg.png";
import gis from "../assets/img/gis.png";
import fm from "../assets/img/fm.png";
const data = [
  { src: ozon },
  { src: gis },
  { src: gg },
  { src: ya },
  { src: open },
  { src: vu },
  { src: zoo },
  { src: fm },
];
export default function Recom() {
  return (
    <section className="main-padding max-w-[1920px] mx-auto">
      <h2 className="md:text-left text-center main-h2-font-size md:mt-6 text-black ">
        Нас рекомендуют лучшие
      </h2>
      <div className="flex flex-wrap justify-between">
        {data.map((i) => (
          <div className="w-[24%]">
            <img
              src={i.src}
              alt=""
              className="select-none pointer-events-none md:mb-3 mb-1"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
