"use client";
import Link from "next/link";
import { Telegram, WA } from "../svg";

type PageProps = { closeMenuMob: () => void };
export const MobileMenu = ({ closeMenuMob }: PageProps) => {
  return (
    <div
      className="h-full py-8 flex flex-col justify-between"
      style={{ height: "calc(100vh - 56px)" }}
    >
      <nav>
        <Link
          href="/"
          className="text-primary font-medium text-2xl tracking-[-0.48px] block"
          onClick={closeMenuMob}
        >
          Главная
        </Link>
        <Link
          href="/categories"
          className="text-primary font-medium text-2xl tracking-[-0.48px] block"
          onClick={closeMenuMob}
        >
          Каталог
        </Link>
      </nav>
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
        <div className="bg-accent rounded-2xl p-6 flex justify-center gap-5 mt-8">
          <WA />
          <Telegram />
        </div>
      </div>
    </div>
  );
};
