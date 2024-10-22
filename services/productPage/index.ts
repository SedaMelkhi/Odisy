import axios from "axios";
import { ProductType } from "../homePage";

export const ProductService = {
  async getProduct(id: number): Promise<ProductType | null> {
    try {
      const { data } = await axios.get(`/products/${id}/`);
      return data.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};
