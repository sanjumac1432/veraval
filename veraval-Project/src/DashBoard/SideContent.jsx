import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { Section } from "./Section";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
export const SideContent = () => {
  return (
    <>
      <div className="main-box">
        <div className="main-card">
          <div className="card">
            <div className="card-header-icon">
              <PersonIcon
                sx={{ fontSize: "50px", color: "yellowgreen" }}
                className="card-icon"
              />
            </div>
            <div className="card-title">
              <h3>Total Employee</h3>
            </div>
            <div className="task-number">
              <h1>100</h1>
            </div>
          </div>

          <div className="card">
            <div className="card-header-icon">
              <AddTaskIcon
                sx={{ fontSize: "50px", color: "green" }}
                className="card-icon"
              />
            </div>
            <div className="card-title">
              <h3>Total Task</h3>
            </div>
            <div className="task-number">
              <h1>100</h1>
            </div>
          </div>
          <div className="card">
            <div className="card-header-icon">
              <MoveToInboxIcon
                sx={{ fontSize: "50px", color: "orange" }}
                className="card-icon"
              />
            </div>
            <div className="card-title">
              <h3>Completed task</h3>
            </div>
            <div className="task-number">
              <h1>100</h1>
            </div>
          </div>
        </div>

        <div className="chart">
          <h3>Status</h3>
          <div className="sec-1">
            <li className="one"></li>
            <li className="two"></li>
            <li className="three"></li>
            <li className="forth"></li>
          </div>
        </div>
      </div>

      <Section />
    </>
  );
};
