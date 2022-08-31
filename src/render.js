import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addPost, updaiteNewPostText } from './Redax/state';

export let rerenderEntireTree = (state) => {

    let root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(

        < React.StrictMode >
            <App state={state}
                addPost={addPost}
                updaiteNewPostText={updaiteNewPostText}
            />
        </React.StrictMode >
    );
}
  // reportWebVitals();

// reportWebVitals();

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { importPosts } from './Redax/state'
// import { BrowserRouter } from 'react-router-dom';

// importPosts('Serhii you krasavchik')

// export let rerenderEntireTree = (state) => {

//     const root = ReactDOM.createRoot(document.getElementById('root'));
//     root.render(
//         < React.StrictMode >s
//             < BrowserRouter>
//                 <App appState={state} newPost={importPosts} />
//             </BrowserRouter>
//         </React.StrictMode >
//     );
// }
// rerenderEntireTree()

