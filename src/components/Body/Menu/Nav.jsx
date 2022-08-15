import React from 'react'
import classes from'./Nav.module.css'

let Nav =()=>{
    return(
        <nav className={classes.nav}>
          <div className={classes.item}> 
          <a href="/centr">Profile</a>
          </div>
          <div className={classes.item}>
            <a href="/dialogs">Messedg</a>
            </div>
          <div className={classes.item}>
            <a  >  News</a></div>
          <div className={classes.item}>
            <a  >  Music</a></div>
          <div className={classes.item}>
            <a  >  Setings</a></div>
        </nav>
    )
}
export default Nav