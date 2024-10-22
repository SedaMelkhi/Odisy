import { Inst, Telegram, WA } from "../svg";

export const Networks = () => {
  return (
    <div className="flex md:gap-2.5 gap-2">
      <Inst className="md:w-[60px] w-10" />
      <Telegram type="black" className="md:w-[60px] w-10" />
      <WA type="black" className="md:w-[60px] w-10" />
    </div>
  );
};
