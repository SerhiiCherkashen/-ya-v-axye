import React from 'react';
import dia from './Dialogs.module.css'
import { BrowserRouter, Route } from 'react-router-dom';
import Ola from './Messenger/Ola/Ola';
import Den from './Messenger/Den/Den';
import Dname from './DName/DName';

let Dialogs=(props)=>{
    return(
        <BrowserRouter>
        <div className={dia.content} > 
          <div className={dia.names}>
             <Dname />
          </div>
          <div  className={dia.perepiska} >
            < Route path='/ola' component={Ola}/>
            < Route path='/den' component={Den} />
          </div>
        </div>  
        </BrowserRouter>
   )
}
export default Dialogs
