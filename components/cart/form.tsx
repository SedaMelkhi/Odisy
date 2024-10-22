import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { MyButton } from "../shared/button";
import { Checkbox } from "../svg";
import { cn } from "@/lib/utils";
import { OrderService } from "@/services";
import Link from "next/link";
import Image from "next/image";

type FormType = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const formatPhoneNumber = (value: string) => {
  const phone = value.replace(/\D/g, ""); // Удаляем все нецифровые символы
  const phoneLength = phone.length;

  if (phoneLength < 2) return `+${phone}`;
  if (phoneLength < 5) {
    return `+${phone.slice(0, 1)} (${phone.slice(1, 4)}`;
  }
  if (phoneLength < 8) {
    return `+${phone.slice(0, 1)} (${phone.slice(1, 4)}) ${phone.slice(4, 7)}`;
  }
  if (phoneLength < 10) {
    return `+${phone.slice(0, 1)} (${phone.slice(1, 4)}) ${phone.slice(
      4,
      7
    )}-${phone.slice(7, 9)}`;
  }
  return `+${phone.slice(0, 1)} (${phone.slice(1, 4)}) ${phone.slice(
    4,
    7
  )}-${phone.slice(7, 9)}-${phone.slice(9, 11)}`;
};

export const Form: FC<FormType> = ({ setIsOpen }) => {
  const [order, setOrder] = useState({
    name: "",
    comment: "",
    phone: "",
    cart: [],
  });
  const [checkbox, setCheckbox] = useState(false);
  const [err, setErr] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setOrder((prev) => ({
      ...prev,
      cart: localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart") as string)
        : [],
    }));
  }, []);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhone = formatPhoneNumber(e.target.value);
    setOrder({ ...order, phone: formattedPhone });
  };

  const sendData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!(order.name && order.phone)) {
      setErr(true);
    } else {
      setErr(false);
      OrderService.postOrder(order).then((res) => {
        setMessage(res.message);
        localStorage.setItem("cart", JSON.stringify([]));
        window.dispatchEvent(new Event("storage"));
      });
    }
  };

  return (
    <div className="relative sm:p-10 p-4">
      {message !== "" && (
        <div className="absolute top-0 left-0 rounded-2xl bg-primary h-full w-full flex flex-col justify-center items-center sm:p-10 p-4">
          <h1 className="lg:text-[72px] lg:leading-[72px] text-4xl leading-10 font-medium text-center mb-4">
            Заявка принята
          </h1>
          <p className="text-base max-w-[250px] text-center">
            Ваша заявка принята. Скоро наш менеджер свяжется с вами.
          </p>
          <Link href="/categories" className="w-full">
            <MyButton
              value="Открыть каталог"
              className="w-full  text-white-100 text-base hover:bg-white-100 hover:text-accent sm:mt-7 mt-4 bg-accent"
            />
          </Link>
          <div className="w-full" onClick={() => setIsOpen(false)}>
            <MyButton
              value="Закрыть"
              className="w-full  text-white-100 text-base hover:bg-white-100 hover:text-accent mt-2 bg-transparent border-white-30 border"
            />
          </div>
        </div>
      )}
      <h2 className="lg:hidden sm:text-[72px] text-4xl font-medium mb-2">
        Оставьте заявку
      </h2>
      <p className="lg:hidden sm:text-[16px] text-xs mb-8 max-w-[322px]">
        Наши менеджеры свяжутся с вами и ответят на все ваши вопросы
      </p>
      <div className="flex items-start justify-between">
        <h2 className="lg:block hidden text-2xl max-w-[550px] leading-6 mb-6">
          Заполните форму, наши <span className="text-accent">менеджеры</span>{" "}
          свяжутся с Вами в <span className="text-accent">кратчайший срок</span>
        </h2>
        <div
          className="lg:static absolute top-3 right-3 cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <Image src="/close2.svg" alt="" width={24} height={24} />
        </div>
      </div>

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
        <div
          className={cn(
            "pointer-events-none w-full",
            checkbox && "pointer-events-auto"
          )}
        >
          <MyButton
            value="Отправить заявку"
            className={cn(
              "lg:w-auto w-full  text-white-100 text-base hover:bg-white-100 hover:text-accent sm:mt-7 mt-4 bg-accent-opacity duration-200 transition-colors",
              checkbox && "bg-accent"
            )}
          />
        </div>
        <div
          className="lg:hidden block w-full"
          onClick={() => setIsOpen(false)}
        >
          <MyButton
            value="Закрыть"
            className="lg:w-auto w-full  text-white-100 text-base hover:bg-white-100 hover:text-accent sm:mt-7 bg-transparent border-white-30 border"
          />
        </div>
      </form>
    </div>
  );
};
