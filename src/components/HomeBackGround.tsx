type BannerProps = {
  imagePath: string;
  altText: string;
};

const HomeBackGround = ({ imagePath, altText }: BannerProps) => {
  return (
    <div
      style={{
        position: "relative",
        backgroundImage: "linear-gradient(to bottom, #ffffff, #FEC7A2)",

        width: "100%",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundImage: `url(${imagePath})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          top: "3rem",
          left: "12rem",
          right: "12rem",
          bottom: "20rem",
          borderRadius: "1.5rem",
        }}
        aria-label={altText}
      ></div>
    </div>
  );
};

export default HomeBackGround;
