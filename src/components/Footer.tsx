const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#FEC7A2",
        height: "12.5rem",
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
