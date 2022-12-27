import axios from "./axios";

const getImageBySearch = (search, limit) => {
  return axios.get(
    `/search?api_key=8UXM8haYy9vifU4fBRp8l2EtIzQlx2Ct&q=${search}&limit=${limit}&offset=0&rating=g&lang=en`
  );
};
export { getImageBySearch };
