import { Link } from 'react-router-dom';
import React from "react"
//import { Sidebar } from './Sidebar';

export const MPChooseyear = () => {
  return (
    <>  
  <div class="chooseyear">
      <h1>Choose Year</h1>
      <div class ='year'>
          <div class ='left'>
            <div class='first'>
              <Link to="/firstmp"><button>First Year</button></Link> 
            </div>  
              
            <div class='second'>
              <Link to="/secondmp"><button>Second Year</button></Link>
            </div>
          
            <div class='third'>
              <Link to="/thirdmp"><button>Third Year</button></Link>
            </div>
          </div>

          <div class ='right'>
            <div class='fourth'>
              <Link to="/fourthmp"><button>Fourth Year</button></Link>
            </div>

            <div class='fifth'>
              <Link to="/fifthmp"><button>Fifth Year</button></Link>
            </div>

            <div class='sixth'>
              <Link to="/sixthmp"><button>Sixth Year</button></Link>
            </div>
          </div>
    </div>
  </div>
  </>
  );
}
