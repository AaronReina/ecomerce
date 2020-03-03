import axios from "axios";

export default axios.create({
  baseURL: "http://b4134f44.ngrok.io",
  timeout: 50000
});
