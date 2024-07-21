import React from "react";
import { TextField, Button, Container, Box, Typography, FormControl } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

const LoginForm = () => {
  const navigate = useNavigate();

  // Define Yup validation schema
  const validationSchema = yup.object({
    email: yup.string().email("Invalid email address").required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  // Initialize Formik for form state management and validation
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Form data:", values);
      // Navigate to admin page upon successful login
      navigate("/dashboard");
    },
  });

  return (
    <>

    
   


    <Container
      maxWidth="xs"
      sx={{
        marginTop: "5rem",
        padding: "2rem",
       
        boxShadow: "0 0 20px rgba(0,0,0,0.2)",
        borderRadius: "10px",
        backgroundColor: "#fff",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom sx={{
        marginBottom: "1rem",
        fontSize:"30px",
        fontWeight:"bold"
      }}>
        User Login
      </Typography>

      <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
        <Box sx={{ marginBottom: "1.5rem" }}>
          <FormControl fullWidth>
            <TextField
              label="Email"
              fullWidth
              id="email"
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
              label="Password"
              fullWidth
              id="password"
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
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
          Log In
        </Button>
      </form>
    </Container>
    </>
  );
};

export default LoginForm;
