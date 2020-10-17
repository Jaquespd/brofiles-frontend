import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:3000"
  baseURL: "https://brofiles-backend-s47ww.ondigitalocean.app/brofiles"
});

export default api;
