import React, { useEffect } from 'react';
import TweetEmbed from 'react-tweet-embed'

// redux
import { connect } from 'react-redux';
import {  } from '../actionCreators'



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


const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tweet);
