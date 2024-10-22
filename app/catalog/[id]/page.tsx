import { CatalogContent } from "@/components/catalogPage";
import { CategoriesList, ListBreadcrumbs } from "@/components/categoriesPage";
import { Container, Filters, FormAndServices } from "@/components/shared";
import { CategoriesService, CategoryType } from "@/services/homePage";

const Catalog = async ({ params: { id } }: { params: { id: string } }) => {
  const categories: CategoryType[] = await CategoriesService.getCategories();
  return (
    <div>
      <main>
        <Container className="lg:mt-10 sm:mt-6 sm:block hidden" border="none">
          <ListBreadcrumbs catalog={true} />
        </Container>
        <div className="lg:flex gap-8 lg:mt-10 sm:mt-6 mt-4 max-w-[1559px] m-auto lg:px-5">
          {categories.length > 0 ? (
            <>
              <CategoriesList />
              <div className="w-full">
                <div className="lg:px-0 px-4">
                  <Filters className="mb-5" />
                </div>
                <CatalogContent id={id} />
              </div>
            </>
          ) : (
            <div className="text-center w-full pt-10">Данных нет</div>
          )}
        </div>
      </main>
      <FormAndServices />
    </div>
  );
};

export default Catalog;
