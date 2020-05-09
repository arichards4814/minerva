import React, { Component, useState, useEffect } from 'react';
import './App.css';
import Tweet from './ContentContainers/Tweet'

// redux
import { connect } from 'react-redux';
import {  } from './actionCreators'
import TikTok from './ContentContainers/TikTok';

import MaterialFrame from './ContentContainers/MaterialFrame';
import SpotifyFrame from './ContentContainers/SpotifyFrame';



const Test = props => {
   
    const testGettingIframeInfo = () => {

    }

    return (
        <div>
            <SpotifyFrame material_url="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3"/>
            {/* <iframe src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> */}
            {/* <Tweet tweet_url="https://twitter.com/IGN/status/1258026570410872835" />
            <TikTok tiktok_url="https://www.tiktok.com/@imkevinhart/video/6821691366138006789" /> */}
            <MaterialFrame material_url="https://en.wikipedia.org/wiki/1974_White_House_helicopter_incident"></MaterialFrame>
            {/* <iframe src="https://onezero.medium.com/why-im-joining-facebook-s-oversight-committee-f5b0c30f2d14" style={{width:"100%", height: 600}}></iframe> */}
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
