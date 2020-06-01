import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Tooltip from '../Components/Tooltip'


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
        fill: "#00AC62",
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
                width={"100%"}
                height="100%"
                viewBox="0 0 300 300"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <circle className={classes.st0} cx="148" cy="152" r="139" />
                <polygon className={classes.st1} points="43,159 134,252 251.7,81.5 221.8,54.5 130.7,195.4 66.5,127.1 " />
            </svg>
        </div>
    )
}