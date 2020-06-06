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
        // left: "48%",
        cursor: "pointer",
    },
    st0: {
        fill: "#00B79D"
    },
    st1: {
        fill: "#00B79D"
    },
    st0NotHovered: {
        fill: "white"
    },
    st0Hovered: {
        fill: "rgb(220,220,220, .8)"
    }
});

export default function LeftBackIcon(props) {
    const classes = useStyles(props)


    const [hovered, setHovered] = useState(false)

    const handleHover = () => {
        setHovered(true)
    }
    const handleMouseOut = () => {
        setHovered(false)
    }

    return (
        <div className={classes.root} onClick={props.onClick} onMouseOver={handleHover} onMouseOut={handleMouseOut}>
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 225.3 225.06"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <g>
                    <circle className={hovered ? classes.st0Hovered : classes.st0NotHovered} cx="110" cy="110" r="120" />
                </g>
                <g>
                    <rect x="157.99" y="34.32" transform="matrix(0.7071 0.7071 -0.7071 0.7071 83.05 -122.6091)" className={classes.st0} width="63.07" height="9.24" />
                    <polygon className={classes.st0} points="153.58,120.26 109.36,76.05 166.27,27.6 200.48,61.82 	" />
                    <path className={classes.st0} d="M144.74,172.17L54.38,81.82c12.51-7.94,27.98-10.55,44.98-10.38l59.21,59.98
		C156.55,149.38,152.89,164.17,144.74,172.17z"/>
                    <polygon className={classes.st0} points="46.05,190.11 29.28,199.73 38.75,182.8 95.14,126.41 102.44,133.72 	" />
                </g>
            </svg>
        </div>
    )
}