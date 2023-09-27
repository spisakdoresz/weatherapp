import { styled } from "@mui/material";

const StyledNotFoundContainer = styled("div")({
  backgroundColor: "#BB8995",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "monospace",
});

const NotFound = () => {
  return (
    <StyledNotFoundContainer>
      <div
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          paddingTop: "6rem",
        }}
      >
        404 - Page not found
      </div>
      <div
        style={{
          fontSize: "1.5rem",
        }}
      >
        The page you are looking for does not exist.
      </div>
    </StyledNotFoundContainer>
  );
};

export default NotFound;
