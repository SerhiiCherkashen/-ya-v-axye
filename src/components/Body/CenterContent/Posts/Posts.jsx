import React from 'react'
import p from './Posts.module.css'
import Post from './Post/Post'

let Posts =(props)=>{
    let posts=   props.messegdata.map(el=> <Post messeg={el.messeg} like={el.like}/>)  
    
    let newPost =React.createRef()
    let addPost =()=>{
      let con = newPost.current.value
      props.addPost(con)
      newPost.current.value=' '
    } 
  //   let addPost = () => {
  //     let text = document.getElementById('newPost').value
  //     props.addPost(text)
  // }
      return(
          <div>
            <div className={p.button}>        
            <textarea  ref={newPost}  ></textarea>   
            <button onClick={ addPost } >add Close</button>
          </div>
          <div className={p.post}>
              { posts}
          </div>
          </div>
    )
}
    export default Posts