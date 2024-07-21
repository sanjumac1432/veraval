import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import { SideMenu } from "./SideMenu";
import { SideContent } from "./SideContent";

export const DashBoard = () => {
  return (
    <>
      <header>
        <div className="left">
          <h1>DashBoard</h1>
        </div>
        <div className="right">
          <Button
            className="login"
            sx={{
              fontWeight: "bold",
              border: "1px solid gray",
              marginRight: "20px",
              background: "#333",
              transition: "background-color 0.3s",
              "&:hover": {
                background: "#555" /* Adjust to a slightly lighter shade */,
                border: "none",
              },
            }}
            variant="contained"
          >
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Log Out
            </Link>
          </Button>
        </div>
      </header>

      <div className="flex">
        <div className="box">
          <SideMenu />
        </div>
        <div className="box">
          <SideContent />
        </div>
      </div>
    </>
  );
};
