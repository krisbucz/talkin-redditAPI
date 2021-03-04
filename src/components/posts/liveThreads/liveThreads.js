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
                <h2 className="title">{postsData.title}</h2>
                {postsData.contents.length > 0? <hr /> : null}
                <p className="contents">{postsData.contents.substring(0, 400) + (postsData.contents.length > 400 ? " [...Read More]" : "")}</p>
                <hr />
                <p className='author'>{postsData.author}</p>
                <img src={comments} className='commentsButton'/>
            </section>
        </div>
    )
}