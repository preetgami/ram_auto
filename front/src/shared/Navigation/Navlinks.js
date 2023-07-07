import React from 'react'
import { NavLink } from "react-router-dom";
import "./Navlink.css"
function Navlinks(props) {
  return (<ul className='nav-links'>
        <li>
              <NavLink to="/" exact>
            HOME
              </NavLink>
        </li>
        <li>
              <NavLink to="/about" exact>
                ABOUT US
              </NavLink>
        </li>
      <li>
          <NavLink to="/services" exact>
              SERVICES
          </NavLink>
      </li>
     
        <li>
            <NavLink to="/use" exact>
                How to Use
            </NavLink>
        </li>
        <li>
            <NavLink to="/auth" exact>
                  Log In
            </NavLink>
        </li>
        <li>
            <NavLink to="/user/:uid" exact>
                Your Status
            </NavLink>
        </li>

        
    </ul>
    )
}

export default Navlinks