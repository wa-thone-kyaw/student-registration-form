import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap-icons/fonts/bootstrap-icons.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Sidebar } from "./Sidebar";
import { AdminNavBar } from "../AdminNavBar/AdminNavBar";
export const Dashboard = () => {
  return (
    <>
      <div>
        <AdminNavBar />
      </div>
      <div className="dashboardbar">
        <div className="col-auto"></div>
        <Sidebar />
      </div>
    </>
  );
};
