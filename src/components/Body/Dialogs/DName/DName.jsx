import React from "react";
import dn from './DName.module.css'
import { NavLink } from "react-router-dom";

let Dname=()=>{
    return(
            <div className= {dn.dialogContent} >
            <div className={dn.names} >
            <div className={dn.name}>
                <NavLink to='/ola'>Ola</NavLink>
                </div>      
            <div className={dn.name}>
                <NavLink to='/den'>Den</NavLink>
                </div>    
            </div>
        </div>
    )
}
export default Dname
