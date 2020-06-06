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
        display: "inline-block",
        verticalAlign: "top"
    },
    st0: {
        fill: "#ED3466",
    },
    st1: {
        fill: "#FFFFFF"
    }
});

export default function CheckCircle(props) {
    const classes = useStyles(props)

    return (
        <div className={classes.root}>
            
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 300 300"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <circle className={classes.st0} cx="150" cy="150" r="139" />
                <polygon className={classes.st1} points="242.2,205.8 205.8,242.2 151.9,188.3 103.4,247.1 63.7,214.4 115.3,151.7 57.8,94.2 94.2,57.8 
	148.1,111.7 196.6,52.9 236.3,85.6 184.7,148.3 "/>  
            </svg>
        </div>
    )
}