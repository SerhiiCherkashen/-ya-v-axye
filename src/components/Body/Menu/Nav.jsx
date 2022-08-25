import React from 'react'
import classes from'./Nav.module.css'
import { NavLink } from 'react-router-dom'

let Nav =()=>{
    return(
        <nav   className={classes.nav}>
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
          <div className={classes.item}>
            <NavLink to="/povtor"  activeClassName={classes.activeLink} >Povtordialogs</NavLink>
            </div>
          <h1   className={classes.h3}>Best Friends</h1>
          <div className={classes.bestf} >
            <div className={classes.kiti} >
              <img  src="https://abrakadabra.fun/uploads/posts/2022-01/1642462284_7-abrakadabra-fun-p-topovie-avi-na-vatsap-13.jpg"  />
              <h5>  Ben  </h5>
            </div>
            <div className={classes.kiti} >
              <img   src="https://abrakadabra.fun/uploads/posts/2022-01/1642462284_7-abrakadabra-fun-p-topovie-avi-na-vatsap-13.jpg"  />
              <h5> Jlaf </h5>   
            </div>
            <div className={classes.kiti} >
              <img src="https://abrakadabra.fun/uploads/posts/2022-01/1642462284_7-abrakadabra-fun-p-topovie-avi-na-vatsap-13.jpg"  />
              <h5> lol</h5> 
            </div>
            <div>
            </div>
          </div>
        </nav>
    )
}
export default Nav
