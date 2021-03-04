import React from 'react';
import './subreddit.css';
import icon from '../../../images/searchMobile.png';

export function Subreddit(props){
    const {subreddits} = props;

    return (
        <li className="subredditItem">
            <img src={subreddits.icon === "" ? icon: subreddits.icon} />
            <h3>{subreddits.name}</h3>
        </li>
    )
}