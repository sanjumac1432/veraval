// Import necessary modules from React and Material-UI
import React, { useState } from "react";
import Button from "@mui/material/Button";

import AdminTable from "./AdminTable";
import AdminForm from "./AddminFrom";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const AdminHeader = () => {
  // State for managing data, dialog open state, and index for editing
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(-1);

  // Open dialog handler
  const handleOpen = () => {
    setOpen(true);
  };

  // Close dialog handler
  const handleClose = () => {
    setOpen(false);
    setIndex(-1); // Reset index when closing dialog
  };

  // Delete employee handler
  const deleteEmp = (index) => {
    let updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  };

  // Edit employee handler
  const editEmp = (index) => {
    setOpen(true);
    setIndex(index);
  };

  return (
    <div>
      <header>
        <div className="head">
          <h1>Admin Dashboard</h1>
        </div>
        <div className="button">
        <Button
          sx={{
            fontWeight:"bold",
            marginRight:"2px",
            background:" #333" ,
            transition: "background-color 0.3s",
            '&:hover': {
              background: "#555", /* Adjust to a slightly lighter shade */
            }
          }}
            variant="contained"
            color="primary"
          
          >
             <Link to="/dashboard" style={{textDecoration:"none", color:"white",
              lineHeight:"1.5rem",
              alignItems:"center"
             }} >
              <KeyboardBackspaceIcon sx={{
              fontSize:"1.2rem",
              paddingTop:"5px"}}/></Link>
          </Button>
          <Button
          sx={{

            fontWeight:"bold",
            background:" #333" ,
            transition: "background-color 0.3s",
            '&:hover': {
              background: "#555", /* Adjust to a slightly lighter shade */
            }
          }}
            variant="contained"
            color="primary"
            onClick={handleOpen}
          >Add User</Button>
        </div>
      </header>

     

      {/* Form dialog component */}
      <AdminForm
        open={open}
        handleClose={handleClose}
        data={data}
        setData={setData}
        index={index}
        setIndex={setIndex}
      />

      {/* Table component */}
      <AdminTable data={data} deleteEmp={deleteEmp} editEmp={editEmp} />
    </div>
  );
};

export default AdminHeader;
