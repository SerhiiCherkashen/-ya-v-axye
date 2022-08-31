import React from 'react'
import p from './Posts.module.css'
import Post from './Post/Post'

let Posts =(props)=>{
    let posts=   props.messegdata.map(el=> <Post messeg={el.messeg} like={el.like}/>)  
    
    let newPost =React.createRef();

    let addPost =()=>{
      let text = newPost.current.value
      props.addPost(text)
      props.updaiteNewPostText('')
    } 
    let onPostChange=()=>{
      let text = newPost.current.value
      props.updaiteNewPostText(text)
    }
  //   let addPost = () => {
  //     let text = document.getElementById('newPost').value
  //     props.addPost(text)
  // }
      return(
          <div>
            <div className={p.button}>        
            <textarea  onChange={onPostChange} ref={newPost} value={props.newPostText} /> 
            <button onClick={ addPost } >add Close</button>
          </div>
          <div className={p.post}>
              { posts}
          </div>
          </div>
    )
}
    export default Posts