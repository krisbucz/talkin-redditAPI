import React from 'react';
import './liveThreads.css';
import arrow from '../../../images/arrow.png';
import comments from '../../../images/comments.png';

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
                <p className='author'>{postsData.author}</p>
                <img src={comments}/>
            </section>
        </div>
    )
}