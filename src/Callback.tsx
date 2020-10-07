import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Callback = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    window.parent.postMessage(
      {
        type: "requestId",
        id: params.get("request"),
      },
      "*"
    );

    console.log('sent');
  }, [location]);

  return null;
};
