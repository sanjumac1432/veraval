import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditNoteIcon from '@mui/icons-material/EditNote';

const AdminTable = (props) => {
  // const { data } = props;
  // console.log(data);

  const columns = [
    { field: "firstName", headerName: "First Name", width: 200 },
    { field: "lastName", headerName: "Last Name", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "role", headerName: "Role", width: 200 },
    { field: "id", headerName: "Action ", width: 300, renderCell: (params) => {
        return (
          <>
            <Button
              variant="contained"
              size="small"
              style={{ marginLeft: 16 ,  backgroundColor: "#333"}}
              onClick={() => {
                props.editEmp(params.id);
              }}

            >
              <EditNoteIcon />
            </Button>

            <Button
              variant="contained"
              size="small"
              style={{ marginLeft: 16,backgroundColor:"red" }}
              onClick={() => {
                props.deleteEmp(params.id);
              }}
            >
              <DeleteForeverIcon/>
            </Button>
          </>
        );
      },
    },
  ];
 
  console.log(props);
  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid rows={props.data} columns={columns} />
    </div>
  );
};

export default AdminTable;