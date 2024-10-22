import Image from "next/image";
import { Container } from "../shared";

export const StoreName = () => {
  return (
    <Container border="none">
      <div className="flex justify-between lg:pt-10 pt-4">
        <div className="flex gap-6 items-center">
          <div className="font-medium text-accent lg:text-7xl sm:text-4xl text-[9.5vw] tracking-[-2px] leading-8">
            Jemmes <span className="md:hidden inline">Garden</span>
          </div>
          <Image
            src="umbrella.svg"
            alt=""
            width={76}
            height={73}
            className="h-auto lg:w-[76px] w-11"
          />
        </div>
        <div className="font-medium text-accent lg:text-7xl text-4xl md:block hidden tracking-[-2px] leading-8">
          Garden
        </div>
      </div>
    </Container>
  );
};
