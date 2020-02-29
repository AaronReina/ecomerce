import React from "react";
import { getToken } from "./../axios/calls";
const Main = () => {
  const call = async () => {
    try {
      const response = await getToken();

      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      main
      <button onClick={() => call()}>sadasdasds</button>
    </div>
  );
};
export default Main;
