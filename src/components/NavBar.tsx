import { styled } from "@mui/material";
import React from "react";
import { HashLink } from "react-router-hash-link";

const StyledBox = styled("div")({
  display: "flex",
  backgroundColor: "#545454",
  justifyContent: "center",
  alignItems: "center",
  height: "2.5rem",
  border: "0.05rem solid #F9AB94",
});

const StyledHashLink = styled(HashLink)({
  color: "white",
  fontFamily: "monospace",
  fontSize: "1.3rem",
  textDecoration: "none",
});

export default function NavBar() {
  return (
    <React.Fragment>
      <StyledBox
        style={{ position: "fixed", top: "3.6rem", width: "100%", zIndex: 99 }}
      >
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
          <StyledHashLink to="#hourly" smooth>
            HOURLY
          </StyledHashLink>
          <StyledHashLink to="#forecast" smooth>
            FORECAST
          </StyledHashLink>
          <StyledHashLink to="#airquality" smooth>
            AIR QUALITY
          </StyledHashLink>
        </div>
      </StyledBox>
    </React.Fragment>
  );
}
