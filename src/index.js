
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

import state, { subscribe } from './Redax/state';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import { addPost, updaiteNewPostText } from './Redax/state';

export let rerenderEntireTree = (state) => {

    let root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(

        < React.StrictMode >
            <App state={state} addPost={addPost}
                updaiteNewPostText={updaiteNewPostText} />

        </React.StrictMode >
    );
}
rerenderEntireTree(state)

subscribe(rerenderEntireTree)

reportWebVitals();
