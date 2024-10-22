import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Telegram, WA } from "../svg";

export const Footer: FC = () => {
  return (
    <footer>
      <div className="flex sm:flex-row flex-col lg:p-5 pb-4 justify-between xl:w-3/4 w-full xl:ml-[120px] ml-0">
        <div className="lg:pt-14 lg:w-full sm:w-1/2 sm:block flex justify-center sm:mb-0 mb-10">
          <Image
            src="/logo-footer.svg"
            alt="logo"
            width={120}
            height={169}
            className="w-auto h-auto"
          />
        </div>
        <div className="lg:w-full sm:w-1/2">
          <h4 className="text-accent font-medium text-2xl tracking-[-0.48px] mb-2">
            Навигации
          </h4>
          <ul className="flex flex-col gap-2">
            <Link
              href="/"
              className="text-secondary font-medium tracking-[-0.32px]"
            >
              Главная
            </Link>
            <Link
              href={"/categories"}
              className="text-secondary font-medium tracking-[-0.32px]"
            >
              Каталог
            </Link>
          </ul>
        </div>
        <div>
          <h4 className="text-accent font-medium text-2xl tracking-[-0.48px] mb-2">
            Контакты
          </h4>
          <ul className="flex flex-col gap-2">
            <li className="text-secondary font-medium tracking-[-0.32px]">
              <Link href="https://yandex.eu/maps/-/CDHqf882">
                Москва, посёлок Внуково, 52, поселение Внуковское
              </Link>
            </li>
            <li className="text-accent">
              <a href="tel:+79932577807">+7 (993) 257-78-07</a>
            </li>
            <li className="text-accent">
              <a href="tel:+79671707307">+7 (967) 170-73-07</a>
            </li>
            <li className="text-secondary font-medium tracking-[-0.32px]">
              <a href="mailto:info@sadnazakaz.ru">info@sadnazakaz.ru</a>
            </li>
          </ul>
          <div className="bg-accent rounded-2xl p-6 sm:inline-flex flex justify-center gap-5 mt-8">
            <WA />
            <Telegram />
          </div>
        </div>
      </div>
    </footer>
  );
};
