import React from 'react'
import './Center.css'
import Posts from './Posts/Posts'
import ImagenCentr from './Imegen/ImegenCentr'


let Center=(props)=>{


    return(
        <center className="center">
             <ImagenCentr/>
          <div className='podcentrom'>
             <Posts messegdata={props.state.messegdata}   />
          </div>
      </center>
    )}
    export default Center 