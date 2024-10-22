"use client";
import { BannerService, BannerType } from "@/services/homePage";
import { MyButton } from "../shared/button";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Banner = () => {
  const [banner, setBanner] = useState<BannerType[] | null>(null);

  useEffect(() => {
    const data = BannerService.getBanner();
    data.then((res) => setBanner(res));
  }, []);
  return (
    <div>
      <section
        className={
          "lg:h-[500px] sm:h-[400px] h-[190px] bg-cover bg-center bg-no-repeat flex items-center justify-center rounded-2xl bg-[#eee]"
        }
        style={{
          backgroundImage: `url(${banner && banner[0].url})`,
        }}
      >
        <Link href={"#form"}>
          <MyButton
            value="Оставить заявку"
            className="hover:bg-accent hover:text-white-100 sm:flex hidden"
          />
        </Link>
      </section>

      <Link href={"#form"}>
        <MyButton
          value="Оставить заявку"
          className="hover:bg-primary bg-accent text-white-100 mt-1 w-full sm:hidden flex leading-6"
        />
      </Link>
    </div>
  );
};
