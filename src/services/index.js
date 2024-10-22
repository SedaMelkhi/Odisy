import axios from "axios";

export const API_URL = "https://odisy.pro/api/";
export const API_DOMAIN = "https://odisy.pro";

axios.defaults.baseURL = API_URL;

export const HomePageService = {
  async getMainVideo() {
    const { data } = await axios.get("homepage");
    return data[0];
  },
};

export const ProjectService = {
  async getPublishProjects() {
    const { data } = await axios.get("projects");
    return data;
  },
  async getHiddenProjects(pin_code) {
    try {
      const { data } = await axios.post("hidden-garden/", { pin_code });
      return data;
    } catch {
      return null;
    }
  },
};

export const ContactsService = {
  async getContacts() {
    const { data } = await axios.get("contact-info/");
    return data[0];
  },
};
