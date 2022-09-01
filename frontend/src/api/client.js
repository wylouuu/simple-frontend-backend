import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.56.76:3000/publicFeed",
});

export default apiClient;
