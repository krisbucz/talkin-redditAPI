import React, { useState, useEffect } from 'react';
import './posts.css';
import {LiveThreads} from './liveThreads/liveThreads';
import redditAPI from '../app/redditAPI';

export function Posts(){

    const [postsData, setPostsData] = useState([])
    const [subredditUrl, setSubredditUrl] = useState('/r/home/')

    useEffect(() => { 
           redditAPI.handleOnload(subredditUrl)
          .then(results => { console.log(results)
              results.forEach(post => {
                setPostsData((prev) => [{
                    title: post.title,
                    author: post.author,
                    upvotes: post.ups,
                    contents: post.selftext,
                    key: post.id
                }, ...prev]); 
              })
          })
    }, [subredditUrl])
/*
    useEffect(()=>{
        setSubredditUrl(()=>{
            
        })
    })
*/

    return (
        <div id="postsContainer">
                {postsData.map((postsData) => (
                    <LiveThreads postsData={postsData} key={postsData.key}/>
                 ))}
        </div>
    )
}