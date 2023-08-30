//@ts-ignore
const PageContainer = ({ children }) => {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to bottom, #ffffff, #FEC7A2)",
        width: "100%",
      }}
    >
      {children}
    </div>
  );
};

export default PageContainer;
