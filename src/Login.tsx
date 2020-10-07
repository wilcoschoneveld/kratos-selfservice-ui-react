import React, { useEffect, useState } from "react";

export const Login = () => {
  const [requestId, setRequestId] = useState(null);

  useEffect(() => {
    const listener = (event: any) => {
      if (event.data.type === "requestId") {
        setRequestId(event.data.id);
      }
    };

    window.addEventListener("message", listener);


    return () => window.removeEventListener("message", listener);
  })

  return <div>
    Request: {requestId}
    <iframe style={{display: "none"}} src="/.ory/kratos/public/self-service/browser/flows/login" />
    </div>;
};
