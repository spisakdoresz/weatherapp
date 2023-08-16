import { styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";
import { IconButton } from "@material-ui/core";

const StyledBox = styled("div")({
  display: "flex",
  backgroundColor: "#545454",
  justifyContent: "center",
  alignItems: "center",
  height: "2.5rem",
  border: "0.5px solid #F9AB94",
});

const StyledIconButton = styled(IconButton)({
  color: "white",
  fontFamily: "monospace",
  fontSize: "1.3rem",
});

export default function NavBar() {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <React.Fragment>
      <StyledBox>
        <div
          style={{
            position: "absolute",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            left: "12rem",
            right: "12rem",
          }}
        >
          <StyledIconButton onClick={() => handleNavigation("/today")}>
            TODAY
          </StyledIconButton>
          <StyledIconButton onClick={() => handleNavigation("/hourly")}>
            HOURLY
          </StyledIconButton>
          <StyledIconButton onClick={() => handleNavigation("/radar")}>
            RADAR
          </StyledIconButton>
          <StyledIconButton onClick={() => handleNavigation("/forecast")}>
            FORECAST
          </StyledIconButton>
          <StyledIconButton onClick={() => handleNavigation("/airquality")}>
            AIR QUALITY
          </StyledIconButton>
        </div>
      </StyledBox>
    </React.Fragment>
  );
}
