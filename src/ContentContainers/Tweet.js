import React, { Component, useState, useEffect } from 'react';

// redux
import { connect } from 'react-redux';
import {  } from '../actionCreators'



const Tweet = props => {
    const [tweet, setTweet] = useState({})

    
    useEffect(() => {
        fetch(`http://localhost:3000/tweet`, {
            headers: {
                "TweetUrl": props.tweet_url
            }
        })
            .then(resp => resp.json())
            .then(body => {
                console.log(body)
                setTweet(body)
            })
    }, [])


    return (
        <div >
            {tweet.html && <div className="tweet" dangerouslySetInnerHTML={{ __html: tweet.html }}></div>}
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
