import React from 'react'
import p from './Posts.module.css'
import Post from './Post/Post'

let Posts =()=>{
    debugger
    return(
<div className={p.post}  >
<div className={p.item}>ava+diskripshen</div>
<div className={p.item}>New post</div>
<div className={p.item}>My post</div>
<Post messeg='Hello world' name='  Mena zovyt Igor' />
<Post messeg='I am a apple' />
<Post name='My name Jekk'/>
<Post />
</div>
    )}

    export default Posts