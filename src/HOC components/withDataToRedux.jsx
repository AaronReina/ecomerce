import React, { useEffect, useState } from "react";

export default (call, WrappedComponent) => props => {
  const [data, setData] = useState("");

  useEffect(() => {
    const makeCall = async () => {
      try {
        const response = await call();
        setData(response);
      } catch (e) {
        console.log(e);
      }
    };
    makeCall();
  }, []);

  return <WrappedComponent data={data} {...props} />;
};
