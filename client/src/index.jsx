import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app.jsx';
//import Styles from 'style-loader!css-loader?modules!./app.css'
//import "./app.css";

//testdevelep
// ,
//            options: {
//             modules: true,
//            },

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);