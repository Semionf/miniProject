import React from "react";
import { LogoutButton } from "../buttons/logoutButton";
import { Link } from "react-router-dom";

import "./navBar.css";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PhoneIcon from "@mui/icons-material/Phone";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";

export const NavBar = (props) => {
  return (
    <div className="list">
      <nav>
        <ul>
          <li>
            <Link
              className="Links"
              to="/"
            >
              <HomeIcon
                fontSize="large"
                className="icons"
              />
              <div className="section-name">Home</div>
            </Link>
          </li>
          <li>
            <Link
              className="Links"
              to="/About"
            >
              <InfoIcon
                fontSize="large"
                className="icons"
              />
              <div className="section-name">About</div>
            </Link>
          </li>
          <li>
            <Link
              className="Links"
              to="/ContactUs"
            >
              <PhoneIcon
                fontSize="large"
                className="icons"
              />{" "}
              <div className="section-name">Contact us</div>
            </Link>
          </li>
          <li>
            <Link
              className="Links"
              to="/Products"
            >
              <ZoomOutIcon
                fontSize="large"
                className="icons"
              />
              <div className="section-name">All Products</div>
            </Link>
          </li>
          <li>
            <LogoutButton></LogoutButton>
          </li>
        </ul>
      </nav>
    </div>
  );
};
