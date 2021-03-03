import React, {useState} from 'react';
import './subreddits.css';
import {Subreddit} from './subreddit/subreddit'

export function Subreddits(props){

    const [subredditArray, addSubreddit] = useState([
        {
            name: 'r/subredditExample',
            icon: '../../images/menuMobile.png'
        },
        {
            name: 'r/subredditExample',
            icon: '../../images/menuMobile.png'
        },
        {
            name: 'r/subredditExample',
            icon: '../src/images/searchMobile.png'
        }
    ])

    return (
        <div id="subredditsContainer">
            <ul id="subredditsList">
                {subredditArray.map((subreddit) => (
                    <Subreddit subreddit={subreddit}/>
                 ))}
            </ul>
        </div>
    )
}