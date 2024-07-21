import React, { useEffect } from 'react'
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditNoteIcon from '@mui/icons-material/EditNote';
export const LeadDataTable = (props) => {
  const { data, setData, editEmp, deleteEmp } = props;

  useEffect(() => {
    const storedData = localStorage.getItem("leadData");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);
    const columns = [
        { field: "startingCity", headerName: "startingCity", width: 200 },
        { field: "startingState", headerName: "startingState", width: 200 },
        { field: "startingCountry", headerName: "startingCountry", width: 200 },
        { field: "startingZip", headerName: "startingZip", width: 200 },
        { field: "destinationCity", headerName: "destinationCity", width: 200 },
        { field: "destinationState", headerName: "destinationState", width: 200 },
        { field: "destinationCountry", headerName: "destinationCountry", width: 200 },
        { field: "destinationZip", headerName: "destinationZip", width: 200 },
        { field: "id", headerName: "Action ", width: 300, renderCell: (params) => {
            return (
              <>
                <Button
                  variant="contained"
                  size="small"
                  style={{ marginLeft: 16 ,  backgroundColor: "#333"}}
                  onClick={() => {
                    editEmp(params.id);
                  }}
    
                >
                  <EditNoteIcon />
                </Button>
    
                <Button
                  variant="contained"
                  size="small"
                  style={{ marginLeft: 16,backgroundColor:"red" }}
                  onClick={() => {
                    deleteEmp(params.id);
                  }}
                >
                  <DeleteForeverIcon/>
                </Button>
              </>
            );
          },
        },
      ];
  return (
    <div style={{ height: "80vh", width: "100%" }}>
    <DataGrid rows={data} columns={columns} />
  </div>
  )
}
