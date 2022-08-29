import React from 'react'
import p from './Posts.module.css'
import Post from './Post/Post'

 

let Posts =(props)=>{
  // let posts=   props.messegdata.map(el=> <Post messeg={el.messeg} like={el.like}/>)  
  
//   let newPostRef=React.createRef()
//   let addPost = () => {
//   let text = newPostRef.current.value
//     props.addPost(text)
//     newPostRef.current.value= "";
// // }
// let addPost = () => {
//   let text = document.getElementById('new-post').value
//   alert(text)
// }
//     return(
//         <div  className={p.post}>

//         <div className={p.button} >
//           <textarea  ref={'new-post'} ></textarea> 
//         </div>
//         <div className={p.button}  >    
//           <button onClick={ addPost } >add Close</button>
//         </div>
//         <div   className={p.post}>
//             { posts}
//         </div>
//         </div>
    let posts=   props.messegdata.map(el=> <Post messeg={el.messeg} like={el.like}/>)  

    let addPost = () => {
      let text = document.getElementById('new-post').value
      alert(text)
  }
      return(
          <div>
          <div className={p.button} >
            <textarea  id='new-post'  ></textarea> 
          </div>
          <div className={p.button}  >    
            <button onClick={ addPost } >add Close</button>
          </div>
          <div className={p.post}>
              { posts}
          </div>
          </div>
    )
}
    export default Posts