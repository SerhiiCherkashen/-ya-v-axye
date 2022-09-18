import React from "react";
import { NavLink } from 'react-router-dom' ;
import mes from './Messeg2.module.css';
import {UpdaiteNewMessegBodyCreater,SandMessegCreater} from '../../../Redax/state'

let MessegName=  (props)=>{ return(
        <div>
   <NavLink to={'/messeg/' + props.id} >{props.name}</NavLink>
        </div>
    )
}
let Lists=(props)=>{ return(
        <div> {props.list} </div>
    )
}

let Messeg=(props)=>{

    let state = props.store.getState().messegepage

    let messegelement= state.messegdatta.map(dialogs=>{ return(<MessegName id={dialogs.id} name={dialogs.name}/>  ) } ) 
    let listelements= state.listdata.map(pismo=> <Lists list={pismo.list} imege={pismo.imege} />)
    let newMessegBody = state.newMessegBody
    
    let onSandMessegClick=()=>{  
        debugger
        props.store.dispatch(SandMessegCreater())
        debugger
    }
    let onNewMessegChange=(e)=>{
        debugger
        let body = e.target.value
        props.store.dispatch(UpdaiteNewMessegBodyCreater(body))
        debugger
    }
    
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
           <div> {listelements}</div>
           <div>
               <div><textarea value={newMessegBody}
               onChange={onNewMessegChange}
               placeholder="Enter your messeg" ></textarea></div>
               <div><button onClick={ onSandMessegClick} >Sand</button></div>
           </div>
        </div>
    </div>
  )
     }
export default Messeg