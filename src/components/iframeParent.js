import React from "react";

const IframeParent = () => {
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
    </div>
  );
};

export default IframeParent;
