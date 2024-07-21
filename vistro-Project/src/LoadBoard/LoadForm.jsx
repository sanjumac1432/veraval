import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Grid } from "@mui/material";

export const LoadForm = (props) => {
  const { open, handleClose, data, setData, index, setIndex } = props;
  const [form, setForm] = useState({
    startingCity: "",
    startingState: "",
    startingCountry: "",
    startingZip: "",
    destinationCity: "",
    destinationState: "",
    destinationCountry: "",
    destinationZip: "",

    id: 0,
  });

  useEffect(() => {
    if (index >= 0) {
      setForm(data[index]);
    } else {
      setForm({
        startingCity: "",
        startingState: "",
        startingCountry: "",
        startingZip: "",
        destinationCity: "",
        destinationState: "",
        destinationCountry: "",
        destinationZip: "",

        id: 0,
      });
    }
  }, [index, open]);

  const handleSave = () => {
    let newData = [...data];
    if (index < 0) {
      // Adding new data
      const newEntry = { ...form, id: newData.length };
      newData.push(newEntry);
    } else {
      // Updating existing data
      newData[index] = form;
    }
    setData(newData);
    localStorage.setItem("loadData", JSON.stringify(newData)); // Store data in local storage
    handleClose();
  };
  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Lead Form</DialogTitle>
        <DialogContent>
          <DialogContentText>Fill up the details</DialogContentText>
          <Grid
            xs={6}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <TextField
              autoFocus
              required
              margin="dense"
              id="startingCity"
              name="startingCity"
              label="startingCity"
              type="text"
              value={form.startingCity}
              onChange={handleInput}
            />
            <TextField
              autoFocus
              required
              margin="dense"
              value={form.startingState}
              id="startingState"
              name="startingState"
              label="startingState"
              type="text"
              onChange={handleInput}
            />

            <TextField
              autoFocus
              required
              margin="dense"
              value={form.startingCountry}
              id="startingCountry"
              name="startingCountry"
              label="startingCountry"
              type="text"
              onChange={handleInput}
            />
            <TextField
              autoFocus
              required
              margin="dense"
              value={form.startingZip}
              id="startingZip"
              name="startingZip"
              label="startingZip"
              type="number"
              onChange={handleInput}
            />
          </Grid>
          <Grid
            xs={6}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <TextField
              autoFocus
              required
              margin="dense"
              id="destinationCity"
              name="destinationCity"
              label="destinationCity"
              type="text"
              value={form.destinationCity}
              onChange={handleInput}
            />
            <TextField
              autoFocus
              required
              margin="dense"
              value={form.destinationState}
              id="destinationState"
              name="destinationState"
              label="destinationState"
              type="text"
              onChange={handleInput}
            />

            <TextField
              autoFocus
              required
              margin="dense"
              value={form.destinationCountry}
              id="destinationCountry"
              name="destinationCountry"
              label="destinationCountry"
              type="text"
              onChange={handleInput}
            />
            <TextField
              autoFocus
              required
              margin="dense"
              value={form.destinationZip}
              id="destinationZip"
              name="destinationZip"
              label="destinationZip"
              type="number"
              onChange={handleInput}
            />
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            sx={{
              color: "white",

              background: " #333",
              transition: "background-color 0.3s",
              "&:hover": {
                background: "#555" /* Adjust to a slightly lighter shade */,
              },
            }}
          >
            Cancel
          </Button>
          <Button
            type="button"
            sx={{
              backgroundColor: "#ff68c0",
              color: "white",
              "&:hover": {
                backgroundColor: "#ff0095",
              },
            }}
            onClick={handleSave}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
