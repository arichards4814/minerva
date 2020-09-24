import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import HandleScheme from '../assets/schemes/HandleScheme'


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
        // left: "48%",
        cursor: "pointer",
        display: "inline-block",
        transform: props => {
            if(props.pointing === "right"){
                return "rotate(180deg)"
            } else if (props.pointing === "up"){
                return "rotate(90deg)"
            } else if (props.pointing === "down") {
                return "rotate(270deg)"
            }
        }
    },
    st0: {
        fill: props => HandleScheme(props)
    },
    st1: {
        fill: "#FFFFFF"
    }
});

export default function LeftBackUnaltered(props) {
    const classes = useStyles(props)

    return (
        <div className={props.navlingHidden ? classes.root : classes.root} onClick={props.onClick} onMouseDown={props.onMouseDown}>
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 225.3 225.06"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <g>
                    <circle className={classes.st0} cx="113.37" cy="112.44" r="105.33" />
                    <polygon className={classes.st1} points="143.28,167.42 128.2,181.99 58.91,112.71 59.13,112.49 59.05,112.41 128.58,42.87 143.16,57.96 
		88.5,112.63 	"/>
                </g>
            </svg>
        </div>
    )
}