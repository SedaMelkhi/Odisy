"use client";
import { FC, useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { MyButton } from "../shared/button";
import { Checkbox, Telegram, WA } from "../svg";
import { cn } from "@/lib/utils";
import { FeedbackService } from "@/services";
import { formatPhoneNumber } from "../cart/form";

export const FormRight: FC = () => {
  const [order, setOrder] = useState({
    name: "",
    comment: "",
    phone: "",
    cart: [],
  });
  const [checkbox, setCheckbox] = useState(false);
  const [isSend, setIsSend] = useState("");
  const [err, setErr] = useState(false);
  const sendData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!(order.name && order.phone)) {
      setErr(true);
    } else {
      setErr(false);
      FeedbackService.postFeedback(order).then(
        (data) => data && setIsSend(data)
      );
    }
  };
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhone = formatPhoneNumber(e.target.value);
    setOrder({ ...order, phone: formattedPhone });
  };

  return (
    <div
      className=" relative lg:w-1/2 w-full rounded-2xl sm:p-10 p-4 bg-no-repeat text-white-100 lg:mt-0 mt-2 bg-primary lg:bg-none bg-[url('/bg-umbrella.svg')]"
      style={{ backgroundPosition: "105% 120%" }}
    >
      {isSend !== "" && (
        <div className="h-full w-full bg-black absolute top-0 left-0 rounded-2xl flex flex-col items-center justify-center z-[2]">
          <h3 className="lg:block hidden text-2xl tracking-[-0.48px] font-medium mb-5">
            Ваша заявка отправлена
          </h3>
          <div onClick={() => setIsSend("")}>
            <MyButton
              value="Отправить повторно"
              className={cn(
                "lg:w-auto w-full  text-white-100 text-base hover:bg-white-100 hover:text-accent sm:mt-7 mt-4 bg-accent-opacity duration-200 transition-colors",
                checkbox && "bg-accent"
              )}
            />
          </div>
        </div>
      )}

      <div className="lg:hidden block sm:mb-8 mb-6">
        <h2 className="sm:text-7xl text-4xl font-medium sm:mb-5 mb-2 sm:tracking-[-4.32px] tracking-[-2px]">
          Оставьте заявку
        </h2>
        <p className="sm:text-base text-xs sm:leading-[18px] leading-[14px] max-w-80">
          Наши менеджеры свяжутся с вами и ответят на все ваши вопросы
        </p>
      </div>
      <h3 className="lg:block hidden text-2xl tracking-[-0.48px] font-medium mb-5">
        Чтобы оставить заявку, заполните форму
      </h3>
      <form
        className="flex flex-col sm:gap-2.5 gap-2 items-start"
        onSubmit={sendData}
      >
        <Input
          className={cn(
            "w-full sm:rounded-[20px] rounded-[8px] bg-white-5 border-0 sm:h-[66px] h-[28px] p-6 placeholder:text-white-20 sm:text-base text-xs duration-200 transition-color border-[#000000]",
            err && "border-red-600 border"
          )}
          placeholder="Имя *"
          type="text"
          value={order.name}
          onChange={(e) => setOrder({ ...order, name: e.target.value })}
        />
        <Input
          className={cn(
            "w-full sm:rounded-[20px] rounded-[8px] bg-white-5 border-0 sm:h-[66px] h-[28px] p-6 placeholder:text-white-20 sm:text-base text-xs duration-200 transition-color border-[#000000]",
            err && "border-red-600 border"
          )}
          placeholder="Телефон *"
          type="phone"
          value={order.phone}
          onChange={handlePhoneChange}
        />
        <Textarea
          className="w-full sm:rounded-[20px] rounded-[8px] bg-white-5 border-0 sm:h-[229px] h-[134px] p-6 placeholder:text-white-20 sm:text-base text-xs resize-none"
          placeholder="Комментарий"
          value={order.comment}
          onChange={(e) => setOrder({ ...order, comment: e.target.value })}
        />
        <label className="flex gap-2 items-center mt-2.5">
          <Input
            className="peer/agree w-6 h-6 hidden"
            type="checkbox"
            id="agree"
            checked={checkbox}
            onChange={(e) => setCheckbox(e.target.checked)}
          />
          <Checkbox />
          <div className="sm:text-xl text-xs">
            Согласие на обработку{" "}
            <span className="text-accent ">персональных данных</span>
          </div>
        </label>
        <MyButton
          value="Отправить заявку"
          className={cn(
            "lg:w-auto w-full  text-white-100 text-base hover:bg-white-100 hover:text-accent sm:mt-7 mt-4 bg-accent-opacity duration-200 transition-colors",
            checkbox && "bg-accent"
          )}
        />

        <div className="flex gap-5 px-3 mt-8 lg:hidden sm:justify-start justify-center w-full">
          <WA type="orange" />
          <Telegram type="orange" />
        </div>
      </form>
    </div>
  );
};
