import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const Logo: FC = () => {
  return (
    <Link href={"/"} className="flex-shrink-0">
      <Image
        src={"/logo.svg"}
        alt="logo"
        width={120}
        height={33}
        className="lg:w-[120px] w-16 h-auto"
      />
    </Link>
  );
};
