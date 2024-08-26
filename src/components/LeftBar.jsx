import React from "react";

function Bar({ handleClick }) {
  return (
    <div className="left-bar flex-column">
      <div className="icons">
        <a>
          <i class="fa-solid fa-gamepad icon" style={{ color: "#ffffff" }}></i>
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

      <div className="left-button">
        <a>
          <div className="button">My Hub</div>
        </a>
        <a onClick={handleClick}>
          <div className="button">All Games</div>
        </a>
        <a>
          <div className="button">İnstalled</div>
        </a>
        <a>
          <div className="button">Not Installed</div>
        </a>
      </div>
    </div>
  );
}

export default Bar;
