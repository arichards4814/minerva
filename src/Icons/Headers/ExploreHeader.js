import React from 'react';
import { makeStyles } from '@material-ui/core';
import '../../assets/scss/HeaderAnimations.scss';



const useStyles = makeStyles({
    st0: {
        fill: "#04B89F"
    },
    st1: {
        fill: "#FFD000"
    },
    st2: {
        fill: "#EE3166"
    },
    st3: {
        fill:"#FFD000", 
        stroke:"#EE3166", 
        strokeMiterlimit: 10
    },
    st4: {
        fill: "#00AC62"
    }
});

export default function ExploreHeader(props) {
    const classes = useStyles(props)

    // needs to go to 155 on component did mount or on click or something.
    // if style.theme === "minerva" theme it like it should be

    return (
        <div >
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 732.85 196.81"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <g>
                    <path className={classes.st0} d="M2,189.71c0,0,403.05-90.73,716.42,0" />
                    <g>
                        <path className={classes.st1 + " jiggle"} d="M372.4,118.28h-41.05V77.11c0-11.34,9.19-69.8,20.53-69.8h0c11.34,0,20.53,58.47,20.53,69.8V118.28z" />
                        <path className={classes.st2 + " jiggle"} d="M352.59,129.14h-1.44c-0.42,0-0.77-0.34-0.77-0.77V71.93c0-0.42,0.34-0.77,0.77-0.77h1.44
			c0.42,0,0.77,0.34,0.77,0.77v56.45C353.36,128.8,353.01,129.14,352.59,129.14z"/>
                        <path className={classes.st2 + " jiggle"} d="M312.33,129.34l19.02-11.06V73.7l-14.51,7.6c-4.97,2.6-8.08,7.75-8.08,13.36v32.63
			C308.75,129.12,310.74,130.26,312.33,129.34z"/>
                        <path className={classes.st2 + " jiggle"} d="M391.41,129.34l-19.02-11.06V73.7l14.51,7.6c4.97,2.6,8.08,7.75,8.08,13.36v32.63
			C394.99,129.12,393,130.26,391.41,129.34z"/>
                        <circle className={classes.st3 + " jiggle"} cx="351.96" cy="48.14" r="8.11" />
                        <path className={classes.st2 + " exploring"} d="M339.95,160.1h-1.73c-0.51,0-0.92-0.41-0.92-0.92v-31.07c0-0.51,0.41-0.92,0.92-0.92h1.73
			c0.51,0,0.92,0.41,0.92,0.92v31.07C340.87,159.69,340.46,160.1,339.95,160.1z"/>
                        <path className={classes.st2 + " exploring2"} d="M352.83,166.54h-1.73c-0.51,0-0.92-0.41-0.92-0.92v-31.07c0-0.51,0.41-0.92,0.92-0.92h1.73
			c0.51,0,0.92,0.41,0.92,0.92v31.07C353.75,166.13,353.34,166.54,352.83,166.54z"/>
                        <path className={classes.st2 + " exploring3"} d="M364.99,150.08h-1.73c-0.51,0-0.92-0.41-0.92-0.92v-21.05c0-0.51,0.41-0.92,0.92-0.92h1.73
			c0.51,0,0.92,0.41,0.92,0.92v21.05C365.91,149.67,365.5,150.08,364.99,150.08z"/>
                        <circle className={classes.st0 + " jiggle"} cx="351.96" cy="48.14" r="7.15" />
                        <path className={classes.st4 + " jiggle"} d="M359.12,48.14c0,3.95-3.21,7.15-7.15,7.15c-2.63,0-4.94-1.42-6.17-3.55l11.68-8.18
			C358.49,44.8,359.12,46.4,359.12,48.14z"/>
                        <path className={classes.st0 + " jiggle"} d="M357.17,43.23" />
                    </g>
                </g>
            </svg>
        </div>
    )
}