import { Container } from "../shared";
import { Networks } from "./networks";

export const HeaderHome = () => {
  return (
    <Container border="none" className="mt-5">
      <header>
        <div className="flex sm:items-center justify-between lg:pt-60 sm:pt-36 pt-24 sm:gap-10 gap-4 sm:flex-row flex-col">
          <div className="text-secondary md:text-2rem text-2xl font-medium">
            Создайте свой зелёный рай{" "}
            <span className="text-primary">с нами</span>.
          </div>
          <Networks />
        </div>
      </header>
    </Container>
  );
};
