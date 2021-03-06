import React from 'react';
import redditAPI from '../../app/redditAPI';
import './subreddit.css';

export function Subreddit(props){
    const {subreddits} = props;

    return (
        <li className="subredditItem">
            <img src={subreddits.icon === "" ? "https://www.net-aware.org.uk/siteassets/images-and-icons/application-icons/app-icons-reddit.png?w=585&scale=down": subreddits.icon} />
            <h3>{subreddits.name}</h3>
        </li>
    )
}