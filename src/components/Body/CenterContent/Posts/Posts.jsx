import React from 'react'
import p from './Posts.module.css'
import Post from './Post/Post'

let Posts =()=>{
    return(
        <div className={p.post}>
<Post messeg='Hello world' name=' Mena zovyt Igor' />
<Post messeg='I am a apple' />
<Post name='My name Jekk'/>
<Post />
</div>
 )
}
   


    export default Posts