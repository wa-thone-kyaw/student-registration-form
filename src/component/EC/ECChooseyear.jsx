import { Link } from "react-router-dom";
import React from "react";
import { AdminNavBar } from "../AdminNavBar/AdminNavBar";
//import { Sidebar } from './Sidebar';

export const ECChooseyear = () => {
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
              <Link to="/firstec">
                <button>First Year</button>
              </Link>
            </div>

            <div class="second">
              <Link to="/secondec">
                <button>Second Year</button>
              </Link>
            </div>

            <div class="third">
              <Link to="/thirdec">
                <button>Third Year</button>
              </Link>
            </div>
          </div>

          <div class="right">
            <div class="fourth">
              <Link to="/fourthec">
                <button>Fourth Year</button>
              </Link>
            </div>

            <div class="fifth">
              <Link to="/fifthec">
                <button>Fifth Year</button>
              </Link>
            </div>

            <div class="sixth">
              <Link to="/sixthec">
                <button>Sixth Year</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
