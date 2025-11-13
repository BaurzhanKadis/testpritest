// Компонент
interface RunStringProps {
  color?: string;
}

export default function RunString({ color }: RunStringProps) {
  return (
    <section className={`marquee bg-[${color}] relative z-20 text-white py-2`}>
      <div className="marquee__track">
        <span className="mx-6 main-h2-font-size">мерч под ключ</span>
        <span className="mx-6 main-h2-font-size">мерч под ключ</span>
        <span className="mx-6 main-h2-font-size">мерч под ключ</span>
        <span className="mx-6 main-h2-font-size">мерч под ключ</span>
        <span className="mx-6 main-h2-font-size">мерч под ключ</span>
        <span className="mx-6 main-h2-font-size">мерч под ключ</span>
      </div>
    </section>
  );
}
