import { Link } from "react-router-dom";
import { Navigationbar } from "../NavigationBar/NavigationBar";

export const Chooseyear = () => {
  return (
    <div class="chooseyear">
      <Navigationbar />
      <h1>Choose Year</h1>
      <div class="year">
        <div class="left">
          <div class="first">
            <Link to="/firstyear">
              <button>First Year</button>
            </Link>
          </div>

          <div class="second">
            <Link to="/secondyear">
              <button>Second Year</button>
            </Link>
          </div>

          <div class="third">
            <Link to="/thirdyear">
              <button>Third Year</button>
            </Link>
          </div>
        </div>

        <div class="right">
          <div class="fourth">
            <Link to="/fourthyear">
              <button>Fourth Year</button>
            </Link>
          </div>

          <div class="fifth">
            <Link to="/fifthyear">
              <button>Fifth Year</button>
            </Link>
          </div>

          <div class="sixth">
            <Link to="/sixthyear">
              <button>Sixth Year</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
