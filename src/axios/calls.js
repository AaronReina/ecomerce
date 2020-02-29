import instance from "./";

//getToken test
export const getToken = async () => {
  try {
    const response = await instance.post("/users/sessions", {
      session: {
        email: "test@wolox.com.ar",
        password: "mypassword"
      }
    });

    return response.data;
  } catch (e) {
    throw e;
  }
};

//getBooks test
export const getBooks = async (data, token) => {
  try {
    const response = await instance.get("/books", {
      params: data,
      headers: {
        "Content-Type": "application/json",
        Accept: "Accept",
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbiAoOiJIUzI1NiJ9.eyJvX2F1dGhfYXBwbGljYXRpb25faWQiOjF9.h7ZNPpbd_Bu8yL27fmCAI_wgyZJI44b5eRRxwWUcwaQ"
      }
    });

    return response.data;
  } catch (e) {
    throw e;
  }
};
