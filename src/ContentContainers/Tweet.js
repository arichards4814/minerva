import React, { Component, useState, useEffect } from 'react';
import TweetEmbed from 'react-tweet-embed'

// redux
import { connect } from 'react-redux';
import {  } from '../actionCreators'



const Tweet = props => {
    const [tweetId, setTweetId] = useState({})

    
    useEffect(() => {
       setTweetId(props.tweet_url.split("/")[5])
    },[])


    return (
        <div>
            <TweetEmbed id={tweetId} />
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
