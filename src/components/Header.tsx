// Header.tsx
import React from "react";
import homeImage from "/logo.png";
import { styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const StyledBox = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#BB8995",
  alignItems: "center",
});

const Header = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <React.Fragment>
      <StyledBox>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: 200,
            paddingRight: 200,
          }}
        >
          <div>
            <img
              src={homeImage}
              alt="Home"
              style={{ width: "27%", cursor: "pointer" }}
              onClick={() => handleNavigation("/")}
            />
          </div>
          <SearchBar />
        </div>
      </StyledBox>
    </React.Fragment>
  );
};

export default Header;
