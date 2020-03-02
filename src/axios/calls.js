import instance from "./";

//getToken test
export const getToken = async () => {
  try {
    const response = await instance.get("/auth/login");

    return response.data;
  } catch (e) {
    throw e;
  }
};

//getBooks test
export const getBooks = async token => {
  try {
    const response = await instance.get("/books/getBooks", {
      headers: {
        "Content-Type": "application/json",
        Accept: "Accept",
        Authorization: "Bearer " + token
      }
    });

    return response.data;
  } catch (e) {
    throw e;
  }
};
