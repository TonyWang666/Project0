import React from "react";
import {NavLink} from "react-router-dom";

const Nav = () => {
    var style = {
        "display": "flex" , 
        "justify-content": "center",
        "font-size" : "80px"
    };
    return(
        <div>
        <div>
        <NavLink to = "/" style = {style}> Home </NavLink>
        </div>
        Name of the Student:
        <ol>
       
        <li>
        <NavLink to = "/Tony"> Tony </NavLink>
        </li>
        <li>
        <NavLink to = "/Leo"> Leo </NavLink>
        </li>
        <li>
        <NavLink to = "/Jack"> Jack </NavLink>
        </li>
        </ol>
        <div style={{width:"1500px", height:"1px", background: "#E0E0E0"}}></div>
        </div>
    );

};

export default Nav;