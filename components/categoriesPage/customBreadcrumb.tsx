import { FC } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "../ui/breadcrumb";
import { cn } from "@/lib/utils";

type CustomBreadcrumbProps = {
  name: string;
  link: string;
  id: number;
};
export const CustomBreadcrumb: FC<{ items: CustomBreadcrumbProps[] }> = ({
  items,
}) => {
  return (
    <Breadcrumb>
      <BreadcrumbList className="">
        {items.map((item, i) => (
          <BreadcrumbItem key={item.id + i}>
            {item.link ? (
              <BreadcrumbLink
                href={item.link}
                className={cn(
                  "font-medium text-secondary hover:text-primary",
                  items.length - 1 === i && "text-primary"
                )}
              >
                {item.name}
              </BreadcrumbLink>
            ) : (
              <BreadcrumbPage
                className={cn(
                  "font-medium text-secondary hover:text-primary",
                  items.length - 1 === i && "text-primary"
                )}
              >
                {" "}
                {item.name}
              </BreadcrumbPage>
            )}

            {items.length - 1 !== i && <div>/</div>}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
