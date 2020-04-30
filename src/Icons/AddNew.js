import React, { useState, useEffect } from 'react'
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
        fill: "#00AA62",
    },
    st1: {
        fill: "#FFFFFF"
    }
});

export default function AddNew(props) {
    const classes = useStyles()

    const [hovered, setHovered] = useState(false)

    const handleHover = () => {
        setHovered(true)
    }
    const handleMouseOut = () => {
        setHovered(false)

    }

    return (
        <div className={classes.root + " selected icon-hover"} onMouseOver={handleHover} onMouseOut={handleMouseOut} onClick={props.onClick}>
            {props.tooltip === "top" && <div style={{ marginLeft: "32%" }}>
                <Tooltip width={100} right={40} content={props.content} showing={hovered ? "visible" : "hidden"} />
            </div>}
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 242.29 242.04"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <circle className={classes.st0} cx="121.15" cy="121.02" r="116" />
                <g>
                    <polygon className={classes.st1} points="109.6,66.87 109.6,175.17 132.69,175.17 132.69,67.26 	" />
                    <polygon className={classes.st1} points="175.3,109.47 66.99,109.47 66.99,132.57 174.9,132.57 	" />
                </g>
            </svg>
            {props.tooltip === "bottom" && <Tooltip width={100} content={props.content} showing={hovered ? "visible" : "hidden"} />}
        </div>
    )
}