import {
  Box,
  Button,
  Container,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

export const Contact = () => {
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    name: yup.string().required("Name is required"),
    massage: yup.string().required("Massage is required"),
  });

  // Initialize Formik for form state management and validation
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      massage: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Form data:", values);
    },
  });
  return (
    <>
      <Container
        maxWidth="md"
        sx={{
          marginTop: "5rem",
          padding: "2rem",

          boxShadow: "0 0 20px rgba(0,0,0,0.2)",
          borderRadius: "10px",
          backgroundColor: "#fff",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{
            marginBottom: "1rem",
            fontSize: "30px",
            fontWeight: "bold",
          }}
        >
          Contact
        </Typography>

        <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
          <Box sx={{ marginBottom: "1.5rem" }}>
            <FormControl fullWidth>
              <TextField
                label="Name"
                fullWidth
                id="Name"
                name="name"
                type="text"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                variant="outlined"
              />
            </FormControl>
          </Box>

          <Box sx={{ marginBottom: "1.5rem" }}>
            <FormControl fullWidth>
              <TextField
                label="Email"
                fullWidth
                id="Email"
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                variant="outlined"
              />
            </FormControl>
          </Box>
          <Box sx={{ marginBottom: "1.5rem" }}>
            <FormControl fullWidth>
              <TextField
                label="Massage"
                fullWidth
                id="Massage"
                name="massage"
                type="text"
                value={formik.values.massage}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.massage && Boolean(formik.errors.massage)}
                helperText={formik.touched.massage && formik.errors.massage}
                variant="outlined"
              />
            </FormControl>
          </Box>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#333",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#555",
              },
            }}
          >
            Submit
          </Button>
        </form>
      </Container>
    </>
  );
};
