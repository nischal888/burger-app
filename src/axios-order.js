import axios from "axios";
const instance = axios.create({
  baseURL: "https://burger-backend-95417-default-rtdb.firebaseio.com/",
});
export default instance;
