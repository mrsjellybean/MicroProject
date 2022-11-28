import React from 'react';
import ReactDOM from 'react-dom/client';
import ApiFunction from './ApiFunction';
import ChooseItem from './ChooseItem';
import ChooseAlergy from './ChooseAlergy';
import Loader from './Loader';
import FinalSearch from './FinalPage';
import './App.css';
//import{BrowserRouter, Routers, Route, Link, useParams} from "react-router-dom";
//import Todos from "./Todos";
//import Todo from "./Todo";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApiFunction />
    <ChooseItem/>
    <ChooseAlergy/>
    <Loader/>
    <FinalSearch/>
  </React.StrictMode>
  
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
