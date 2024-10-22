import axios from "axios";
import { ProductType } from "./homePage";

// Получаем значения из переменных окружения
export const API_URL = "https://jemmesgarden.com/api";
export const API_DOMAIN = "https://jemmesgarden.com";

axios.defaults.baseURL = API_URL;

type OrderType = {
  name: string;
  phone: string;
  comment: string;
  cart: {
    id: number;
    count: number;
  }[];
};

type FeedbackType = {
  name: string;
  phone: string;
  comment: string;
  cart: {
    id: number;
    count: number;
  }[];
};

export const OrderService = {
  async postOrder({ name, phone, comment, cart }: OrderType) {
    try {
      const response = await axios.post("/orders/", {
        name,
        phone,
        comment,
        cart,
      });
      return response.data.message;
    } catch (error) {
      return null;
    }
  },
};

export const FeedbackService = {
  async postFeedback({ name, phone, comment }: FeedbackType) {
    try {
      const { statusText } = await axios.post("/feedback/", {
        name,
        phone,
        comment,
      });
      return statusText;
    } catch (error) {
      return null;
    }
  },
};

export const ProductsService = {
  async getProducts({ search }: { search: string }): Promise<ProductType[]> {
    try {
      const params = { search };
      const { data } = await axios.get("/products", { params });
      return data.data;
    } catch (error) {
      return [];
    }
  },
};
