import React from 'react'
import p from './Posts.module.css'
import Post from './Post/Post'
import {addpostActionCreater,updaitenewposttextActionCreater} from '../../../../Redax/state'

let Posts =(props)=>{
    let posts=   props.messegdata.map(el=> <Post messeg={el.messeg} like={el.like}/>)  
    
    let newPost = React.createRef();

    let addPost =()=>{
      
      props.dispatch(addpostActionCreater());
      
    } 
    let onPostChange=()=>{
      
      let text = newPost.current.value
      let action= (updaitenewposttextActionCreater(text));
      props.dispatch(action)
      
    }
      return(
          <div>
            <div className={p.button}>        
            <textarea  onChange={onPostChange  }  ref={ newPost } 
           value={props.newPostText} /> 
            <button onClick={ addPost } >add Close</button>
          </div>
          <div className={p.post}>
              { posts}
          </div>
          </div>
    )
}
    export default Posts