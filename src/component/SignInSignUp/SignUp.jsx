import React, { useState } from "react";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import GoogleIcon from "@mui/icons-material/Google";
// import TwitterIcon from "@mui/icons-material/Twitter";
import { SignUpValidation } from "./SignupValidation";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import { Card } from "./Card";
import axios from "axios";
import { AdminNavBar } from "../AdminNavBar/AdminNavBar";

export const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    setUsername("");
    setPassword("");

    setErrors(SignUpValidation(formData));
    if (!Object.values(errors).some((error) => error)) {
      axios
        .post("http://127.0.0.1:8000/student_registration/signup", formData)
        .then((res) => {
          alert("Sign Up successfully!");
          console.log("You registered successfully");
        })
        .catch((err) => {
          console.error("try again:", err);
        });
    }
    /* if(errors.username==="" && errors.email==="" && errors.password===""){
            axios.post('' , values)
            .then(res => { navigate('/home')})
            .catch(err => console.log(err));

        } */
  };

  return (
    <>
    <AdminNavBar />
      <Card>
        <h1 className="title">Sign Up</h1>
        <p className="subtitle">Create an account!</p>

        <form onSubmit={handleSubmit}>
          <div className="signup">
            <input
              type="text"
              value={username}
              placeholder="Username"
              onChange={handleUsernameChange}
            />
            {errors.username && (
              <span className="danger">{errors.username}</span>
            )}

            {/* <input type="email" placeholder="Email" onChange={handleInput} />
            {errors.email && <span className="danger">{errors.email}</span>} */}

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            {errors.password && (
              <span className="danger">{errors.password}</span>
            )}
          </div>
        </form>
        <button type="submit" onClick={handleSubmit} className="sign_btn">
          {" "}
          Sign Up{" "}
        </button>

        {/* <div className="icons">
          <GoogleIcon className="icon" />
          <FacebookIcon className="icon" />
          <TwitterIcon className="icon" />
        </div> */}
      </Card>
    </>
  );
};
export default SignUp;
