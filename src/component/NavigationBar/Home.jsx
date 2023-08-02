import { Link } from "react-router-dom";
import React from "react";
import { Navigationbar } from "./NavigationBar";
//const Bg = new URL("tu1.jpg", import.meta.url)
export const Home = () => {
  /*const imageStyle = {
    max_height: "auto",
    max_width: "100%",
    backgroundImage:
    "url(/tu2.jpg)",
    backgroundSize:"cover",
    backgroundRepeat: "no-repeat", <img src = {Bg}/>
    
 };*/

  return (
    <>
      <div>
        <Navigationbar />
        <div class="bg">
          <h1>Technological University Meiktila</h1>
          <h2>Online Student Registration Form</h2>

          <div class="square">
            <Link to="/chooseyear">
              <button>Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
