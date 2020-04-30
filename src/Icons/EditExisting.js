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
        fill: "#ED2F65",
        stroke: "#FFFFFF",
        strokeMiterlimit: 10
    },
    st1: {
        fill: "#FFFFFF"
    }
});

export default function EditExisting(props) {
    const classes = useStyles()

    const [hovered, setHovered] = useState(false)

    const handleHover = () => {
        setHovered(true)
    }
    const handleMouseOut = () => {
        setHovered(false)

    }

    return (
        <div className={classes.root +" selected icon-hover"} onMouseOver={handleHover} onMouseOut={handleMouseOut} onClick={props.onClick}>
                {props.tooltip === "top" && <Tooltip width={100} right={25} content={props.content} showing={hovered ? "visible" : "hidden"} />}
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 242.29 242.04"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <circle class={classes.st0} cx="121.15" cy="121.02" r="116" />
                <g>
                    <polygon class={classes.st1} points="147.07,78.45 70.49,155.03 86.82,171.36 163.12,95.06 	" />
                    <path class={classes.st1} d="M161.56,63.81l-10.41,10.41l16.33,16.33l10.3-10.3c2.67-2.67,2.71-6.99,0.08-9.71l-6.43-6.65
		            C168.75,61.11,164.3,61.08,161.56,63.81z"/>
                    <polygon class={classes.st1} points="67.69,158.71 62.48,180.25 83.74,175.33 	" />
                </g>
            </svg>
            {props.tooltip === "bottom" && <Tooltip width={100} content={props.content} showing={hovered ? "visible" : "hidden"} />}
        </div>
    )
}