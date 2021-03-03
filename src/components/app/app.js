import React from 'react';
import {NavBar} from '../navBar/navBar';
import {Posts} from '../posts/posts';
import {Subreddits} from '../subreddits/subreddits'
import './app.css';

function App(){
    return (
        <div id="mainContainer">
            <NavBar />
            <Posts />
            <Subreddits />
        </div>
    )
}

export default App; 