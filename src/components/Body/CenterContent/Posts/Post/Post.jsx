import React from 'react'
import './Post.css'

let Post =(props)=>{
    return(
<div className='item'>
    <img className='ava' src='https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg' />
   {props.messeg}
    <div>
    LIKE {props.like}
    </div>
    </div>
    )}
    export default Post