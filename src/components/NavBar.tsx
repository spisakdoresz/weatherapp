import { styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";
import { IconButton } from "@material-ui/core";
import { HashLink } from "react-router-hash-link";

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

const StyledHashLink = styled(HashLink)({
  color: "white",
  fontFamily: "monospace",
  fontSize: "1.3rem",
  textDecoration: "none",
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
          <StyledHashLink to="#today" smooth>
            TODAY
          </StyledHashLink>
          <StyledIconButton onClick={() => handleNavigation("/hourly")}>
            HOURLY
          </StyledIconButton>
          <StyledHashLink to="#radar" smooth>
            RADAR
          </StyledHashLink>
          <StyledIconButton onClick={() => handleNavigation("/forecast")}>
            FORECAST
          </StyledIconButton>
          <StyledHashLink to="#airquality" smooth>
            AIR QUALITY
          </StyledHashLink>
        </div>
      </StyledBox>
    </React.Fragment>
  );
}
