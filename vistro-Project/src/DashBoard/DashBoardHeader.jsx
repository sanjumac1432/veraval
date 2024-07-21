import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import "./DashBoard.css"

export const DashBoardHeader = ({onLogOut}) => {
    const logOut=()=>{
        onLogOut()
    }
  return (
    <>
      <header className="dashboard-header">
        <div className="header-content">
          <div className="logo">
            <h1 style={{
                color:"#ff68c0",
                fontSize:"25px",
                fontWeight:"bold",

            }}>VISTRO</h1>
          </div>
          <nav className="nav-items">
            <ul>
              <li>
                <Link  to="/dashboard">DashBoard</Link>
              </li>
              <li>
                <Link to="/leadboard">LeadBoard</Link>
              </li>
              <li>
                <Link to="/loadboard">LoadBoard</Link>
              </li>
              <li>
                <Link to="/invoice">Invoice</Link>
              </li>
            </ul>
          </nav>
          <div className="logout-button">
            <Button onClick={logOut} sx={{
                backgroundColor:"#ff68c0",
                color:"white",
                "&:hover": {
                        backgroundColor: "#ff0095",
                      }
            }} variant="contained">
                 <Link style={{textDecoration:"none", 
                    fontSize:"20px",
                    color:"white",
                    }} to="/">LogOut</Link>
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};
