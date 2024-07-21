import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Link } from "react-router-dom";

export const SideMenu = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="search">
          <input type="text" placeholder="search....." />
        </div>
        <div className="list-item">
          <ul>
            <li>
              <Link
                to="/admin"
                style={{ textDecoration: "none", color: "white" }}
              >
                Admin Penal
              </Link>
            </li>
            <li>OverView</li>
            <li>Our Service</li>
            <li>
              <Link
                to="/contact"
                style={{ textDecoration: "none", color: "white" }}
              >
                Contact
              </Link>
            </li>
            <li>User Profile</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
