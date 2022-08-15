//import logo from './logo.svg';
import './App.css';

import React from 'react'
import Header from './components/Head/Header';
import Nav from './components/Body/Menu/Nav';
import Centr from './components/Body/CenterContent/Center';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';


let App = () => {
  return (
    < BrowserRouter>
      <div className="app-w" >
        <Header />
        <div className='content' >
          < Nav />
          <div className='right' >
            <Route path='/centr' component={Centr} />
            <Route path='/dialogs' component={Dialogs} />

          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
