const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#FEC7A2",
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <footer
        style={{
          textAlign: "center",
        }}
      >
        Weather Wiz &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default Footer;
