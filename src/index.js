
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App'
// import { addPost, updaiteNewPostText } from './Redax/state';
// import { subscribe } from './Redax/state';
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App'
// import { addPost, updaiteNewPostText } from './Redax/state';
// import { subscribe } from './Redax/state';
// import { rerenderEntireTree } from './render'

import store from './Redax/state';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'

let rerenderEntireTree = (state) => {

    let root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(

        < React.StrictMode >

            <App state={state} dispatch={store.dispatch.bind(store)} />
        </React.StrictMode >
    );

}
rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)

reportWebVitals();
