import axios from "axios";

//PRE
export default axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 3000
});
//PRO
// export default axios.create({
//   baseURL: "http://polls.apiblueprint.org/api/v1",
//   timeout: 3000
// });
