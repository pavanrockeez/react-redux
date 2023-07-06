import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.chucknorris.io/jokes/",
});
instance.defaults.headers.common["Content-Type"] = "application/json";
export default instance;
