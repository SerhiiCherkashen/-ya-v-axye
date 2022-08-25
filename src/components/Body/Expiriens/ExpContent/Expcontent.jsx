import React from "react";
import exp from './../Expiriens.module.css';
import { NavLink, Route } from "react-router-dom";

let Right=(props)=>{
    return(
    <div className={exp.crighttext}>{props.text} </div>
    )
}
let Leftqwerty=(props)=>{
    return(
        <div>
            <NavLink to= { `/expiriens/`+ props.id}>{props.el}</NavLink>
        </div>
    )
}

    let ExpContent=(props)=>{
let leftq =
props.leftdata.map(a => <Leftqwerty id={a.id} el={a.el} /> )

let rightq=
props.rightdata.map(b=>  <Right text={b.text}/>)

    return(
    <div className={exp.ccentr}>
        <div className={exp.cleft}>
            {leftq}
        </div>
         <div className={exp.cright}>
            {rightq}
         </div>
    </div>
    )
}
export default ExpContent