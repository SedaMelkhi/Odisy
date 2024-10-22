import Link from "next/link";
import { FC } from "react";

export const Nav: FC = () => {
  return (
    <nav className="lg:flex hidden gap-4 w-[500px] align-center">
      <div className="font-medium text-secondary hover:text-primary duration-200 transition-colors">
        <Link href="/">Главная</Link>
      </div>
      <div className="font-medium text-secondary hover:text-primary duration-200 transition-colors">
        <Link href="/categories">Каталог</Link>
      </div>
    </nav>
  );
};
