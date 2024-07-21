// import React, { useState } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { DashBoard } from "./DashBoard";
// import SignIn from "../Login/Login";
// import { DashBoardHeader } from "./DashBoardHeader";
// import { LeadBoard } from "../LeadBoard/LeadBoard";

// export const LayoutComponent = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

//   const handleLogin = () => {
//     // Perform login logic, set isLoggedIn to true
//     setIsLoggedIn(true);
//   };

//   const handleLogout = () => {
//     // Perform logout logic, set isLoggedIn to false
//     setIsLoggedIn(false);
//   };
//   return (
//     <div>
//       <BrowserRouter>
//       {isLoggedIn && <DashBoardHeader onLogOut={handleLogout} />} {/* Render header if logged in */}
//         <Routes>
//           <Route path="/" element={<SignIn onLogin={handleLogin} />} />
//           <Route path="/dashboard" element={<DashBoard  />} />
//           <Route path="/leadboard" element={<LeadBoard />} />
          
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// };

import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { DashBoard } from "./DashBoard";
import SignIn from "../Login/Login";
import { DashBoardHeader } from "./DashBoardHeader";
import { LeadBoard } from "../LeadBoard/LeadBoard";
import { LoadBoard } from "../LoadBoard/LoadBoard";
import { InVoice } from "../InVoice/Invoice";

export const LayoutComponent = () => {
  // Check if there's a logged in status in localStorage, default to false if not found
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  // Update localStorage and state when logging in
  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  // Update localStorage and state when logging out
  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    setIsLoggedIn(false);
  };

  // Effect to ensure correct login state on initial load
  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedInStatus);
  }, []);

  return (
    <div>
      <BrowserRouter>
        {isLoggedIn && <DashBoardHeader onLogOut={handleLogout} />}
        <Routes>
          {!isLoggedIn ? (
            <Route path="/" element={<SignIn onLogin={handleLogin} />} />
          ) : (
            <>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<DashBoard />} />
              <Route path="/leadboard" element={<LeadBoard />} />
              <Route path="/loadboard" element={<LoadBoard />} />
              <Route path="/invoice" element={<InVoice />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

