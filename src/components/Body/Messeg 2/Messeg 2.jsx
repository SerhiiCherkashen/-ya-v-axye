import React from "react";
import { NavLink } from 'react-router-dom' ;
import mes from './Messeg2.module.css';

let MessegName=  (props)=>{
    return(
        <div>
   <NavLink to={'/messeg/' + props.id} >{props.name}</NavLink>
        </div>
    )
}
let Lists=(props)=>{
    return(
        <div>{props.imege}  {props.list} </div>
    )
}

let Messeg=(props)=>{

    let messegelement=
    props.state.messegdatta.map(dialogs=>{
        return(<MessegName id={dialogs.id} name={dialogs.name}/>  ) } ) 

    let listelements=
    props.state.listdata.map(pismo=> <Lists list={pismo.list} imege={pismo.imege} />)
            
    let addOpen =()=>{
        alert("POOOOP")
    }
     return(
    <div className={mes.content} >
    <h1>MESSEG</h1>
    <button onClick={addOpen}  >open</button>
        <div className={mes.name}>
            {messegelement}
        </div>
        <div className={mes.lists}>
            {listelements}
        </div>
    </div>
  )
}
export default Messeg