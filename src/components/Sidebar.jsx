import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <div className="left-bar flex-column">
        <div className="icons">
          <a>
            <i
              class="fa-solid fa-gamepad icon"
              style={{ color: "#ffffff" }}
            ></i>
          </a>

          <div>
            <a>
              <i
                class="fa-solid fa-arrow-left icon"
                style={{ color: "#ffffff" }}
              ></i>
            </a>
            <a>
              <i
                class="fa-solid fa-arrow-right icon"
                style={{ color: "#ffffff" }}
              ></i>
            </a>
            <a>
              <i
                class="fa-solid fa-rotate-right icon"
                style={{ color: "#ffffff" }}
              ></i>
            </a>
          </div>
        </div>

        <div className="left-button flex-column">
          <Link to="" className="button">
            My Hub
          </Link>

          <Link to="/all-games" className="button">
            All Games
          </Link>

          <Link to="" className="button">
            Installed
          </Link>

          <Link to="" className="button">
            Not Installed
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
