import React from 'react';
import './navBar.css';
import logo from '../../images/logo.png';
import {Search} from './search/search';

export function NavBar(props){
    return (
    <div id="navBarContainer">
        <img src={logo} id="logo"/>
        <p id="searchText">Search:</p>
        <Search />
    </div>
    )
} 