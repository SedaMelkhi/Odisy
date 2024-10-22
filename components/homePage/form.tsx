import { FC } from "react";
import { FormLeft } from "./formLeft";
import { FormRight } from "./formRight";

export const Form: FC = () => {
  return (
    <section className="flex gap-2.5 text-white-100">
      <FormLeft />
      <FormRight />
    </section>
  );
};
