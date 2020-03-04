import axios from "axios";

export default axios.create({
  baseURL: "http://90e40522.ngrok.io",
  timeout: 50000
});
