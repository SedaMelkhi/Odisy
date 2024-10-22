//import { notFound } from "next/navigation";
import { CustomBreadcrumb } from "@/components/categoriesPage";
import { ClientProductActions, Slider } from "@/components/productPage";
import { Container, FormAndServices } from "@/components/shared";
import { ProductType } from "@/services/homePage";
import { ProductService } from "@/services/productPage";

const ProductPage = async ({ params: { id } }: { params: { id: number } }) => {
  const product: ProductType | null = await ProductService.getProduct(id);

  return (
    <div>
      <main>
        {product ? (
          <div className="lg:mt-10 sm:mt-6 mt-4 max-w-[1560px] mx-auto lg:px-5">
            <div className="lg:pl-0 pl-4">
              <CustomBreadcrumb
                items={[
                  { id: 0, name: "Главная", link: "/" },
                  { id: 1, name: "Каталог", link: "/categories" },
                  {
                    id: 2,
                    name: product.subcategory.name,
                    link: `/categories?subCatId=${product.subcategory.id}`,
                  },
                  {
                    id: 3,
                    name: product.subcategory.second_subcategories[0].name,
                    link: `/catalog/${product.subcategory.second_subcategories[0].id}?subCatId=${product.subcategory.id}`,
                  },
                ]}
              />
            </div>
            <div className="flex lg:flex-row flex-col-reverse lg:gap-6 gap-2 mt-10 items-stretch">
              <div className="lg:w-[513px] w-full flex flex-col">
                <Container className="lg:block hidden mt-0">
                  <h1 className="sm:text-[48px] text-3xl font-medium leading-[41px]">
                    {product.name}
                  </h1>
                  <div className="text-secondary text-2xl font-medium lg:mt-[83px] mt-[60px] leading-6">
                    {product.price} ₽
                  </div>
                </Container>
                <Container className="lg:block hidden rotate-180 mt-0 lg:mb-3">
                  {" "}
                </Container>
                <Container height="h-full">
                  <table className="border-separate border-spacing-y-5 mt-[-20px]">
                    <tbody>
                      <tr className="sm:table-row flex flex-col">
                        <th className="text-accent text-left pr-5">
                          Производитель
                        </th>
                        <td className="text-secondary">{product.creator}</td>
                      </tr>
                      <tr className="sm:table-row flex flex-col">
                        <th className="text-accent text-left pr-5">Наличие</th>
                        <td className="text-secondary">Есть в наличии</td>
                      </tr>
                      <tr className="sm:table-row flex flex-col">
                        <th className="text-accent text-left pr-5 align-top">
                          Описание
                        </th>
                        <td className="text-secondary">
                          {product.little_description}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Container>
                <div className="lg:px-0 px-4">
                  <ClientProductActions id={id} />
                </div>

                <Container className="rotate-180 mt-0"> </Container>
              </div>
              <div className="max-w-[997px]">
                <Slider images={product.images} />
              </div>
              <div className="lg:hidden block">
                <Container className="mt-0">
                  <h1 className="sm:text-[48px] text-3xl font-medium leading-[41px]">
                    {product.name}
                  </h1>
                  <div className="text-secondary text-2xl font-medium lg:mt-[83px] mt-[50px] leading-6">
                    {product.price} ₽
                  </div>
                </Container>
                <Container className="rotate-180 mt-0"> </Container>
              </div>
            </div>
            {product.description && (
              <div className="flex lg:flex-row flex-col lg:mt-20 mt-5 gap-6 lg:px-0 px-4">
                <div className="lg:w-[513px]">
                  <h2 className="text-4xl font-medium">Описание</h2>
                </div>
                <p className="lg:w-[514px] text-secondary">
                  {product.description}
                </p>
              </div>
            )}
          </div>
        ) : (
          "товар не найден"
        )}
      </main>
      <FormAndServices className="mt-5" />
    </div>
  );
};

export default ProductPage;
