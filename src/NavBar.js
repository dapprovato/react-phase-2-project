import React from 'react';
import { NavLink } from 'react-router-dom';

const linkStyles = {
    display: "inline-block",
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "pink",
    fontSize: "20px",
    fontWeight: "bold",
    textDecoration: "none",
    color: "white",
}

function NavBar() {
    return (
    <div>
        <NavLink
              to="/paintings"
              exact
              style={linkStyles}
              activeStyle={{
                background: "darkblue",
              }}
            > 
              Paintings       
            </NavLink>
            <NavLink
              to="/statues"
              exact
              style={linkStyles}
              activeStyle={{
                background: "darkblue",
              }}
            >
              Statues
            </NavLink>
            <NavLink
              to="/fossils"
              exact
              style={linkStyles}
              activeStyle={{
                background: "darkblue",
              }}
            >
              Fossils
            </NavLink>
    </div>
    )
}

export default NavBar;