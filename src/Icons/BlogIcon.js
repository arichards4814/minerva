import React from 'react';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        height: props => {
            if (props.height) {
                return props.height
            } else {
                return 50
            }
        },
        width: props => {
            if (props.width) {
                return props.width
            } else {
                return 50
            }
        },
        display: "inline-block"
    },
    st0: {
        fill: "#C6C5C5",
        stroke: "#7A7A7A",
        strokeMiterlimit: 10
    },
    st1: {
        fill: "#FFFFFF",
    },
    st2: {
        fill: "#99999A",
    },
    st3: {
        fill: "#EC3366",
    },
    st4: {
        fill: "#00B69C",
    },
    st5: {
        fill: "#FFCF06",
    }
});

export default function VideoIcon(props) {
    const classes = useStyles()


    return (
        <div className={classes.root} onClick={props.onClick}>
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 225.3 225.06"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <g>
                    <g>
                        <path className={classes.st0} d="M174.62,67.19v75.41c0,6.14-3.31,11.51-8.25,14.41c-1.28,0.76-2.67,1.35-4.13,1.74
			c-1.39,0.38-2.85,0.57-4.36,0.57H27.45c-9.23,0-16.73-7.49-16.73-16.73V67.19c0-9.23,7.49-16.73,16.73-16.73h130.43
			C167.13,50.46,174.62,57.95,174.62,67.19z"/>
                    </g>
                    <rect x="26.85" y="64.56" className={classes.st1} width="83.89" height="4.06" />
                    <rect x="26.85" y="75.08" className={classes.st1} width="131.42" height="4.06" />
                    <rect x="26.85" y="85.6" className={classes.st1} width="131.42" height="4.06" />
                    <rect x="27.31" y="96.34" className={classes.st1} width="83.04" height="4.3" />
                    <rect x="27.31" y="108.09" className={classes.st1} width="83.07" height="4.44" />
                    <rect x="27.31" y="120.44" className={classes.st1} width="83.07" height="4.44" />
                    <rect x="27.31" y="131.88" className={classes.st1} width="83.07" height="4.44" />
                    <rect x="27.31" y="141.82" className={classes.st1} width="83.07" height="4.44" />
                    <rect x="114.82" y="92.69" className={classes.st1} width="44.82" height="38.27" />
                    <g>
                        <path className={classes.st2} d="M210.46,145.51c0,9.89-5.54,18.49-13.69,22.87c-2.56,0.85-5.29,1.3-8.13,1.3c-9.47,0-17.75-5.08-22.27-12.67
			c-1.28,0.76-2.67,1.35-4.13,1.74c-1.91-3.2-3.16-6.87-3.52-10.78c-1.28,0.46-2.6,0.86-3.97,1.21c0,0,4.45-22.03,19.87-30.68v1.05
			c1.43-1.16,2.96-2.21,4.63-3.09c0.01,0,0.04-0.01,0.05-0.02c2.77-0.91,5.82-1.41,9.19-1.36c0,0-0.33,1.05-1.02,2.79
			c-0.22,0.54-0.48,1.15-0.77,1.82c1.05,0.09,2.08,0.23,3.08,0.44C201.58,122.54,210.46,132.99,210.46,145.51z"/>
                    </g>
                    <g>
                        <path className={classes.st3} d="M214.58,143.75c0,11.49-7.47,21.22-17.81,24.63c-2.56,0.85-5.29,1.3-8.13,1.3c-9.47,0-17.75-5.08-22.27-12.67
			c-1.92-3.22-3.17-6.88-3.53-10.79c-0.09-0.82-0.12-1.64-0.12-2.47c0-9.15,4.74-17.19,11.9-21.81c3.73-2.4,8.13-3.87,12.84-4.08
			c0.39-0.02,0.78-0.04,1.18-0.04c0.73,0,1.45,0.02,2.17,0.1C204.13,119.02,214.58,130.16,214.58,143.75z"/>
                        <path className={classes.st4} d="M192.6,113.31c0,0-0.56,1.8-1.79,4.61c-0.3,0.67-0.65,1.41-1.04,2.19c-2.72,5.54-7.54,13.41-15.16,19.48
			c-3.36,2.68-7.27,5.01-11.78,6.63c-1.28,0.46-2.59,0.86-3.97,1.21c0,0,3.64-18.03,15.75-27.87c1.43-1.16,2.96-2.21,4.63-3.09
			c0.01,0,0.04-0.01,0.05-0.02C183.06,114.44,187.47,113.23,192.6,113.31z"/>
                        <path className={classes.st5} d="M199.47,133.53c0,0,8.19,4.78,5.98,19.45C204.1,146.38,202.04,139.91,199.47,133.53z" />
                    </g>
                </g>
            </svg>
        </div>
    )
}