import instance from "./";

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
