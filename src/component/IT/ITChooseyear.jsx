import { Link } from 'react-router-dom';
import React from "react"
//import { Sidebar } from './Sidebar';

export const ITChooseyear = () => {
  return (
    <>  
  <div class="chooseyear">
      <h1>Choose Year</h1>
      <div class ='year'>
          <div class ='left'>
            <div class='first'>
              <Link to="/firstit"><button>First Year</button></Link> 
            </div>  
              
            <div class='second'>
              <Link to="/secondit"><button>Second Year</button></Link>
            </div>
          
            <div class='third'>
              <Link to="/thirdit"><button>Third Year</button></Link>
            </div>
          </div>

          <div class ='right'>
            <div class='fourth'>
              <Link to="/fourthit"><button>Fourth Year</button></Link>
            </div>

            <div class='fifth'>
              <Link to="/fifthit"><button>Fifth Year</button></Link>
            </div>

            <div class='sixth'>
              <Link to="/sixthit"><button>Sixth Year</button></Link>
            </div>
          </div>
    </div>
  </div>
  </>
  );
}
