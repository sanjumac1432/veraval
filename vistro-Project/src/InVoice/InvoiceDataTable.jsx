import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditNoteIcon from "@mui/icons-material/EditNote";

export const InvoiceDataTable = (props) => {
  const { data, setData, editEmp, deleteEmp } = props;

  useEffect(() => {
    const storedData = localStorage.getItem("invoiceData");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  const columns = [
    { field: "invoice", headerName: "Invoice", width: 200 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "date", headerName: "Date", width: 200 },
    { field: "amount", headerName: "Amount", width: 200 },
    {
      field: "id",
      headerName: "Action",
      width: 200,
      renderCell: (params) => (
        <>
          <Button
            variant="contained"
            size="small"
            style={{ marginLeft: 16, backgroundColor: "#333" }}
            onClick={() => {
                
              editEmp(params.id);
            }}
          >
            <EditNoteIcon />
          </Button>
          <Button
            variant="contained"
            size="small"
            style={{ marginLeft: 16, backgroundColor: "red" }}
            onClick={() => {
                
              deleteEmp(params.id);
            }}
          >
            <DeleteForeverIcon />
          </Button>
        </>
      ),
    },
  ];

  return (
    <div style={{ height: "80vh", width: "100%" }}>
      <DataGrid rows={data} columns={columns} />
    </div>
  );
};
