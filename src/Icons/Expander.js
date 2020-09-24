import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import HandleScheme from '../assets/schemes/HandleScheme'


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
        fill: props => HandleScheme(props),
    }
});

export default function (props) {
    const classes = useStyles(props)

    return (
        <div className={classes.root} onClick={props.onClick}>
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 242.29 125.04"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <polygon className={classes.st0} points="181.7,16.06 197.75,32.67 121.45,108.98 121.21,108.74 121.12,108.83 44.54,32.25 61.15,16.2 
	            121.36,76.4 "/>
            </svg>
        </div>
    )
}