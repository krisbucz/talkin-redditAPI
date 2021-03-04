import React, { useState } from 'react';
import './liveThreads.css';
import arrow from '../../../images/arrow.png'
import comments from '../../../images/comments.png'

export function LiveThreads(props){

    const {postsData} = props;

    return(
        <div className="threadsPost">
            <section className="upvoteSection">
                <img src={arrow} className="upvote"/>
                <p>{postsData.upvotes}</p>
                <img src={arrow} className="downvote"/>
            </section>
            <section className="postSection">
                <h2>{postsData.title}</h2>
                <hr />
                <p>{postsData.contents}</p>
                <hr />
                <author>{postsData.author_fullname}</author>
                <img src={comments}/>
            </section>
        </div>
    )
}