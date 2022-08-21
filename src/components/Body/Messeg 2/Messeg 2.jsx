import React from "react";
import { NavLink } from 'react-router-dom' ;
import mes from './Messeg2.module.css';

let MessegName=(props)=>{
    return(
        <div>
   <NavLink to={'/messeg/' + props.id} >{props.name}</NavLink>
        </div>
    )
}
let Lists=(props)=>{
    return(
        <div>{props.list} </div>
    )
}

let Messeg=(props)=>{
    let messegdata=[{id:1, name: 'Stepan'},
                    {id:2, name: 'Lena'},
                    {id:3, name: 'Sasha'},
                    {id:4, name: 'Mikola'},
                    {id:5, name: 'Vitia'},
                    {id:6, name: 'Staici'}]
 return(
    <div className={mes.content} >
    <h1>MESSEG</h1>
        <div className={mes.name}>
             <MessegName id={messegdata[0].id} name={messegdata[0].name}/>
             <MessegName id={messegdata[1].id} name={messegdata[1].name}/>
             <MessegName id={messegdata[2].id} name={messegdata[2].name}/>
             <MessegName id={messegdata[3].id} name={messegdata[3].name}/>
             <MessegName id={messegdata[4].id} name={messegdata[4].name}/>
             <MessegName id={messegdata[5].id} name={messegdata[5].name}/> 
        </div>
        <div className={mes.lists}>
                    <Lists list="Hi" />
                    <Lists list="Hello" />
                    <Lists list="Privet" />
                    <Lists list="Fack" />
                    <Lists list="HoHoHo" />
                    <Lists list="Gooooood morning VIETNAM" />
        </div>
    </div>
  )
}
export default Messeg
