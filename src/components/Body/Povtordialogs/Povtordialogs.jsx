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
    alert(area) 
    }
        let newPostElement=React.createRef()
        let redj =()=>{
        let text = newPostElement.current.value
        alert(text)
    }
    let a =()=>{
        let pershii =document.getElementById('experement1').value
        alert(pershii)
    } 
    let secondExperement=React.createRef()
    let second =()=>{
        let content = secondExperement.current.value
        alert(content)
    }
    let func=()=>{
        let tet= document.getElementById('summer').value
        alert(tet)
    }
    let oktober = React.createRef()
    let september=()=>{
        let qwe=oktober.current.value
        alert(qwe)
    }
    


    return (
        <div className='pcentr' >
            <div>
                <h1>Povtordialogs</h1>
            </div>
            <div  className='pOnVlick' >  
            <div>
                <textarea id='area' ></textarea>
                <button onClick={fn } >click</button>

            </div>
            <div>
                <textarea ref={newPostElement} ></textarea>
                <button onClick={redj } >REF</button>

            </div>
            <div>
                <textarea id='experement1' ></textarea>
                <button onClick={a} >FirstExp</button>
            </div>
            <div>
                <textarea ref={secondExperement} ></textarea>
                <button  onClick={second} >second</button>
            </div>
            <div>
                <textarea id='summer'></textarea>
                <button  onClick={func}>  Leto</button>
            </div>
            <div>
                <textarea ref={oktober}  ></textarea>
                <button onClick={september}  >autem</button>
            </div>
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