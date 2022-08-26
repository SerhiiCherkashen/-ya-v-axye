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
    let namesdata =   props.state.names.map(iter => <Imena id={iter.id} name={iter.name} />)
    let textsdata =   props.state.texts.map(iter => <Texts el={iter.text} />)
    let fn=()=>{
        let area = document.getElementById('area').value
    alert(area) }

        let newPostElement=React.createRef()
        let redj= ()=>{
        let text=   newPostElement.current.value
        alert(text)
    }


    return (
        <div className='pcentr' >
            <div>
                <h1>Povtordialogs</h1>
            </div>
            <div>
                <textarea id='area' ></textarea>
                <button onClick={fn } >click</button>

            </div>
            <div>
                <textarea ref={newPostElement} ></textarea>
                <button onClick={redj } >REF</button>

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