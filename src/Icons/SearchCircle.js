import React, { useState } from 'react';
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
        display: "inline-block",
        cursor: "pointer"
    },
    st0: {
        fill: "#00B79D",
    },
    st1: {
        fill: "#231F20",
    }
});

export default function SearchCircle(props) {
    const classes = useStyles(props)

    const [hovered, setHovered] = useState(false)

    // const handleHover = () => {
    //     setHovered(true)
    // }
    // const handleMouseOut = () => {
    //     setHovered(false)

    // }

    return (
        <div className={classes.root} onClick={props.onClick}>
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 242.29 242.04"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <g>
                    <circle className={classes.st0} cx="112.65" cy="112.53" r="103.49" />
                    <g>
                        <g>
                            <path className={classes.st1} d="M100.09,51.15c-24.91,0-45.15,20.25-45.15,45.15c0,24.91,20.25,45.15,45.15,45.15
				c6.07,0,11.89-1.21,17.15-3.37c6.71-2.77,12.57-7.07,17.19-12.49c6.75-7.87,10.85-18.12,10.85-29.29
				C145.28,71.4,124.99,51.15,100.09,51.15z M108.36,124.14c-2.61,0.84-5.38,1.25-8.28,1.25C84.06,125.39,71,112.37,71,96.3
				c0-16.03,13.06-29.08,29.08-29.08c16.07,0,29.12,13.06,29.12,29.08c0,6.35-2.05,12.25-5.54,17.03
				C119.97,118.48,114.59,122.33,108.36,124.14z"/>
                        </g>
                        <path className={classes.st1} d="M160.55,177.13c-1.93,1.49-4.22,2.21-6.47,2.21c-3.17,0-6.35-1.45-8.44-4.18l-28.4-37.08l-6.79-8.84
			c-1.16-1.57-1.85-3.29-2.09-5.1c6.23-1.81,11.61-5.66,15.31-10.81c1.41,0.68,2.65,1.69,3.66,3.01l7.11,9.24l28.08,36.68
			C166.05,166.93,165.17,173.55,160.55,177.13z"/>
                    </g>
                </g>
            </svg>
        </div>
    )
}