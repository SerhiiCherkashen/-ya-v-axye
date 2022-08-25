import React from "react";
import exp from './Expiriens.module.css';
import { NavLink, Route } from "react-router-dom";
import ExpMenu from './ExpMenu/Expmenu';
import ExpContent from './ExpContent/Expcontent'



let Expiriens=(props)=>{
    return( 
        <div  className={exp.content} >
            <div className={exp.left} >
            <ExpMenu/>
            </div>
            <div className={exp.right} >
            <ExpContent leftdata={props.state.leftdata} rightdata={props.state.rightdata} />
            </div>
        </div>
    )
}
export default Expiriens
