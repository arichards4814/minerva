import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        position: "relative",
        bottom: 15,
        right: props => (props.position + 1) * 40,

    },
    st01: {
        fill: "#04B89F",
    },
    st02: {
        fill: "#EE3166",
    }
});

export default function Underline(props) {
    
    const classes = useStyles(props)
    const [class1, setClass1] = useState("circle0")

    useEffect(() => {
        // Update the document title using the browser API
        
        switch (props.position) {
            case 0:
                setClass1("circle0")
                break;
            case 1:
                setClass1("circle1")
                break;
            case 2:
                setClass1("circle2")
                break;
            case 3:
                setClass1("circle3")
                break;
            case 4:
                setClass1("circle4")
                break;
            default:
            // code block
        }
    });

    return (
        <div className={class1} >
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 400 44"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <path className={classes.st01} d="M210.13,91.43" />
                <rect x="19.78" y="17.22" className={classes.st02} width="360.45" height="10.47" />
            </svg>
        </div>
    )
}