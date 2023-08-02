import { Link } from "react-router-dom";
import React from "react";
import { AdminNavBar } from "./AdminNavBar";
//const Bg = new URL("tu1.jpg", import.meta.url)
export const AdminHome = () => {
  return (
    <>
      <AdminNavBar />
      <div class="bg">
        <h1>WELCOME ADMIN!</h1>
        <div class="square">
          <Link to="/signin">
            <button>Get Started</button>
          </Link>
        </div>
      </div>
    </>
  );
};
