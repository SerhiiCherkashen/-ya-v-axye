import React from "react";
import exp from './../Expiriens.module.css';
import { NavLink, Route } from "react-router-dom";

let ExpMenu=(props)=>{
    return(
        <div className={exp.link} >
        <div>
            <NavLink to='/expiriens/qwerty' >Qwerty</NavLink>
        </div>
        <div>
            <NavLink to='/expiriens/asd' >Asd</NavLink>
        </div>
        <div>
            <NavLink to='/expiriens/pop' >Pop</NavLink>
        </div>
        </div>
    )
}
export default ExpMenu