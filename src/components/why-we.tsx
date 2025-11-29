import portfel from "../assets/img/portfel.png";

const data = [
  { title: "100%", p: "юридическая гарантия качества" },
  { title: "Уникальные", p: "условия для наших постоянных клиентов" },
  { title: "Договор", p: "Работа с ИП или ООО по договору" },
  { title: "Информирование", p: "о статусе вашего заказа" },
  {
    title: "Тиражи",
    p: "Наши производственные мощности позволяют брать тиражи от 100шт.",
  },
  { title: "Сроки", p: "Строгое соблюдение сроков выполнения заказа" },
  { title: "Бесплатный образец", p: "на этапе идеи" },
];

export default function WhyWe() {
  return (
    <section className="main-padding pb-0 lg:mt-[10%] max-w-[1920px] mx-auto">
      <h2 className=" main-h2-font-size text-black">Почему именно мы?</h2>
      <div className=" flex flex-row flex-wrap justify-between md:justify-normal md:gap-[1%] gap-3 overflow-hidden">
        {data.map((i) => (
          <div className=" inline-flex flex-col justify-end md:h-48 h-36 md:w-[24%] w-[48%] border-2 border-[#bf2e82] md:p-5 p-2 2xl:rounded-4xl xl:rounded-3xl lg:rounded-2xl md:rounded-xl rounded-lg md:mb-5 mb-0">
            <p className="font-bold text-black 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-sm">
              {i.title}
            </p>
            <p className="text-black font-medium 2xl:text-2xl xl:text-xl lg:text-lg md:text-sm text-xs">
              {i.p}
            </p>
          </div>
        ))}
        <div className=" md:h-60 h-44 relative md:w-[16%] w-[47%] inline-block 2xl:translate-x-30 xl:translate-x-16 md:translate-x-10 translate-x-0 translate-y-7 md:rotate-12 rotate-[17deg]">
          <img src={portfel} alt="portfel" className="block" />
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
