import axios from "axios";
import { API_URL } from "..";
export type ExampleType = { id: number; url: string };

export type CategoryType = {
  id: number;
  name: string;
  icon: string;
  main: boolean;
  image: string;
  subcategories:
    | {
        id: number;
        name: string;
        second_subcategories:
          | {
              id: number;
              image: string;
              name: string;
            }[]
          | [];
      }[]
    | [];
};

export type ProductType = {
  id: number;
  name: string;
  primary_image: string;
  images: {
    image: string;
    is_primary: boolean;
  }[];
  old_price: number;
  price: number;
  new: boolean;
  promotion: boolean;
  bestseller: boolean;
  creator: string;
  manual_title: string;
  little_description: string;
  description: string;
  recommendation: boolean;
  pub_date: string;
  subcategory: {
    id: number;
    name: string;
    second_subcategories: {
      id: number;
      image: string;
      name: string;
    }[];
  };
};

export type BannerType = {
  id: number;
  url: string;
};

export type ReviewType = {
  id: number;
  name: string;
  image: string;
  text: string;
};
export type ServicesType = {
  id: number;
  title: string;
  image: string;
  text: string;
};

export type SubcategoryType = {
  id: number;
  name: string;
};
axios.defaults.baseURL = API_URL;

export const ExamplesService = {
  async getExamples(): Promise<ExampleType[] | null> {
    try {
      const { data } = await axios.get("/examples/");
      console.log("примеры работ: ", data);
      return data;
    } catch (error) {
      console.log("примеры работ: ", error);
      return null;
    }
  },
};

export const CategoriesService = {
  async getCategories(main?: boolean): Promise<CategoryType[]> {
    try {
      const { data } = await axios.get("/categories", { params: { main } });
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  },
  async getSubCategories(category: number): Promise<SubcategoryType[] | null> {
    try {
      const { data } = await axios.get(`/categories/${category}/subcategories`);
      return data.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  async getSecondSubCategories(id: string): Promise<{
    data: CategoryType[];
    subcategory: {
      id: number;
      name: string;
    };
  } | null> {
    try {
      const { data } = await axios.get(
        `subcategories/${id}/second_subcategories/`
      );
      return data;
    } catch (error) {
      return null;
    }
  },
};

export const ProductsService = {
  async getProducts({
    activeFilter: type,
    limit,
    page,
    subcategory: second_subcategory,
  }: {
    activeFilter?: number | string;
    limit?: number;
    page?: number;
    subcategory?: string;
  }): Promise<
    { data: ProductType[]; next: string } | { data: []; next: null }
  > {
    try {
      const params = { type, limit, page, second_subcategory };
      const { data } = await axios.get("/products", { params });
      return data;
    } catch (error) {
      return { data: [], next: null };
    }
  },
};

export const BannerService = {
  async getBanner(): Promise<BannerType[] | null> {
    try {
      const { data } = await axios.get("/banner/");
      if (data.length === 0) {
        throw new Error();
      }
      return data;
    } catch (error) {
      return null;
    }
  },
};

export const ReviewsService = {
  async getReviews(): Promise<ReviewType[] | null> {
    try {
      const { data } = await axios.get("/reviews/");
      console.log("отзывы: ", data);
      return data;
    } catch (error) {
      console.log("отзывы: ", error);
      return null;
    }
  },
};

export const ServicesService = {
  async getServices(): Promise<ServicesType[] | null> {
    try {
      const { data } = await axios.get("/services/");
      console.log("услуги: ", data);
      return data;
    } catch (error) {
      console.log("услуги: ", error);
      return null;
    }
  },
};
