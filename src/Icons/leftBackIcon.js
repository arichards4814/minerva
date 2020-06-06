import React, { useState, useEffect } from 'react';
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

export default function LeftBackIcon(props) {
    const classes = useStyles(props)

    const [hovered, setHovered] = useState(false)

    const handleHover = () => {
        // setHovered(true)
    }
    const handleMouseOut = () => {
        // setHovered(false)

    }

    // console.log(props)

    return (
        <div className={props.navlingHidden ? classes.root: classes.root} onMouseOver={handleHover} onMouseOut={handleMouseOut} onClick={props.onClick}>
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