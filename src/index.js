import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import {Header ,Nav,Footer,Home,NewPost,PostPage,About,Missing} from "./component";
import { BrowserRouter , Route , Routes } from "react-router-dom";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <App />
    
    </BrowserRouter>
 );
