import React from "react";
import { getToken, getBooks } from "./../axios/calls";
const Main = () => {
  const call = async () => {
    try {
      const response = await getToken();

      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
  const callBooks = async () => {
    try {
      const response = await getBooks();

      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <button onClick={() => call()}>call auth</button>
      <button onClick={() => callBooks()}>call books</button>
    </div>
  );
};
export default Main;
