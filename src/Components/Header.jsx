/**
 * Header components
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any section of your page.
 */
import React from "react";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "2.1rem",
        background: "rgba(255,255,255,0.75)",
        padding: "1.1rem",
        top: 0,
        width: "100%",
        zIndex: 10.5,
      }}
    >
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#footer">Contact</a>
    </div>
  );
};

export default Header;
