import React from 'react'
import classes from'./Nav.module.css'
import { NavLink } from 'react-router-dom'

let Nav =()=>{
    return(
        <nav className={classes.nav}>
          <div className={classes.item}> 
          <NavLink to="/centr" activeClassName={classes.activeLink} >Profile</NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to="/dialogs" activeClassName={classes.activeLink} >Dialogs</NavLink>
            </div>
          <div className={classes.item}>
            <NavLink to="/messeg" activeClassName={classes.activeLink} >Messeg</NavLink>
            </div>
          <div className={classes.item}>
            <NavLink to="/news" activeClassName={classes.activeLink}  >News</NavLink>
            </div>
          <div className={classes.item}>
            <NavLink to="/music"  activeClassName={classes.activeLink} >Music</NavLink>
            </div>
          <div className={classes.item}>
            <NavLink to="/seting"  activeClassName={classes.activeLink} >Setings</NavLink>
            </div>
          <div className={classes.item}>
            <NavLink to="/expiriens"  activeClassName={classes.activeLink} >Expiriens</NavLink>
            </div>
        </nav>
    )
}
export default Nav