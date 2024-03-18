import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

function Navbar() {
  return (
    <div
      style={{
        backgroundColor: "#333333",
        width: "100%",
        height: "4rem",
        marginTop: "1rem",
        marginLeft: "1.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          fontSize: "40px",
          fontWeight: "bold",
          fontStyle: "italic",
          color: "#FFFFFF",
        }}
      >
        User Information App
      </div>
      <a
        href="https://github.com/kunalMore23/user-info"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#FFFFFF", display: "flex", alignItems: "center" }}
      >
        GitHub Repository
        <GitHubIcon fontSize="large" style={{ marginLeft: "0.5rem" }} />
      </a>
    </div>
  );
}

export default Navbar;
