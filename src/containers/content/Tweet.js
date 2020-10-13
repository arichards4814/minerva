import React, { useEffect } from 'react';
import TweetEmbed from 'react-tweet-embed';

const Tweet = props => {

    useEffect(() => {
        if (props.getNewLessonImage){
            props.getNewLessonImage("/twitterIcon.png")
            }}
    , [])

    return (
        <div>
            <TweetEmbed id={props.tweet_url.split("/")[5]} />
        </div>
    );
}


export default Tweet;
