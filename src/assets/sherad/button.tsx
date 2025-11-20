const Button = ({
  text,
  handleScroll,
  className,
}: {
  text: string;
  handleScroll: () => void;
  className: string;
}) => {
  return (
    <button
      onClick={handleScroll}
      className={`bg-[#bf2e82] cursor-pointer 2xl:text-[32px] xl:text-2xl lg:text-lg md:text-sm text-[12px] font-bold text-white md:px-10 md:py-6 px-4 py-1 rounded-full shadow-[0px_4px_10px_0px_rgba(255,121,198,1)] inset-shadow-[0px_3px_6px_0px_rgba(221,115,177,1)] ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
