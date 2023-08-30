//@ts-ignore
const PageContainer = ({ children }) => {
  return (
    <div
      style={{
        position: "relative",
        backgroundImage: "linear-gradient(to bottom, #ffffff, #FEC7A2)",
        width: "100%",
        height: "200vh",
      }}
    >
      {children}
    </div>
  );
};

export default PageContainer;
