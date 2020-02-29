import axios from "axios";
export default axios.create({
  baseURL: "http://8fa9a985.ngrok.io",
  timeout: 3000
});
