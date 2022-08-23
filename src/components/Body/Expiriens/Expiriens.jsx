import React from "react";
import exp from './Expiriens.module.css';
import { NavLink, Route } from "react-router-dom";
// import ExpMenu from './ExpMenu/Expmenu'


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
    let ExpContent=(props)=>{
    return(
    <div>
         <h1>HYI</h1>
    </div>
)}
let Expiriens=(props)=>{
    return( 
        <div  className={exp.content} >
            <div className={exp.left} >
            <ExpMenu/>
            </div>
            <div className={exp.right} >
            <ExpContent/>
            </div>
        </div>
    )
}
export default Expiriens
