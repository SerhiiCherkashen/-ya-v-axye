import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import { addPost } from './Redax/state';
export let rerenderEntireTree = (state) => {

    let root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(

        < React.StrictMode >
            <App state={state} addPost={addPost} />
            {/* updaiteNewPostText={updaiteNewPostText}  */}
        </React.StrictMode >
    );
}