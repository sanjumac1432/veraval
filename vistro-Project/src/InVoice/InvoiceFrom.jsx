import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Grid } from "@mui/material";

export const InvoiceForm = (props) => {
  const { open, handleClose, data, setData, index, setIndex } = props;
  const [form, setForm] = useState({
    id: 0,
    invoice: "",
    name: "",
    email: "",
    date: "",
    amount: 0,
  });

  useEffect(() => {
    if (index >= 0) {
      setForm(data[index]);
    } else {
      setForm({
        id: 0,
        invoice: "",
        name: "",
        email: "",
        date: "",
        amount: 0,
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
    localStorage.setItem("invoiceData", JSON.stringify(newData)); // Store data in local storage
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
        <DialogTitle>ADD INVOICE</DialogTitle>
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
              id="invoice"
              name="invoice"
              label="invoice"
              type="number"
              value={form.invoice}
              onChange={handleInput}
            />
            <TextField
              autoFocus
              required
              margin="dense"
              value={form.name}
              id="name"
              name="name"
              label="name"
              type="text"
              onChange={handleInput}
            />

            <TextField
              autoFocus
              required
              margin="dense"
              value={form.email}
              id="email"
              name="email"
              label="email"
              type="email"
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
              value={form.date}
              fullWidth
              id="date"
              name="date"
              type="date"
              onChange={handleInput}
            />

            <TextField
              autoFocus
              fullWidth
              required
              margin="dense"
              value={form.amount}
              id="amount"
              name="amount"
              label="amount"
              type="text"
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
