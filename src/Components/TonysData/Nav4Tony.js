import React from "react";
import {NavLink} from "react-router-dom";

const Nav4Tony = () =>{
    return(
        <div>
            <ol>
            <li>
            <NavLink to = "/Tony/"> Tony </NavLink> 
            </li>
            <li>
            <NavLink to = "/Tony/PersonalInfo"> Personal Information </NavLink>
            </li>
            <li>
            <NavLink to = "/Tony/Grades"> Grades </NavLink>
            </li>
            <li>
            <NavLink to = "/Tony/Plan"> Four Year Academic Plan </NavLink>
            </li>
            </ol>
            <div style={{width:"1500px", height:"1px", background: "#E0E0E0"}}></div>
        </div>
    )
}

export default Nav4Tony;