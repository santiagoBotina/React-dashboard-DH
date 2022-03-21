import React from "react";
import "./nav.css";

function Nav() {
  return (
    <React.Fragment>
      <div className="nav">
        <div className="nav-right">SportWear</div>
        <div className="nav-left">Admin</div>
      </div>
    </React.Fragment>
  );
}

export default Nav;
