import React from "react";
import { NavLink } from "react-router-dom";

const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "#f2f2f2",
    padding: "10px",
};

const linkStyle = {
    color: "black",
    textDecoration: "none",
    padding: "5px 10px",
    backgroundColor: "#e0e0e0",
    borderRadius: "5px",
    margin: "0 5px",
};

function NavBar() {
    return (
        <div style={navStyle}>
        <NavLink exact to="/" style={linkStyle}>
            Home
        </NavLink>
        <NavLink exact to="/gallery" style={linkStyle}>
            Gallery
        </NavLink>
        <NavLink exact to="/usergallery" style={linkStyle}>
            User Gallery
        </NavLink>
        <NavLink exact to="/login" style={linkStyle}>
            Login
        </NavLink>
        </div>
    );
}

export default NavBar;
