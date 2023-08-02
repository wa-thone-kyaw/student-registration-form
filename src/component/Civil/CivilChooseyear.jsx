import { Link } from 'react-router-dom';
import React from "react"
import { Navigationbar } from "../NavigationBar/NavigationBar";

//import { Sidebar } from './Sidebar';

export const CivilChooseyear = () => {
  return (
   
    <>  
     <div>< Navigationbar/></div>
  <div class="chooseyear">
      <h1>Choose Year</h1>
      <div class ='year'>
          <div class ='left'>
            <div class='first'>
              <Link to="/firstcivil"><button>First Year</button></Link> 
            </div>  
              
            <div class='second'>
              <Link to="/secondcivil"><button>Second Year</button></Link>
            </div>
          
            <div class='third'>
              <Link to="/thirdcivil"><button>Third Year</button></Link>
            </div>
          </div>

          <div class ='right'>
            <div class='fourth'>
              <Link to="/fourthcivil"><button>Fourth Year</button></Link>
            </div>

            <div class='fifth'>
              <Link to="/fifthcivil"><button>Fifth Year</button></Link>
            </div>

            <div class='sixth'>
              <Link to="/sixthcivil"><button>Sixth Year</button></Link>
            </div>
          </div>
    </div>
  </div>
  </>
  );
}
