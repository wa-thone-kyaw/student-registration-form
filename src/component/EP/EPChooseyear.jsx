import { Link } from "react-router-dom";
import React from "react";
import { AdminNavBar } from "../AdminNavBar/AdminNavBar";
//import { Sidebar } from './Sidebar';

export const EPChooseyear = () => {
  return (
    <>
      <div>
        <AdminNavBar />
      </div>
      <div class="chooseyear">
        <h1>Choose Year</h1>
        <div class="year">
          <div class="left">
            <div class="first">
              <Link to="/firstep">
                <button>First Year</button>
              </Link>
            </div>

            <div class="second">
              <Link to="/secondep">
                <button>Second Year</button>
              </Link>
            </div>

            <div class="third">
              <Link to="/thirdep">
                <button>Third Year</button>
              </Link>
            </div>
          </div>

          <div class="right">
            <div class="fourth">
              <Link to="/fourthep">
                <button>Fourth Year</button>
              </Link>
            </div>

            <div class="fifth">
              <Link to="/fifthep">
                <button>Fifth Year</button>
              </Link>
            </div>

            <div class="sixth">
              <Link to="/sixthep">
                <button>Sixth Year</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
