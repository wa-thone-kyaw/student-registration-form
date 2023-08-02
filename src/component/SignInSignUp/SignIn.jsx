import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignIn.css";
import { Card } from "./Card";
import { AdminNavBar } from "../AdminNavBar/AdminNavBar";
export const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({});

  const errors = {
    username: "Invalid username",
    password: "Invalid password",
    noUsername: "Please enter your username",
    noPassword: "Please enter your password",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/student_registration/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );
      console.log("username", username);
      console.log("password", password);

      if (response.ok) {
        window.location.href = "/dashboard";
      } else {
        setErrorMessages({
          name: "login failed",
          message: data.error || "invalid credentials",
        });
      }
    } catch (error) {
      setErrorMessages({
        name: "loginFailed",
        message: "Invalid credentials",
      });
    }
  };

  const renderErrorMsg = (name) =>
    name === errorMessages.name && (
      <p className="error_msg">{errorMessages.message}</p>
    );
  return (
    <>
      <div>
        <AdminNavBar />
        <Card>
          <h1 className="title">Sign In</h1>
          <p className="subtitle">
            Please Log in using your username and password!
          </p>

          <form>
            <div className="signin">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <div className="err">
                {renderErrorMsg("username")}
                {renderErrorMsg("noUsername")}
              </div>

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="err">
                {renderErrorMsg("password")}
                {renderErrorMsg("noPassword")}
              </div>
            </div>
            <br />
            <br />
            <Link to="/dashboard">
              {" "}
              <button
                onClick={handleSubmit}
                name="signInBtn"
                className="sign_btn"
              >
                Sign In
              </button>
            </Link>
            <div>
              {errorMessages.name === "loginFailed" && (
                <p className="error_msg">{errorMessages.message}</p>
              )}
            </div>
          </form>
        </Card>
      </div>
    </>
  );
};
