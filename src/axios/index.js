import axios from "axios";

//PRE
export default axios.create({
  baseURL: "http://private-anon-153e68a05e-wbooksapi.apiary-mock.com/api/v1",
  timeout: 3000
});
//PRO
// export default axios.create({
//   baseURL: "http://polls.apiblueprint.org/api/v1",
//   timeout: 3000
// });
