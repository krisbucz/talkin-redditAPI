import React, { useState, useEffect } from 'react';
import './posts.css';
import {LiveThreads} from './liveThreads/liveThreads';
import redditAPI from '../app/redditAPI';


export function Posts(){

    const [postsData, setPostsData] = useState([])

    useEffect(() => { 
           redditAPI.handleOnload('ufc')
          .then(results => {
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
    }, [])

    
    return (
        <div id="postsContainer">
                {postsData.map((postsData) => (
                    <LiveThreads postsData={postsData} key={postsData.key}/>
                 ))}
        </div>
    )
}