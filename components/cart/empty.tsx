import Link from "next/link";
import { MyButton } from "../shared";

export const Empty = () => {
  return (
    <div className="lg:mt-16 sm:mt-10 mt-8 lg:mb-64 sm:mb-5 mb-20">
      <p className="font-medium sm:text-[24px] text-[20px] text-secondary lg:mb-2 mb-72">
        Корзина пуста, посмотри товар в{" "}
        <span className="text-black">каталоге</span>
      </p>
      <Link href="/categories">
        <MyButton
          value="Каталог"
          className="bg-accent text-white-100 mt-4 lg:w-auto w-full"
        />
      </Link>
    </div>
  );
};
