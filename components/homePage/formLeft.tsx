import { FC } from "react";
import { Telegram, WA } from "../svg";

export const FormLeft: FC = () => {
  return (
    <div className="lg:flex hidden justify-between flex-col items-start w-1/2 rounded-2xl bg-accent p-10 bg-[url('/bg-umbrella.svg')] bg-no-repeat bg-right-bottom ">
      <div>
        <h2 className="text-7xl font-medium mb-5 tracking-[-4.32px]">
          Оставьте заявку
        </h2>
        <p className="leading-[18px] w-80">
          Наши менеджеры свяжутся с вами и ответят на все ваши вопросы
        </p>
      </div>
      <div className="p-6 bg-white-5 rounded-2xl">
        <h4 className="text-2xl font-medium tracking-[-0.48px] mb-7 leading-5">
          Мессенджеры
        </h4>
        <div className="flex gap-5 px-3">
          <WA />
          <Telegram />
        </div>
      </div>
    </div>
  );
};
