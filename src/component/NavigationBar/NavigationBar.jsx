import { Link } from "react-router-dom";
//import It from '.public/It.png'
export const Navigationbar = () => {
  return (
    <div class="Navbar">
      <img src="./tulogo.jpg" alt="It" width={80} height={90}/> 
       <ul>   
      <Link to="/admin">
        <li> ADMIN</li>
      </Link>

      <Link to="/contact">
        <li> CONTACT US</li>
      </Link>

      <Link to="/about">
        <li>ABOUT</li>
      </Link>

      <Link to="/">
        <li>HOME</li>
      </Link>
      </ul>  
    </div>
  );
};
