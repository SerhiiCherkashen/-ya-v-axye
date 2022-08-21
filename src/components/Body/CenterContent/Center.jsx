import React from 'react'
import './Center.css'
import Posts from './Posts/Posts'
import ImagenCentr from './Imegen/ImegenCentr'


let Center=()=>{
    return(
        <center className="center">
          <ImagenCentr/>
      <div className='podcentrom'>
             <Posts/>
             </div>
      </center>
    )}
    export default Center 