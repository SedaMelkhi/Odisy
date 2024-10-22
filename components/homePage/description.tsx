import Image from "next/image";
import { Container } from "../shared";

export const Description = () => {
  return (
    <Container border="none" className="mt-5">
      <section className="flex lg:mt-40 mt-20">
        <div className="w-[50%] lg:flex hidden justify-center items-center">
          <Image
            src={"/twoUmbrella.svg"}
            alt="logo"
            height={136}
            width={100}
            className="w-auto h-auto"
          />
        </div>
        <div className="lg:w-[50%]">
          <h2 className="sm:text-2rem text-2xl font-medium sm:leading-[35px] leading-[26px] tracking-[-0.48px]">
            Компания <span className="text-accent">Jemmes Garden </span>
            предлагает полный спектр услуг по озеленению и{" "}
            <span className="text-secondary">благоустройству территорий.</span>
          </h2>
          <div className="lg:hidden flex justify-center items-center sm:my-10 my-8">
            <Image
              src={"/twoUmbrella.svg"}
              alt="logo"
              height={136}
              width={100}
              className="w-auto h-auto"
            />
          </div>
          <div className="flex sm:flex-row flex-col sm:gap-6 gap-4 leading-[18px] mt-10">
            <div>
              <p>
                Мы специализируемся на ландшафтном дизайне, архитектурном
                проектировании, системахавтоматического полива, дренажных
                системах и газонной траве.
              </p>
              <p className="mt-3">
                Наши опытные специалисты разработают индивидуальный проект,
                учитывая особенности вашего участка и ваши пожелания. Мы
                предоставляем гарантию на материалы и работы до 5 лет и
                обеспечиваем авторскийнадзор после сдачи проекта.
              </p>
            </div>
            <div>
              <p>
                В нашей команде работают профессионалы с опытом работы более 15
                лет. Мы используем только качественные материалы и
                современныетехнологии, чтобы создать для вас красивый и
                функциональный сад.
              </p>
              <p className="mt-3">
                Если вы хотите узнать больше о наших услугах или рассчитать
                стоимость проекта, свяжитесь с нами по телефону или оставьте
                заявку.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};
