import React from 'react'
import './Music.css'
import {NavLink, Route} from 'react-router-dom'

let ArtistItem=(props)=>{
    return(
        <div className='artist'>
        <NavLink to={'/music/' + props.id}>{props.name}</NavLink>
        </div>
    )   
}
let PisnaItem=(props)=>{
    return(
        <div className='text' >{props.nazva}</div>
    )
}

let Music=(props)=>{
    let musicdata=[
        {id : 1, name:'Miagi'},
        {id : 2, name:'KG'},
        {id : 3, name:'Kalush'},
        {id : 4, name:'Eminem'},
    ]
    return(
<div className='music' >
    <h1>Music</h1>
    <div className='artisti'>
        <ArtistItem name={musicdata[0].name} id={musicdata[0].id} />
        <ArtistItem name={musicdata[1].name} id={musicdata[1].id} />
        <ArtistItem name={musicdata[2].name} id={musicdata[2].id} />
        <ArtistItem name={musicdata[3].name} id={musicdata[3].id} />
    </div>
    <div className='pisni' >
        <PisnaItem nazva="Panda"/>
        <PisnaItem nazva="Tabor"/>
        <PisnaItem nazva="Stefania"/>
        <PisnaItem nazva="NewYork"/>
        
    </div>


</div>

    )
}
export default Music