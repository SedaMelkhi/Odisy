import { FC } from "react";
import { Form, Services, Text } from "../homePage";
import { Container } from "./сontainer";
import { cn } from "@/lib/utils";
import { ServicesService } from "@/services/homePage";
import { ServiceType } from "@/app/page";

export const FormAndServices: FC<{ className?: string }> = async ({
  className,
}) => {
  const services: ServiceType[] | null = await ServicesService.getServices();
  return (
    <>
      {services && services.length > 0 && (
        <>
          <Container className={cn("lg:mt-40 mt-20", className)}>
            <Text
              text_orange="Услуги"
              desc="Компания предлагает ландшафтные услуги, включая проектирование, озеленение, вертикальное озеленение, уход за растениями и праздничное оформление. Также доступны  услуги по уходу за садом."
            />
          </Container>
          <Services services={services} />
        </>
      )}
      <Container className="lg:mt-40 mt-20">
        <Form />
      </Container>
    </>
  );
};
