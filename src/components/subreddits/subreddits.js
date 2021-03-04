import React, {useState, useEffect} from 'react';
import './subreddits.css';
import {Subreddit} from './subreddit/subreddit';
import redditAPI from '../app/redditAPI';

export function Subreddits(){

    const [subreddits, addSubreddit] = useState([])

    useEffect(() => { 
        redditAPI.getSubreddits()
       .then(results => {
           results.forEach(post => {
             addSubreddit((prev) => [{
                 name: post.display_name_prefixed,
                 icon: post.community_icon.split("?")[0],
                 key: post.id,
             }, ...prev]); 
           })
       })
    }, [])

console.log(subreddits);
    return (
        <div id="subredditsContainer">
            <ul id="subredditsList">
                {subreddits.map((subreddits) => (
                    <Subreddit subreddits={subreddits} key={subreddits.key}/>
                 ))}
            </ul>
        </div>
    )
}