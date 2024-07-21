import React from "react";
import { Grid, Typography, TextField, Checkbox, Button } from "@mui/material";
import { styled } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import { LayoutComponent } from "../DashBoard/LayoutComponent";


const RootContainer = styled(Grid)({
  marginTop: "5rem",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  padding: "2rem",
  boxShadow: "0 0 10px rgba(0,0,0,0.2)",
  borderRadius: "10px",
  backgroundColor: "#fff",
  textAlign: "center",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.02)",
  },
});

const Title = styled(Typography)({
  textAlign: "center",
  marginBottom: "1rem",
  fontWeight: "bold",
  color:"#ff0095"
});

const Subtitle = styled(Typography)({
  textAlign: "center",
  color: (theme) => theme.palette.text.secondary,
  marginBottom: "2rem",
});

const StyledTextField = styled(TextField)({
  marginBottom: "1rem",
});

const StyledCheckbox = styled(Checkbox)({
  display: "flex",
  alignItems: "center",
  marginBottom: "1rem",
  "& .MuiTypography-body2": {
    marginLeft: "0.5rem",
  },
});

const SignInButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#ff68c0",
  color: "#000",
  "&:hover": {
    backgroundColor: "#ff0095",
  },
}));

const SignUpLink = styled("a")({
  textDecoration: "none",
  color: (theme) => theme.palette.primary.main,
  transition: "color 0.3s",
  "&:hover": {
    color: (theme) => theme.palette.primary.green,
  },
});

function SignIn({onLogin}) {

    // const nav = useNavigate()
    const handelLogin = ()=>{
      onLogin()
    }

  return (
    <div style={{ display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:"100%"}}>

  
    <RootContainer container width={"50%"} spacing={2}>
      <Grid item xs={12}>
        <Title variant="h3">VRISTO</Title>
      </Grid>
      <Grid item xs={12}>
        <Subtitle variant="body1">SIGN IN</Subtitle>
        <Subtitle variant="body2">
          Enter your email and password to login
        </Subtitle>
      </Grid>
      <Grid item xs={12}>
        <StyledTextField fullWidth label="Email" id="email" />
      </Grid>
      <Grid item xs={12}>
        <StyledTextField
          fullWidth
          label="Password"
          id="password"
          type="password"
        />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={1} justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="body2">
              
              <StyledCheckbox
                sx={{
                  display:"inline-block",
                  justifyContent: "center",
                  marginTop: "20px",
                  padding:"0px",
                  alignItems:"center",
                  width:"5%"
                }}
              />
              {"Subscribe to VRISTO newsletter "}
              
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <SignInButton  variant="contained" fullWidth onClick={handelLogin}>
              <Link style={{textDecoration:"none", fontSize:"20px",color:"white"}} to='/dashboard'> SIGN IN</Link>
          
            </SignInButton>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">
              Don't have an account? <SignUpLink href="#">Sign Up</SignUpLink>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </RootContainer>
    </div>
  );
}

export default SignIn;
