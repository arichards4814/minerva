import PropTypes from 'prop-types';
import React from 'react';
import Timeline from './Timeline';
import Button from './Button'

class YouTube extends React.PureComponent {
    static propTypes = {
        id: PropTypes.string.isRequired,
    };

    state = {
        totalTime: 1
    }

    componentDidMount = () => {
        // On mount, check to see if the API script is already loaded

        if (!window.YT) { // If not, load the script asynchronously
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';

            // onYouTubeIframeAPIReady will load the video after the script is loaded
            window.onYouTubeIframeAPIReady = this.loadVideo;

            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        } else { // If script is already there, load the video directly
            this.loadVideo();
        }
    };

    loadVideo = () => {
        const { id } = this.props;

        // the Player object is created uniquely based on the id in props
        this.player = new window.YT.Player(`youtube-player-${id}`, {
            videoId: id,
            height: 480,
            width: 854,
            events: {
                onReady: this.onPlayerReady,
            }, //enable to play video on start... but I don't want to do that
        });
    };

    onPlayerReady = event => {
        // event.target.playVideo();
        this.setState({totalTime: this.player.getDuration()})
        this.props.getTotalTime(this.player.getDuration())
    };

    //////
    //      Helpful for what I'm trying to do:
    //   this.player.getDuration()
    //   this.player.getVideoUrl()
    //  
    /////
    //  Maybe the timeline should be in this component
    //  Timeline component
    //  NoteTag Component
    /////

    checkCurrentTime = () => {
        return Math.floor(this.player.getCurrentTime())
    }

    // checkDuration = () => {
        // if(this.player){
        //     return this.player.getDuration()
        // }
        // console.log("total time", this.player.getDuration())
    // }

    goToSpecifiedTime = (time, passUp) => {
        this.player.seekTo(time)
        passUp()
    }

    render = () => {
        const { id } = this.props;
        return (
            <div style={{ position: "relative" }}  >
                <div id={`youtube-player-${id}`}  />
                {/* <button onClick={this.goToSpecifiedTime}>Go to 45</button> */}
                {/* <Timeline totalTime={this.state.totalTime} goToSpecifiedTime={this.goToSpecifiedTime}/> */}
                <Timeline notes={this.props.notes} totalTime={this.state.totalTime} goToSpecifiedTime={this.goToSpecifiedTime} />
                {/* <button onClick={() => this.props.onClick(this.checkCurrentTime())}>Post Note</button> */}
                <div style={{position: "absolute", right: 63, zIndex: 1}}>
                    <Button theme="secondary" onClick={() => this.props.onClick(this.checkCurrentTime())}>Create</Button>
                </div>
                
            </div>
        );
    };
}

export default YouTube;