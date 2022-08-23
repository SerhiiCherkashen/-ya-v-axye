import React from 'react'
import p from './Posts.module.css'
import Post from './Post/Post'

 

let Posts =(props)=>{
    let messegdata=[{id :1 ,messeg :'Hello world' , like : 7},
                    {id :2 ,messeg : 'I am a apple' , like : 1},
                    {id :3 ,messeg :'My name Jekk' , like : 29},
                    {id :4 ,messeg :'Hello man' , like : 131}, ]

    let posts=messegdata.map(el=> <Post messeg={el.messeg} like={el.like}/>)  
    return(
        <div className={p.post}>
            { posts}
        </div>
    )
}
    export default Posts