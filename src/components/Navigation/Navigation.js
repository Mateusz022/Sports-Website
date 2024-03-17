import {Link } from "react-router-dom";
import { Component } from "react";
import "./Navigation.css";
import { NavLink } from 'react-router-dom';
import Logging from "../Logging/Logging";
import Calculate from "../Calculate/Calculate";
import Footer from "../Footer/Footer";


export default class Navigation extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><Link to="/">Strona Głowna</Link></li>
                    <li><Link to="/articles">Artykuły</Link></li>
                    <li><Link to="/discipline">Dyscyplina </Link></li>
                    <li><Link to="/information">Informacje</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/shop">Sklep</Link></li>
                    
                  
                 
                   

                 
                    

                    
                 
                   
                    
                    
                </ul>
            </nav>
        );
    }
}