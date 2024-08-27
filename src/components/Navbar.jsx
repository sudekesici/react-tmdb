import React from "react";

function Navbar() {
  return (
    <div className="header">
      <div className="header-left flex-row">
        <a>
          <div className="button">Home</div>
        </a>
        <a>
          <div className="button">Party</div>
        </a>
        <a>
          <div className="button">Rewind</div>
        </a>
        <a>
          <div className="button">News</div>
        </a>
      </div>

      <div className="header-right flex-row">
        <div>
          <input placeholder="Search movie titles " className="search"></input>
          <a>
            <i
              class="fa-solid fa-magnifying-glass"
              style={{ color: "#ffffff" }}
            ></i>
          </a>
        </div>

        <div className="user">
          <i class="fa-solid fa-circle-user" style={{ color: "#ffffff" }}></i>
          <select className="user-select">
            <option></option>
          </select>
        </div>

        <a className="header-icon">
          <i
            class="fa-solid fa-window-minimize"
            style={{ color: "#ffffff" }}
          ></i>
        </a>
        <a className="header-icon">
          <i
            class="fa-regular fa-window-restore"
            style={{ color: "#ffffff" }}
          ></i>
        </a>
        <a className="header-icon">
          <i class="fa-solid fa-xmark" style={{ color: "#ffffff" }}></i>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
