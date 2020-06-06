import React from 'react';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        width: 60,
        display: "inline-block"
    },
    st0: {
        fill: "#ED3466"
    },
    st1: {
        fill: "#00B79D"
    },
    st2: {
        fill: "#FFD009",
    }
});

export default function AppleIconNormal(props) {
    const classes = useStyles(props)
    

    return (
        <div className={classes.root} >

            <svg
                width="100%"
                height="100%"
                viewBox="0 0 400 350"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <g>
                    <circle className={classes.st0} cx="210.16" cy="186.9" r="136.94" />
                    <path className={classes.st1} d="M231.05,26.18c0,0-45.29,147.43-178.15,180.09C52.9,206.28,89.69,23.89,231.05,26.18z" />
                    <path className={classes.st2} d="M267.31,132.93c0,0,43.25,25.23,31.55,102.69C291.78,200.78,280.88,166.62,267.31,132.93z" />
                </g>
            </svg>
        </div>
    )
}