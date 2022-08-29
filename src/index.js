import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './Redax/state'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    < React.StrictMode >
        <App appState={state} />
    </React.StrictMode >
);
reportWebVitals();


// fgghhjhjhj

// import reportWebVitals from './reportWebVitals';
// import { rerenderEntireTree } from './render';
// import state from './Redax/state'

// rerenderEntireTree(state)

// reportWebVitals();