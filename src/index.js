import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Articles from './components/Articles/Articles';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Discipline from './Discipline/Discipline';
import Recomends from './components/Recomends/Recomends';
import Blog from './components/Blog/Blog';
import Button from './components/Button/Button';
import Shop from './components/Shop/Shop';
import Logging from './components/Logging/Logging';
import Calculate from './components/Calculate/Calculate';
import Table from './components/Table/Table';
import Footer from './components/Footer/Footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <BrowserRouter>
        <Navigation/>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/articles" element={<Articles/>}></Route>
            <Route path="/discipline" element={<Discipline/>}></Route>
            <Route path="/information" element={<Recomends/>}></Route>
            <Route path="/blog" element={<Blog/>}></Route>
            <Route path="/shop" element={<Shop/>}></Route>
            <Route path="/logging" element={<Logging/>}></Route>
            <Route path="/calculate" element={<Calculate/>}></Route>
            <Route path="/table" element={<Table/>}></Route>
            <Route path="/footer" element={<Footer/>}></Route>
            
            
            
            
           
           
            
            
            
        </Routes>
    </BrowserRouter>
    <Button></Button>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
