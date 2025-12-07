import { useState } from "react";

// Импорты изображений
import audienceImg from "../../assets/img/audience.png";
import smileImg from "../../assets/img/smile.png";
import productImg from "../../assets/img/product.png";
import quantityImg from "../../assets/img/quantity.png";
import logotipImg from "../../assets/img/logotip.png";
import timeImg from "../../assets/img/time.png";

// Типы для квиза
interface QuizStep {
  title: string;
  subtitle: string;
  options?: string[];
  type: "multiple" | "single" | "contact";
  key?: keyof QuizAnswers;
  img: string;
}

interface QuizAnswers {
  audience: string[];
  tasks: string[];
  products: string[];
  quantity: string;
  design: string;
  urgency: string;
  phone: string;
  email: string;
}

export default function Kviz() {
  const [currentStep, setCurrentStep] = useState(0);

  // Объединяем все состояния в один объект
  const [answers, setAnswers] = useState<QuizAnswers>({
    audience: [],
    tasks: [],
    products: [],
    quantity: "",
    design: "",
    urgency: "",
    phone: "",
    email: "",
  });

  // Состояние для кастомных вводов
  const [customInputs, setCustomInputs] = useState<{
    audience: string;
    tasks: string;
    products: string;
  }>({
    audience: "",
    tasks: "",
    products: "",
  });

  // Все опции в одном месте
  const quizData: Record<number, QuizStep> = {
    0: {
      title: "Кому предназначается мерч?",
      subtitle: "(Можно выбрать несколько из списка)",
      options: [
        "Сотрудники компании",
        "Подарки для клиентов / партнёров",
        "Участники мероприятия",
        "Продажа (свой бренд)",
        "Другое",
      ],
      type: "multiple",
      key: "audience",
      img: audienceImg,
    },
    1: {
      title: "Какую задачу должен решать мерч?",
      subtitle: "(Можно выбрать несколько из списка)",
      options: [
        "Повышение лояльности",
        "Сплочение коллектива",
        "Увеличение узнаваемости бренда",
        "Коммерческая продажа",
        "Просто нужен красивый мерч :)",
        "Другое",
      ],
      type: "multiple",
      key: "tasks",
      img: smileImg,
    },
    2: {
      title: "Какие изделия вас интересуют?",
      subtitle: "(Можно выбрать несколько из списка)",
      options: [
        "Футболки/Поло",
        "Худи / Свитшоты",
        "Шопперы",
        "Головные уборы",
        "Кружки, термосы, блокноты и т.п.",
        "Другое",
      ],
      type: "multiple",
      key: "products",
      img: productImg,
    },
    3: {
      title: "Примерное количество изделий в заказе?",
      subtitle: "(Только один выбор)",
      options: [
        "10 штук",
        "11–49 штук",
        "50–99 штук",
        "100–499 штук",
        "500+ штук",
      ],
      type: "single",
      key: "quantity",
      img: quantityImg,
    },
    4: {
      title: "У вас уже есть готовый дизайн / логотип?",
      subtitle: "(Только один выбор)",
      options: [
        "Да, всё готово",
        "Есть идеи, нужен дизайнер",
        "Нет, нужна помощь с разработкой",
      ],
      type: "single",
      key: "design",
      img: logotipImg,
    },
    5: {
      title: "Как срочно нужно получить заказ?",
      subtitle: "(Только один выбор)",
      options: [
        "Не срочно (в запасе более 30 дней)",
        "Время есть (более 14 дней)",
        "Уже пора (до сдачи менее 10 дней)",
        "Уже горит (менее 5 дней)",
        "Пожар! (1-2 дня на исполнение)",
      ],
      type: "single",
      key: "urgency",
      img: timeImg,
    },
    6: {
      title: "Оставьте контактные данные",
      subtitle: "Мы свяжемся с вами для обсуждения деталей",
      type: "contact",
      img: timeImg,
    },
  };

  // Универсальный обработчик для всех типов вопросов
  const handleOptionChange = (option: string) => {
    const currentData = quizData[currentStep];
    if (!currentData.key) return;
    const key = currentData.key;

    setAnswers((prev) => {
      if (currentData.type === "multiple") {
        return {
          ...prev,
          [key]: (prev[key] as string[]).includes(option)
            ? (prev[key] as string[]).filter((item: string) => item !== option)
            : [...(prev[key] as string[]), option],
        };
      } else {
        return {
          ...prev,
          [key]: option,
        };
      }
    });
  };

  // Обработчик для кастомного ввода
  const handleCustomInputChange = (value: string) => {
    const currentData = quizData[currentStep];
    if (!currentData.key) return;
    const key = currentData.key as keyof typeof customInputs;

    setCustomInputs((prev) => ({
      ...prev,
      [key]: value,
    }));

    // Обновляем ответы, заменяя "Другое" на кастомный ввод
    setAnswers((prev) => {
      if (currentData.type === "multiple") {
        const filteredAnswers = (prev[key] as string[]).filter(
          (item: string) => item !== "Другое" && !item.startsWith("custom_")
        );
        return {
          ...prev,
          [key]: value
            ? [...filteredAnswers, `custom_${value}`]
            : filteredAnswers,
        };
      } else {
        return {
          ...prev,
          [key]: value || "",
        };
      }
    });
  };

  // Обработчик для полей контактов
  const handleContactChange = (field: "phone" | "email", value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNext = () => setCurrentStep((prev) => prev + 1);
  const handleBack = () => setCurrentStep((prev) => prev - 1);

  // Универсальная проверка валидности
  const isStepValid = () => {
    const currentData = quizData[currentStep];

    // Для шага контактов проверяем phone и email
    if (currentData.type === "contact") {
      const phoneValid = answers.phone.trim() !== "";
      const emailValid =
        answers.email.trim() !== "" &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answers.email);
      return phoneValid && emailValid;
    }

    if (!currentData.key) return false;
    const value = answers[currentData.key];
    const hasValidAnswer =
      currentData.type === "multiple" ? value.length > 0 : value !== "";

    // Если выбрано "Другое", проверяем что есть кастомный ввод
    if (value.includes && value.includes("Другое")) {
      const customValue =
        customInputs[currentData.key as keyof typeof customInputs];
      return hasValidAnswer && customValue.trim() !== "";
    }

    return hasValidAnswer;
  };

  const handleFinish = () => {
    // Очищаем результаты от префиксов custom_ и убираем "Другое"
    const cleanAnswers = {
      ...answers,
      audience: answers.audience
        .filter((item) => item !== "Другое")
        .map((item) =>
          item.startsWith("custom_") ? item.replace("custom_", "") : item
        ),
      tasks: answers.tasks
        .filter((item) => item !== "Другое")
        .map((item) =>
          item.startsWith("custom_") ? item.replace("custom_", "") : item
        ),
      products: answers.products
        .filter((item) => item !== "Другое")
        .map((item) =>
          item.startsWith("custom_") ? item.replace("custom_", "") : item
        ),
      phone: answers.phone.trim(),
      email: answers.email.trim(),
    };

    console.log("Результаты квиза:", cleanAnswers);
  };

  const currentData = quizData[currentStep];
  return (
    // <div className=" md:p-5 p-2 md:border-4 border-2 border-[#bf2e82] rounded-2xl">
    <div
      id="kviz__cards"
      className=" md:p-10 p-2 md:border-4 border-2 border-[#bf2e82] rounded-2xl lg:w-[80%] w-full relative"
    >
      {currentStep <= 6 && (
        <div
          key={currentStep}
          className="kviz__card relative kviz__card-animated overflow-hidden"
        >
          <h2 className="main-h2-font-size mb-0">{currentData.title}</h2>
          <p className="font-bold 2xl:text-4xl xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm text-[#8d8d8d] md:mb-20 mb-10">
            {currentData.subtitle}
          </p>
          {currentData.type === "contact" ? (
            // Форма для контактов
            <div className="flex flex-col gap-6 mb-8 p-1">
              <div className="flex flex-col gap-2 w-[70%]">
                <label className="2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs font-bold text-black">
                  Номер телефона
                </label>
                <input
                  type="tel"
                  placeholder="+7 (999) 123-45-67"
                  value={answers.phone}
                  onChange={(e) => handleContactChange("phone", e.target.value)}
                  className="px-4 md:py-3 py-2 rounded-lg bg-[#d9d9d9] 2xl:text-4xl xl:text-2xl lg:text-xl md:text-lg sm:text-base text-xs font-bold text-black placeholder-[#8d8d8d] focus:outline-none focus:ring-2 focus:ring-[#d01485] focus:bg-white transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2 w-[70%]">
                <label className="2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs font-bold text-black">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="example@mail.com"
                  value={answers.email}
                  onChange={(e) => handleContactChange("email", e.target.value)}
                  className="px-4 md:py-3 py-2 rounded-lg bg-[#d9d9d9] 2xl:text-4xl xl:text-2xl lg:text-xl md:text-lg sm:text-base text-xs font-bold text-black placeholder-[#8d8d8d] focus:outline-none focus:ring-2 focus:ring-[#d01485] focus:bg-white transition-colors"
                />
              </div>
            </div>
          ) : (
            (() => {
              if (!currentData.key) return null;
              const key = currentData.key;
              return (
                <div className="flex flex-col gap-4 mb-8">
                  {currentData.options?.map((option: string, index: number) => (
                    <div key={index}>
                      {option === "Другое" ? (
                        // Специальный блок для "Другое" с инпутом
                        <div className="flex items-center lg:gap-12 gap-4">
                          <input
                            type={
                              currentData.type === "multiple"
                                ? "checkbox"
                                : "radio"
                            }
                            name={`step-${currentStep}`}
                            checked={
                              currentData.type === "multiple"
                                ? answers[key].includes("Другое")
                                : answers[key] === "Другое"
                            }
                            onChange={() => handleOptionChange("Другое")}
                            className="md:w-10 md:h-10 w-6 h-6 cursor-pointer appearance-none relative rounded-lg bg-[#d9d9d9] checked:bg-[#d01485] checked:border-[#d01485] checked:after:content-['✓'] checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 checked:after:text-white checked:after:text-3xl checked:after:font-bold"
                          />
                          <input
                            type="text"
                            placeholder="Другое"
                            value={
                              customInputs[key as keyof typeof customInputs] ||
                              ""
                            }
                            onChange={(e) =>
                              handleCustomInputChange(e.target.value)
                            }
                            className=" px-4 md:py-3 py-2 rounded-lg bg-[#d9d9d9] 2xl:text-4xl xl:text-2xl lg:text-xl md:text-lg sm:text-base text-xs font-bold text-black placeholder-[#8d8d8d] focus:outline-none focus:ring-2 focus:ring-[#d01485] focus:bg-white transition-colors"
                          />
                        </div>
                      ) : (
                        // Обычные опции
                        <label className="flex items-center lg:gap-12 gap-4 cursor-pointer rounded-lg transition-colors duration-200 hover:bg-[#f8f9fa]">
                          <input
                            type={
                              currentData.type === "multiple"
                                ? "checkbox"
                                : "radio"
                            }
                            name={`step-${currentStep}`}
                            checked={
                              currentData.type === "multiple"
                                ? answers[key].includes(option)
                                : answers[key] === option
                            }
                            onChange={() => handleOptionChange(option)}
                            className="md:w-10 md:h-10 w-6 h-6 cursor-pointer appearance-none relative rounded-lg bg-[#d9d9d9] checked:bg-[#d01485] checked:border-[#d01485] checked:after:content-['✓'] checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 checked:after:text-white checked:after:text-3xl checked:after:font-bold"
                          />
                          <span className="2xl:text-4xl xl:text-2xl lg:text-xl md:text-lg sm:text-base text-xs font-bold text-black">
                            {option}
                          </span>
                        </label>
                      )}
                    </div>
                  ))}
                </div>
              );
            })()
          )}
          <div className="z-0 kviz__card-decoration absolute lg:top-[8%] top-auto lg:bottom-0 bottom-[10%] w-[40%] right-[2%]">
            <div className="kviz__heart-3d">
              <img
                src={currentData.img}
                alt="step"
                className="drop-shadow-[10px_50px_7px_rgba(0,0,0,0.5)]"
              />
            </div>
          </div>
          <div className="flex relative gap-3 md:justify-end justify-left z-10">
            {currentStep > 0 && (
              <button
                className="bg-[#f0f0f0] text-[#666] border-none rounded-xl md:px-6 px-4 md:py-3 py-2 md:text-base text-sm font-semibold cursor-pointer transition-all duration-200 hover:bg-[#e0e0e0] hover:-translate-y-0.5"
                onClick={handleBack}
              >
                Назад
              </button>
            )}
            {currentStep < 6 ? (
              <button
                className="bg-gradient-to-r from-[#d01485] to-[#e07be0] text-white border-none rounded-full md:px-15 px-10 md:py-3 py-2 2xl:text-4xl xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm font-bold text-center cursor-pointer transition-all duration-200 hover:not-disabled:-translate-y-0.5 hover:not-disabled:shadow-[0_6px_20px_rgba(208,20,133,0.3)] disabled:bg-[#ccc] disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                onClick={handleNext}
                disabled={!isStepValid()}
              >
                Далее
              </button>
            ) : (
              <button
                className="bg-gradient-to-r from-[#d01485] to-[#e07be0] text-white border-none rounded-full md:px-15 px-10 md:py-3 py-2 2xl:text-4xl xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm font-bold text-center cursor-pointer transition-all duration-200 hover:not-disabled:-translate-y-0.5 hover:not-disabled:shadow-[0_6px_20px_rgba(208,20,133,0.3)] disabled:bg-[#ccc] disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                onClick={handleFinish}
                disabled={!isStepValid()}
              >
                Завершить
              </button>
            )}
          </div>
        </div>
      )}
    </div>
    // </div>
  );
}
