import React from "react";
import LoginForm from "./Login/LoginPage";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Admin } from "./Admin/Admin";
import { DashBoard } from "./DashBoard/DashBoard";
import { Contact } from "./Login/Contact";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
