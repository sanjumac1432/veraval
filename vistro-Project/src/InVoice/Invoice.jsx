import React, { useState } from "react";
import { InvoiceForm } from "./InvoiceFrom";
import { InvoiceDataTable } from "./InvoiceDataTable";

export const InVoice = () => {
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
    <>
      <div
        className="head"
        style={{
          background: "#444",
          width: "100%",
          borderRadius: "10px",
          margin: "0px",
        }}
      >
        <div
          className="lead-item"
          style={{
            width: "100%",

            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",

            margin: "10px",
          }}
        >
          <div className="name">
            <h3
              style={{
                color: "white",
                fontSize: "20px",
              }}
            >
          INVOICE
            </h3>
          </div>
          <div className="Add">
            <button
              style={{
                padding: "10px",
                fontSize: "18px",
                width: "100%",
                borderRadius: "10px",
                background: "#ff68c0",
                color: "white",
              }}
              onClick={handleOpen}
            >
              ADD INVOICE
            </button>
          </div>
        </div>
      </div>

      <InvoiceForm
        open={open}
        handleClose={handleClose}
        data={data}
        setData={setData}
        index={index}
        setIndex={setIndex}
      />
      <InvoiceDataTable data={data} setData={setData} deleteEmp={deleteEmp} editEmp={editEmp} />
    </>
  );
};
