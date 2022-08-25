import React from "react";
import './Povtordialogs.css';
import { NavLink } from 'react-router-dom'

let Imena = (props) => {
    return (
        <NavLink to={'/povtor/' + props.id} >{props.name}</NavLink>
    )
}
let Texts = (props) => {
    return (
        <div>{props.el}</div>
    )
}
let Povtordialogs = (props) => {
    let namesdata =
        props.state.names.map(iter => <Imena id={iter.id} name={iter.name} />)
    let textsdata =
        props.state.texts.map(iter => <Texts el={iter.text} />)
    return (
        <div className='pcentr' >
            <div>
                <h1>Povtordialogs</h1>

            </div>
            <div className='pnames'>
                {namesdata}
            </div>
            <div className='ptext'>
                {textsdata}
            </div>
        </div>)
}
export default Povtordialogs