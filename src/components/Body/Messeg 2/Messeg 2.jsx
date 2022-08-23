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
                    {id:6, name: 'Staici'}
                ]
    let listdata=[  {id : 1,list :'Hello'},
                    {id : 2,list :'Hi'},
                    {id : 3,list :'Privet'},
                    {id : 4,list :'Fack'},
                    {id : 5,list :'HoHoHo'},
                    {id : 6,list :"Gooooood morning VIETNAM" },
                ]
    let messegelement=messegdata.map(dialogs=>{
        return(<MessegName id={dialogs.id} name={dialogs.name}/>  )
    } 
) 
    let listelements=listdata.map(pismo=> <Lists list={pismo.list} />)
            
 return(
    <div className={mes.content} >
    <h1>MESSEG</h1>
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