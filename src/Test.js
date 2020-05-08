import React, { Component, useState, useEffect } from 'react';
import './App.css';
import Tweet from './ContentContainers/Tweet'

// redux
import { connect } from 'react-redux';
import {  } from './actionCreators'
import TikTok from './ContentContainers/TikTok';



const Test = props => {
   

    return (
        <div>
            <Tweet tweet_url="https://twitter.com/IGN/status/1258026570410872835" />
            <TikTok tiktok_url="https://www.tiktok.com/@imkevinhart/video/6821691366138006789" />
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

export default connect(mapStateToProps, mapDispatchToProps)(Test);
