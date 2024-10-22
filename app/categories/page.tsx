import {
  CategoriesList,
  CategoryContent,
  ListBreadcrumbs,
} from "@/components/categoriesPage";
import { FormAndServices } from "@/components/shared";

const Categories = () => {
  return (
    <div>
      <main>
        <ListBreadcrumbs />
        <div className="lg:flex gap-8 lg:mt-10 sm:mt-6 mt-4 max-w-[1559px] m-auto lg:px-5">
          <CategoriesList />
          <CategoryContent />
        </div>
      </main>
      <FormAndServices />
    </div>
  );
};

export default Categories;
