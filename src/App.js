//import logo from './logo.svg';
import './App.css';

import React from 'react'
import Header from './components/Head/Header';
import Nav from './components/Body/Menu/Nav';
import Centr from './components/Body/CenterContent/Center';
import Dialogs from './components/Body/Dialogs/Dialogs'
import Messeg from './components/Body/Messeg 2/Messeg 2';
import News from './components/Body/News/News';
import Music from './components/Body/Music/Music';
import Seting from './components/Body/Seting/Seting';
import Expiriens from './components/Body/Expiriens/Expiriens'
import Povtordialogs from './components/Body/Povtordialogs/Povtordialogs';
import { BrowserRouter, Route } from 'react-router-dom';


let App = (props) => {

  return (
    <BrowserRouter>
      <div className="app-w" >
        <Header />
        <div className='content' >
          <div className='menu' >
            < Nav />
          </div>
          <div className='right' >
            <Route path='/centr' render={() => < Centr
              centrpage={props.state.centrpage}
              addPost={props.addPost}
              updaiteNewPostText={props.updaiteNewPostText} />} />
            <Route path='/dialogs' render={() => <Dialogs />} />
            <Route path='/messeg' render={() => <Messeg
              state={props.state.messegepage} />} />
            <Route path='/news' render={() => <News />} />
            <Route path='/music' render={() => <Music />} />
            <Route path='/seting' render={() => <Seting />} />
            <Route path='/expiriens' render={() => <Expiriens
              state={props.state.expirienspage} />} />
            <Route path='/povtor' render={() => <Povtordialogs
              state={props.state.povtorpage} />} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
