import React, { useState } from 'react';
import './posts.css';
import {LiveThreads} from './liveThreads/liveThreads';


export function Posts(){

    const [postsData, setPostsData] = useState([
        {
            title: 'Post title example',
            author_fullname: 'u/authorofthepost',
            upvotes: '100k',
            contents: 'example of contents of a post, example of contents of a post, example of contents of a post, example of contents of a post,example of contents of a post,example of contents of a post,example of contents of a post,example of contents of a post,example of contents of a post,example of contents of a post,example of contents of a post,example of contents of a post,',
        }
    ])

    return (
        <div id="postsContainer">
                {postsData.map((postData) => (
                    <LiveThreads postsData={postData}/>
                 ))}
        </div>
    )
}