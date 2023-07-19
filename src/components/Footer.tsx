import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#FEC7A2",
        height: "200px",
        position: "sticky",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <footer
        style={{
          textAlign: "center",
          marginTop: "1.25rem",
          padding: "0.625rem",
        }}
      >
        Weather Wiz &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default Footer;
