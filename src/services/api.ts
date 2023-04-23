import axios from "axios";

export const api = axios.create({
  baseURL: `https://642ec14a8ca0fe3352d7fe14.mockapi.io/api/v1/`,
});

export const getData = async () => {
  const apiResults = await api.get("products");
  return apiResults.data;
};
