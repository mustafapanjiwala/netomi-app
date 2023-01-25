import React, { useEffect, useState } from "react";

const IframeParent = () => {
  const [recivedMessage, setRecievedMessage] = useState("");
  useEffect(() => {
    window.addEventListener("message", (e) => {
      console.log(e.data);
      if (
        // e.origin !== "https://netomi-app.netlify.app/" ||
        e.data.target !== "parentComponent"
      )
        return;
      const { name, number, email, country, state } = e.data;
      const errorsMsg = {};
      const successMsg = { Success: "All fields are valid" };

      if (!name || name.length < 4 || name.length > 10)
        errorsMsg.name = {
          error: "Name should be between 4 to 10 characters, ",
        };
      if (("" + number).length !== 10) {
        errorsMsg.number = { error: "Phone number should be 10 digits, " };
      }
      //eslint-disable-next-line
      if (!/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email)) {
        errorsMsg.email = { error: "Email is invalid, " };
      }
      if (!country) {
        errorsMsg.country = { error: "Country Required, " };
      }
      if (!state) {
        errorsMsg.state = { error: "State Required" };
      }

      if (Object.keys(errorsMsg).length !== 0) {
        setRecievedMessage(JSON.stringify({ Result: errorsMsg }));
      } else {
        setRecievedMessage(JSON.stringify({ Result: successMsg }));
      }
    });
  }, []);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Parent Iframe</h1>
      <iframe
        src="/iframe-child/"
        title="iframeChild"
        style={{
          width: "30%",
          height: "80%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ECEBEC",
        }}
      />
      <p>{recivedMessage}</p>
    </div>
  );
};

export default IframeParent;
