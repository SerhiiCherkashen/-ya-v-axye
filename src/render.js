import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { importPosts } from './Redax/state'
import { BrowserRouter } from 'react-router-dom';

importPosts('Serhii you krasavchik')

export let rerenderEntireTree = (state) => {

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        < React.StrictMode >
            < BrowserRouter>
                <App appState={state} newPost={importPosts} />
            </BrowserRouter>
        </React.StrictMode >
    );
}
rerenderEntireTree()

