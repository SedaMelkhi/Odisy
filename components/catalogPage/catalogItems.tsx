import { ProductType } from "@/services/homePage";
import { FC } from "react";
import { NotFoundData } from "./../categoriesPage";
import { Product } from "../shared";

export const CatalogItems: FC<{ products: ProductType[] }> = ({ products }) => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-2 gap-y-5 gap-x-2.5 w-full">
      {products && products.length > 0 ? (
        products.map((product) => (
          <Product product={product} key={product.id} />
        ))
      ) : (
        <NotFoundData />
      )}
    </div>
  );
};
