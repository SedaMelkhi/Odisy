import { Container } from "@/components/shared";
import {
  Banner,
  Categories,
  CategoriesFooter,
  Description,
  Examples,
  Form,
  HeaderHome,
  Products,
  Reviews,
  Services,
  StoreName,
  Text,
} from "@/components/homePage";
import { FC } from "react";
import {
  ExamplesService,
  ExampleType,
  ReviewsService,
  ServicesService,
} from "@/services/homePage";

export type ReviewType = {
  id: number;
  name: string;
  image: string;
  text: string;
};

export type ServiceType = {
  id: number;
  title: string;
  image: string;
  text: string;
};

const Home: FC = async () => {
  const examples: ExampleType[] | null = await ExamplesService.getExamples();
  const reviews: ReviewType[] | null = await ReviewsService.getReviews();
  const services: ServiceType[] | null = await ServicesService.getServices();
  return (
    <div>
      <StoreName />
      <main>
        <HeaderHome />
        <Container className="mt-5">
          <Banner />
          <Categories />
        </Container>
        <Description />
        <Container className="lg:mt-40 mt-20">
          <Text
            text_orange="Ассортимент посадочного материала:"
            text_black="молодые саженцы и взрослые деревья"
            desc="На страницах нашего сайта вы найдете большое количество ассортимента
          по душе"
          />
        </Container>
        <Products />
        {examples && examples.length > 0 && (
          <>
            <Container className="lg:mt-40 mt-20">
              <Text
                text_orange="Примеры работ"
                desc="Компания специализируется на озеленении различных объектов, включая жилые дома, офисы, торговые центры и общественные пространства."
              />
            </Container>
            <Examples examples={examples} />
          </>
        )}
        {reviews && reviews.length > 0 && (
          <>
            <Container className="lg:mt-40 mt-20">
              <Text
                text_orange="Отзывы"
                desc="Отзывы клиентов говорят сами за себя. Наши довольные клиенты делятся своими положительными впечатлениями о наших  продуктах и услугах. Ознакомьтесь с некоторыми из них ниже"
              />
            </Container>
            <Reviews reviews={reviews} />
          </>
        )}
        {services && services.length > 0 && (
          <>
            <Container className="lg:mt-40 mt-20">
              <Text
                text_orange="Услуги"
                desc="Компания предлагает ландшафтные услуги, включая проектирование, озеленение, вертикальное озеленение, уход за растениями и праздничное оформление. Также доступны  услуги по уходу за садом."
              />
            </Container>
            <Services services={services} />
          </>
        )}
        <Container className="lg:mt-40 mt-20">
          <Text text_orange="Каталог" desc="" />
        </Container>
        <CategoriesFooter />
        <div id="form" className="lg:pt-40 pt-20">
          <Container>
            <Form />
          </Container>
        </div>
      </main>
    </div>
  );
};

export default Home;
