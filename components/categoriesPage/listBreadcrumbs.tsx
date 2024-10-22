"use client";

import { CustomBreadcrumb } from "@/components/categoriesPage";
import { Container } from "@/components/shared";
import { CategoriesService } from "@/services/homePage";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import qs from "qs";

type CategoryNameType = {
  id: number;
  name: string;
};

export const ListBreadcrumbs = ({ catalog }: { catalog?: boolean }) => {
  const allParams = useParams();
  const [categoryName, setCategoryName] = useState<CategoryNameType | null>(
    null
  );

  useEffect(() => {
    const params = qs.parse(window.location.search.substring(1));
    if (params.subCatId) {
      const res = CategoriesService.getSecondSubCategories(
        params.subCatId + ""
      );
      res.then((data) => {
        setCategoryName(data ? data.subcategory : null);
      });
    } else {
      setCategoryName(null);
    }
  }, [allParams]);

  return (
    <div>
      <Container className="lg:mt-10 sm:mt-6 sm:block hidden" border="none">
        {categoryName ? (
          <CustomBreadcrumb
            items={[
              { id: 146540, name: "Главная", link: "/" },
              { id: 178780, name: "Каталог", link: "/categories" },
              {
                ...(categoryName as unknown as CategoryNameType),
                link: catalog
                  ? `/categories?subCatId=${
                      qs.parse(window.location.search.substring(1)).subCatId
                    }`
                  : "",
              },
            ]}
          />
        ) : (
          <CustomBreadcrumb
            items={[
              { id: 146540, name: "Главная", link: "/" },
              { id: 178780, name: "Каталог", link: "/categories" },
            ]}
          />
        )}
      </Container>
    </div>
  );
};
