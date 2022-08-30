
import App from './App';
import reportWebVitals from './reportWebVitals';
import { rerenderEntireTree } from './render'
import state from './Redax/state';

rerenderEntireTree(state)
  // reportWebVitals();

// reportWebVitals();