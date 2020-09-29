import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        height: props => {
            if (props.height) {
                return props.height
            } else {
                return 30
            }
        },
        width: props => {
            if (props.width) {
                return props.width
            } else {
                return 30
            }
        },
        display: "inline-block",
        position: 'relative',
        left: 200,
        top: 5,
        // left: "48%",
        cursor: "pointer",
    },
    st0: {
        fill: "#00B79D"
    },
    st1: {
        fill: "#FFFFFF"
    }
});

export default function BackIcon(props) {
    const classes = useStyles(props)


    return (
        <div className={props.navlingHidden ? classes.root: classes.root} onClick={props.onClick}>
           <svg
                width="100%"
                height="100%"
                viewBox="0 0 242.29 242.04"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >

                <g>
                    <circle className={classes.st0} cx="121.15" cy="121.02" r="116" />
                    <polygon className={classes.st1} points="60.6,153.96 44.55,137.35 120.85,61.04 121.09,61.28 121.18,61.19 197.76,137.77 181.15,153.82 
		            120.94,93.62 	"/>
                </g>
            </svg>
        </div>
    )
}