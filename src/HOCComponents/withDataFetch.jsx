import React, { useEffect, useState } from "react";
import { getToken } from "../axios/calls";

export default (call, WrappedComponent) => props => {
  const [data, setData] = useState("");

  useEffect(() => {
    const makeCall = async () => {
      try {
        const { token } = await getToken();
        const response = await call(token);
        setData(response);
      } catch (e) {
        console.log(e);
      }
    };
    makeCall();
  }, []);

  return <WrappedComponent data={data} {...props} />;
};
