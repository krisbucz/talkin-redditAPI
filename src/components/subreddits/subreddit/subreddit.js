import React from 'react';
import './subreddit.css';
import icon from '../../../images/searchMobile.png';

export function Subreddit(props){
    const {subreddit} = props;

    return (
        <li className="subredditItem">
            <img src={icon} />
            <h3>{subreddit.name}</h3>
        </li>
    )
}